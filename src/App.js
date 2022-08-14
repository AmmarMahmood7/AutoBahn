
import Form from "./pages/Form";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
