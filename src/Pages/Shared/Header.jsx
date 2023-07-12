import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-primary">
        <div className="navbar container mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Tasty Creations</a>
      </div>
      <div className="flex-none gap-2 hidden md:flex">
        <div className="me-5">
            <ul className="font-medium flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact-us">Contact us</Link>
                <Link to="/login">Log in</Link>
            </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1689004752~exp=1689005352~hmac=55b5ce6a489458578ed896ef4cc5b61c7caf18824e74e9046ce30ae141e09e39" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Header;
