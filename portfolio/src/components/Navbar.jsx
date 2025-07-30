import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-[70%] mx-auto bg-white/50 rounded-2xl flex-row items-center justify-between px-4 py-2 backdrop-blur-md">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#59168b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-code-xml-icon lucide-code-xml"
          >
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
          </svg>
          <span className="ml-2 font-mono text-lg font-bold text-purple-900">
            Dev_ojikutu
          </span>
        </a>
      </div>

      <div className="w-[70%] rounded-2xl px-6 py-2 font-mono font-medium">
        <ul className="flex flex-row items-center gap-6 font-bold text-purple-800">
          <li>
            <a
              href="/"
              className="hover:border-b-2 hover:text-purple-600 hover:px-2 hover:py-2 rounded-lg w-3xl bg-purple-600 text-white"
            >
              Bio
            </a>
          </li>
          <li>
            <a href="/" className="hover:border-b-2 hover:text-purple-600">
              Skills
            </a>
          </li>
          <li>
            <a href="/" className="hover:border-b-2 hover:text-purple-600">
              Projects
            </a>
          </li>
          <li>
            <a href="/" className="hover:border-b-2 hover:text-purple-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
