import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/logo/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navOptions = (
    <>
      <li className="list">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "hover")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="list">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "hover")}
          to="/colleges"
        >
          Colleges
        </NavLink>
      </li>
      <li className="list">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "hover")}
          to="/admission"
        >
          Admission
        </NavLink>
      </li>
      <li className="list">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "hover")}
          to="/my-college"
        >
          My College
        </NavLink>
      </li>

      <Link to="/login">
        <button className="login-btn uppercase hover">Login</button>
      </Link>
    </>
  );
  return (
    <section className="navBar z-10">
      <div className="flex justify-between items-center size text-black py-3">
        <div className="navbar-start sm:flex sm:items-center">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 navbarUl"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="">
            {/* <img src={logo} alt="logo" className="inline-block w-[200px]" /> */}
            <h1 className="text-2xl font-bold Roboto">anuBooking</h1>
          </Link>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full lg:w-[300px]"
          />
          <button className="btn btn-primary bg-[#ffb606] hover:bg-[#ffb606] text-white outline-[#ffb606] border-[#ffb606] hover:border-[#ffb606] absolute top-0 right-0 rounded-l-none">
            Search
          </button>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 items-center font-bold uppercase">
            {navOptions}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
