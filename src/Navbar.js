import React, { useState } from "react";
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import logo from "./logo/logo.png";
import logo2 from "./logo/logo2.png";
const Navbar = (props) => {
  const { setSearch, search, setCountry } = props;
  console.log(search);
  const [Nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!Nav);
  };

  return (
    <div
      className="flex items-center justify-between
     w-full h-[88px] bg-[#6750a4] text-white px-4 mb-10"
    >
      <div>
        <img
          src={logo}
          alt="logo"
          style={{ width: "200px" }}
          className="hidden md:flex"
        />
        <img
          src={logo2}
          alt="logo"
          style={{ width: "65px" }}
          className="flex md:hidden"
        />
      </div>
      <div>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="px-2 max-sm:w-32 w-80 lg:px-6 py-1 mx-4 rounded-full outline-none text-black placeholder:text-center placeholder:text-sm"
          type="text"
          placeholder="Search News"
        />
      </div>
      {/* Menu */}
      <div className="flex gap-2">
        <ul className="items-center justify-between gap-5 md:flex hidden">
          <button onClick={() => setCountry("us")}>
            <li>USA News</li>
          </button>
          <button onClick={() => setCountry("in")}>
            <li>India News</li>
          </button>
        </ul>
          <BsBell className="text-xl cursor-pointer"/>
      </div>
      {/* Mobile menu */}
      <div onClick={handleNav} className="z-20 md:hidden">
        {!Nav ? (
          <BiMenuAltRight className="text-3xl" />
        ) : (
          <BiMenuAltLeft className="text-3xl " />
        )}
      </div>
      <ul
        className={
          !Nav
            ? "hidden"
            : "absolute flex flex-col w-full h-screen bg-[#6750a4] top-0 right-0 items-center justify-center gap-5 z-10"
        }
      >
         <button onClick={() => setCountry("us")}>
            <li className="font-semibold text-xl">USA News</li>
          </button>
          <button onClick={() => setCountry("in")}>
            <li className="font-semibold text-xl">India News</li>
          </button>
      </ul>
    </div>
  );
};

export default Navbar;
