import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 mt-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to={"/"}
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <FaShoppingCart className="text-2xl text-green-600 dark:text-white" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Fresh Cart
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to={"/"} className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
