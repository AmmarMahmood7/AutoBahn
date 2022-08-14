import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
let allPosts;
const Dashboard = () => {
  return (
    <section className="section-center">
      <h3 style={{ textAlign: "center" }}>Welcome to the Dashboard</h3>
      <Link to="/form">
        <button type="button" className="btn">
          Go to Form
        </button>
      </Link>
    </section>
  );
};

export { Dashboard, allPosts };
