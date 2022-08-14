import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Post = ({ posts, deletePost, editPost, ...props }) => {
  return (
    <div className="post-list">
      {posts.map((item) => {
        const { id, title } = item;
        return (
          <article key={item.id} className="post-item">
            <p>{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => {
                  editPost(id);
                }}
              >
                {props.path == "/form" ? <FaEdit /> : ""}
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => {
                  deletePost(id);
                }}
              >
                {props.path == "/form" ? <FaTrash /> : ""}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Post;
