import { useState } from "react";
import { useEffect } from "react";
import Form from "./pages/Form";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { createContext } from "react";

export const PostsProvider = createContext();
function App() {
  const URL = "https://jsonplaceholder.typicode.com/posts/";

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setPosts(data);
      console.log(posts)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostsProvider.Provider value={[posts, setPosts, URL]} >
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </ PostsProvider.Provider>
  );
}

export default App;
