import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages and  components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { isAuthenticated } from "../auth/isAuthenticated";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={isAuthenticated() ? <Home /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
