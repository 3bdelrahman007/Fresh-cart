import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { userContext } from "../../Context/UserContext";
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from "../../Context/CartContext";
import { CiShoppingCart } from "react-icons/ci";

export default function NavBar() {
  const { token, setToken } = useContext(userContext);
  const navigate = useNavigate();
  const { cartItems } = useContext(cartContext);

  function logOut() {
    setToken(null);
    navigate("/login");
  }
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center gap-4 mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <FaShoppingCart className="text-2xl text-green-600 dark:text-white" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Fresh Cart
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center ms-auto p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full lg:flex justify-between grow lg:w-auto items-center"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            {token && (
              <>
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="products"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="cart"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="categories"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="brands"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Brands
                  </Link>
                </li>
                <li>
                  <Link
                    to="wishlist"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Wishlist
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className="font-medium flex flex-col items-center p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            {!token && (
              <>
                <li>
                  <Link
                    to="login"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="register"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}

            {token && (
              <>
                <li onClick={logOut}>
                  <span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-white lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent cursor-pointer">
                    SignOut
                  </span>
                </li>
                <li>
                  <Link to={"cart"}>
                    <span className="relative flex items-center py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:text-green-500 dark:hover:bg-gray-700 cursor-pointer transition-all duration-300">
                      <CiShoppingCart className="text-3xl" />
                      <span className="absolute -top-2 right-0 flex items-center justify-center w-5 h-5 bg-green-600 text-white text-xs font-bold rounded-full -translate-x-1/2 translate-y-1/2">
                        {cartItems}
                      </span>
                    </span>
                  </Link>
                </li>
              </>
            )}
            <li>
              <ToggleMode />
            </li>
            <li className="flex gap-4 py-2 px-3 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white">
              <a
                className="hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-green-700 lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                href=""
              >
                {" "}
                <FaFacebook />{" "}
              </a>
              <a
                className="hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-green-700 lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                href=""
              >
                {" "}
                <FaLinkedin />{" "}
              </a>
              <a
                className="hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-green-700 lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                href=""
              >
                {" "}
                <FaTiktok />{" "}
              </a>
              <a
                className="hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-green-700 lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                href=""
              >
                {" "}
                <FaTwitter />{" "}
              </a>
              <a
                className="hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-green-700 lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                href=""
              >
                {" "}
                <FaYoutube />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function ToggleMode() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.querySelector("html").classList.toggle("dark", isDark);
    localStorage.setItem("color-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      id="theme-toggle"
      type="button"
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
    >
      {isDark ? (
        <svg
          id="theme-toggle-dark-icon"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          id="theme-toggle-light-icon"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
