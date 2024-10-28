import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-3xl font-bold">
          Cyberwizdev Blog
        </Link>
        <nav className="space-x-4 hidden md:block">
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-300">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-300">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-300">
            Contact
          </Link>
        </nav>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button id="menu-button" className="text-white hover:text-blue-300">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
