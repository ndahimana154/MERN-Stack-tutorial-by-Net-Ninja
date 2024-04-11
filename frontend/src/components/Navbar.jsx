import { Link } from "react-router-dom";
import { isAuthenticated } from "../../auth/isAuthenticated";
const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.href = "/login";
  };
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <div className="">
          {isAuthenticated() ? (
            <>
              <button onClick={handleLogout} className="logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link> &nbsp;
              <Link to="/signup">Signup</Link>{" "}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
