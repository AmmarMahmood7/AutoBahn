import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import { PostsProvider } from "../App";
import { useContext } from "react";
const Dashboard = () => {
  const [posts, setPosts] = useContext(PostsProvider);

  return (
    <section className="section-center">
      <h3 style={{ textAlign: "center" }}>Welcome to the Dashboard</h3>
      <Link to="/form">
        <button type="button" className="btn">
          Click to Perform Crud
        </button>
      </Link>
      <div className="post-container">
        <Post posts={posts} />
      </div>
    </section>
  );
};

export default Dashboard;
