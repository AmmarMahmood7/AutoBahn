import { useContext, useState } from "react";
import { useEffect } from "react";
import { PostsProvider } from "../App";
import Post from "./Post";

function Form() {
  const path = window.location.pathname.toLowerCase();
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [posts, setPosts, URL] = useContext(PostsProvider);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please enter some text");
    } else if (text && isEditing) {
      setPosts(
        posts.map((item) => {
          if (item.id === editId) {
            return { ...item, title: text };
          }
          return item;
        })
      );
      setText("");
      setEditId(null);
      setIsEditing(false);
    } else {
      (async () => {
        try {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: text }),
          };
          const response = await fetch(URL, requestOptions);
          const data = await response.json();
          //since the api itself doesn't get updated, newly added posts will have similar Ids
          //therefore while deleting, The posts with same ids will all be deleted.
          setPosts([...posts, data]);
        } catch (error) {
          console.log(error);
        }
      })();
      setText("");
    }
  };

  const deletePost = (id) => {
    (async () => {
      try {
        let res = await fetch(URL + id, { method: "DELETE" });
        if (res.ok) {
          console.log("request Successful");
        }
      } catch (error) {
        console.log(error);
      }
    })();
    const filteredPosts = posts.filter((item) => {
      return item.id !== id;
    });
    setPosts(filteredPosts);
  };

  const editPost = (id) => {
    const specificItem = posts.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setText(specificItem.title);
    (async () => {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: specificItem.title }),
      };
      const response = await fetch(URL + id, requestOptions);
      const data = await response.json();
    })();
  };
  return (
    <section className="section section-center">
      <form onSubmit={handleSubmit} className="form">
        <h3>Add New Post</h3>
        <div className="form-control">
          <input
            type="text"
            className="input__field"
            placeholder="Enter posts"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      <div className="post-container">
        <Post
          posts={posts}
          deletePost={deletePost}
          editPost={editPost}
          path={path}
        />
      </div>
    </section>
  );
}

export default Form;
