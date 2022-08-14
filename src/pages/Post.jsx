import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const Post = ({ posts, deletePost, editPost }) => {
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
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => {
                  deletePost(id);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Post;
