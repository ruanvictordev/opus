import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Register from "./pages/Resgiter/Resgiter";

import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Candidate from "./pages/Candidate/Candidate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/candidate" element={<ProtectedRoute />}>
          <Route path="" element={<Candidate />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
