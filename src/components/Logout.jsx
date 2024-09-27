import { Link } from "react-router-dom";

export const Logout = () => {
  return (
    <div className="loggedout">
      <div className="top">You have been successfully logged out</div>

      <div className="bottom">
        <Link to={"/login"}>
          {" "}
          <button className="login">Log in</button>
        </Link>

        <Link to={"/signup"}>
          <button className="signup">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};
