"use client";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { ItemsContextProvider } from "../../context/ItemsContextCart";

import { AuthContextProvider } from "../../context/AuthContext";
import Chat from "../../comps/chat";

// const metadata = {
//   title: "E-commerece Tea Website",
//   description: "Generated by create next app",
// };

function RootLayout({ children }) {
  // to render only one time to get the backend test server running 30 delay after in-active 15minutes
  const [renderOneTime, setRenderOneTime] = useState(false);

  // Show Css dropDown in Mediaquery Nav
  const [showDropCss, setShowDropCss] = useState(false);

  // Show Css dropDown in Mediaquery Nav
  const [value, setValue] = useState(0);

  // Show Refresh Login or Profile state
  const [ValueNumber, setValueNumber] = useState(0);

  // Show Login or Profile Button by check LocalStorage
  const [LoginOrProfile, setLoginOrProfile] = useState(false);

  if (typeof window !== "undefined") {
    // Perform localStorage action
    // const item = localStorage.getItem("key");

    const localStoragechecking = JSON.parse(
      localStorage.getItem("GamingcartItems")
    );
    let emptyarray = [];
    if (!localStorage.getItem("GamingcartItems")) {
      localStorage.setItem("GamingcartItems", JSON.stringify(emptyarray));
    }
  }

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:4000/api/items");

      const item = await response.json();

      if (response.ok) {
        // dispatcho({ type: "FETCHED-ALL", payload: json });
        setValue(value + 1);
      }
    };

    fetchItems();
  }, [renderOneTime]);

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("Gaminguser")) &&
      Object.keys(JSON.parse(localStorage.getItem("Gaminguser"))).length !== 0
    ) {
      setLoginOrProfile(true);
    }

    if (
      // localStorage.getItem("GamingcartItems") === null
      JSON.parse(localStorage.getItem("Gaminguser")) &&
      Object.keys(JSON.parse(localStorage.getItem("Gaminguser"))).length === 0
    ) {
      setLoginOrProfile(false);
    }
  }, [ValueNumber]);

  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <ItemsContextProvider>
            <div className="nav">
              <Link
                onClick={() => {
                  setValueNumber(ValueNumber + 1);
                }}
                href="/"
              >
                <div className="nav-each-part-one">
                  <h1 className="TitleStyle">LOGO</h1>
                </div>
              </Link>

              <div className="second-part-layout">
                <div className="nav-each-part-two">
                  <Link
                    onClick={() => {
                      setValueNumber(ValueNumber + 1);
                    }}
                    href="/"
                  >
                    Home
                  </Link>

                  <Link
                    onClick={() => {
                      setValueNumber(ValueNumber + 1);
                    }}
                    href="/contacts"
                  >
                    Aboutus
                  </Link>
                  <Link
                    onClick={() => {
                      setValueNumber(ValueNumber + 1);
                    }}
                    href="/portfolio"
                  >
                    Portfolio
                  </Link>
                  <Link
                    onClick={() => {
                      setValueNumber(ValueNumber + 1);
                    }}
                    href="/services"
                  >
                    Services
                  </Link>
                  <Link
                    onClick={() => {
                      setValueNumber(ValueNumber + 1);
                    }}
                    href="/services"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="nav-each-part-three">
                  <Link
                    onClick={() => {
                      setValueNumber(ValueNumber + 1);
                    }}
                    href="/login"
                  >
                    {!LoginOrProfile && "Login"}
                    {LoginOrProfile && "Profile"}
                  </Link>
                </div>
              </div>

              <button
                className="svgdropdown"
                onClick={() => {
                  if (showDropCss) {
                    setShowDropCss(false);
                  }
                  if (!showDropCss) {
                    setShowDropCss(true);
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {showDropCss && (
                <div className="nav-two-three-InDropDown">
                  <div className="nav-each-part-one-InDropDown">
                    <button
                      onClick={() => {
                        setShowDropCss(false);
                      }}
                    >
                      X
                    </button>
                  </div>
                  <div className="nav-each-part-two-InDropDown">
                    <Link href="/">Home</Link>

                    <Link href="/contacts">Aboutus</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/services">Services</Link>
                    <Link
                      href="/services"
                      className="nav-each-part-two-InDropDownsvg"
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </Link>

                    <div className="nav-each-part-three-InDropDown">
                      <Link href="/login">Login</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Chat></Chat>
            {children}
          </ItemsContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}

export default RootLayout;
