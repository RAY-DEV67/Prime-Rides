import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

export function Navbar() {
const [scrolled, setscrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
        setscrolled(true)
    } else {
        setscrolled(false)
    }
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, []);

  return (
    <div className={`flex flex-col lg:${scrolled ? "block" : "hidden"}`}>
      <div className="hidden lg:block lg:absolute lg:w-[30%] ">
        {/* <Profile/> */}
      </div>
      <div className={`fixed px-[1rem] w-[100%] navbar ${scrolled ? "bg-[#333e51]" : "bg-transparent"} z-10`}>
        <div className="flex items-center justify-between">
          <div className="lg:w-[100vw] lg:flex lg:flex-col lg:items-center">
            <Link to="/">
            <img src={logo} alt="logo" className="w-[20%] lg:w-[200px]"/>
          </Link>
          </div>
          <div className="flex justify-between lg:hidden">
           <Link to="/Profile">
           <svg
              viewBox="0 0 24 24"
              width="30px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                  stroke={
                    window.location.pathname === "/Profile"
                      ? "#deab24"
                      : "#2099fe"
                  }
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                  stroke={
                    window.location.pathname === "/Profile"
                      ? "#deab24"
                      : "#2099fe"
                  }
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg></Link>
                      </div>
          </div>
      </div>
    </div>
  );
}
