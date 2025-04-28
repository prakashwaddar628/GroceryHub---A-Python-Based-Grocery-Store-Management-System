"use client";

import { GrCart } from "react-icons/gr";
import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();

  const handleSignUp = ()=>{
    router.push('/login')
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`min-w-[1280px] px-6 py-4 md:px-20 bg-blue-600 flex items-center justify-between top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mr-4">
        <div className="text-white font-bold text-xl">Logo</div>
      </div>
      <div className="mr-2">
        <select className="w-full px-2 py-2 text-gray-700 focus:outline-none rounded-md bg-gray-100">
          <option>English</option>
          <option>हिन्दी</option>
          <option>ಕನ್ನಡ</option>
        </select>
      </div>
      <div className="rounded-full flex-grow flex items-center">
        <input
          type="search"
          name="search"
          id="search"
          className="w-full px-6 py-2 text-gray-700 focus:outline-none rounded-l-full placeholder:text-gray-400 bg-gray-100"
          placeholder="Search..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700 focus:outline-none rounded-r-full">
          <MdSearch size={30}/>
        </button>
      </div>
      <div className="flex items-center ml-4 space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none" onClick={handleSignUp}>
          Sign Up
        </button>
        <GrCart size={32} className="text-white cursor-pointer" />
      </div>
    </nav>
  );
}