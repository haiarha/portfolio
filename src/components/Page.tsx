import React, { useState } from "react";
import { Link } from "gatsby";

const Page: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-100 min-h-screen">
      <button
        className="block sm:hidden fixed top-4 right-4 p-2 bg-gray-800 text-white"
        onClick={() => setIsOpen((s) => !s)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <nav
        className={`bg-gray-700 text-white p-4 block sm:hidden ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-2">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </nav>

      <nav className="bg-gray-700 text-white p-4 hidden sm:flex justify-center">
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        {children}
      </div>
    </div>
  )
}

export default Page;