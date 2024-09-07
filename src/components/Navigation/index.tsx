import { Bell, List, ShoppingCartSimple } from "@phosphor-icons/react";
import { navigate } from "gatsby";
import * as React from "react";
import { useEffect, useState } from "react";

interface NavigationProps {
  active: string;
}

const Navigation: React.FC<NavigationProps> = ({ active }) => {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [check, setCheck] = useState<string | null>(null);
  const [user, setUser] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
    setCheck(token);
  }, []);

  const showMenuTray = () => {
    setMobileMenu(!showMobileMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setCheck(null);
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-10"
          onClick={closeSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 w-72 md:w-96 lg:w-[30rem] bg-white h-full z-10 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="pt-24 lg:pt-36 px-4">
          <div className="px-4 font-bold pb-5 text-[#520B1F]">Your Cart</div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex justify-center rounded-2xl overflow-hidden items-center w-full">
              <img src="/img/f-1.webp" alt="logo" className="w-80 " />
            </div>
            <div className="w-full">
              <div className="text-lg font-bold pb-5">Description</div>
              <div className="text-sm tracking-wider">
                We’re sorry you couldn’t find what you are looking for. Feel
                free to tell us what 
              </div>
              <div className="pt-7 text-xl font-semibold text-[#2B1139]">
                $ 20.00 
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-300 mt-10">
            <div className="flex items-start gap-4 justify-between w-full text-[#520B1F] px-4 pt-10">
              <div className="font-bold text-3xl">Total</div>
              <div className="flex flex-col gap-4">
                <div className="font-bold text-3xl text-right">$ 20.00</div>
                <div className="pt-4">
                  <button
                    className="bg-[#520B1F] text-white px-10 py-3 text-sm font-bold rounded-full"
                    onClick={toggleSidebar}
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-30 font-semibold border-b bg-white">
        <nav className="container px-4">
          <div className="flex justify-between items-center gap-2 py-6 capitalize">
            <div className="flex gap-10">
              <a href="/">
                <img
                  src="/img/bcart-logo.webp"
                  alt="logo"
                  className="w-16 md:w-20"
                />
              </a>
              <div className="hidden lg:flex gap-10 lg:gap-4">
                <a
                  href="/about"
                  className={`hover:text-[#2B1139] py-2 lg:px-2 ${
                    active === "about" ? " text-[#520B1F] font-bold" : ""
                  }`}
                >
                  about
                </a>
                <a
                  href="/promo-pack"
                  className={`hover:text-[#2B1139] py-2 lg:px-2 ${
                    active === "promo packs" ? " text-[#520B1F] font-bold" : ""
                  }`}
                >
                  promo packs
                </a>
                <a
                  href="/"
                  className={`hover:text-[#2B1139] py-2 lg:px-2 ${
                    active === "blog" ? " text-[#520B1F] font-bold" : ""
                  }`}
                >
                  blog
                </a>
                <a
                  href="/technical-support"
                  className={`hover:text-[#2B1139] py-2 lg:px-2 ${
                    active === "support" ? " text-[#520B1F] font-bold" : ""
                  }`}
                >
                  support
                </a>
                <a
                  href="/partners"
                  className={`hover:text-[#2B1139] py-2 lg:px-2 ${
                    active === "partner" ? " text-[#520B1F] font-bold" : ""
                  }`}
                >
                  partners
                </a>
              </div>
            </div>
            {check === null ? (
              <div className="flex gap-4">
                <button
                    onClick={toggleSidebar}
                    className="fill-[#737B7D] hover:fill-gray-600"
                  >
                    <ShoppingCartSimple size={24} color="" />
                  </button>
                  <button className="fill-[#737B7D] hover:fill-gray-600">
                    <Bell size={24} color="" />
                  </button>
              <div className="relative menu-avatar cursor-pointer hidden lg:block">
                <div className="flex gap-4 items-center">
                  
                  <div className="bg-gray-200 rounded-full w-12 h-12 overflow-hidden">
                    <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                  </div>
                </div>
                <div className="absolute dropdown border-0 mt-4 border-aluminium top-10 right-0 w-[150px] bg-white text-black shadow-xl rounded-md overflow-hidden">
                  <ul className="py-1 w-full">
                    <li
                      onClick={() => navigate("/profile")}
                      className="px-4 hover:bg-blue hover:text-white hover:bg-[#520B1F] py-3 cursor-pointer"
                    >
                      Profile
                    </li>
                    <li
                      onClick={handleLogout}
                      className="px-4 hover:bg-blue hover:text-white hover:bg-[#520B1F] py-3 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
              </div>
            ) : (
              <div className="bg-[#520B1F] hover:bg-[#520b1fd5] text-white px-4 py-3 font-medium items-center hidden lg:flex gap-4 rounded-full">
                <a href="/login" className="text-light_black hover:text-blue">
                  Sign In / Sign Up
                </a>
              </div>
            )}
            <div className="lg:hidden flex items-center">
              <button className="mobile-menu-button" onClick={showMenuTray}>
                <List size={28} />
              </button>
            </div>
          </div>
          <div
            className={`mobile-menu py-2 uppercase z-10 ${
              showMobileMenu ? "" : "hidden"
            } lg:hidden`}
          >
            <a
              href="/"
              className="block py-2 px-4 text-sm text-white hover:bg-blue"
            >
              Home
            </a>
            <a
              href="/about-us"
              className="block py-2 px-4 text-sm text-white hover:bg-blue"
            >
              about us
            </a>
            <a
              href="/parcel-content"
              className="block py-2 px-4 text-sm text-white hover:bg-blue"
            >
              parcels
            </a>
            <a
              href="/contact-us"
              className="block py-2 px-4 text-sm text-white hover:bg-blue"
            >
              contact us
            </a>
            <a
              href="/disclaimer"
              className="block py-2 px-4 text-sm text-white hover:bg-blue"
            >
              disclaimer
            </a>
            {check === null ? (
              <div>
                <a
                  href="/login"
                  className="block py-2 px-4 text-sm text-green hover:text-white hover:bg-blue uppercase"
                >
                  sign in
                </a>
                <a
                  href="/sign-up"
                  className="block py-2 px-4 text-sm text-blue hover:text-white hover:bg-blue uppercase"
                >
                  sign up
                </a>
              </div>
            ) : (
              <div>
                <a
                  href="/profile"
                  className="block py-2 px-4 text-sm text-blue hover:text-white hover:bg-blue"
                >
                  profile
                </a>
                <button
                  onClick={handleLogout}
                  className="block py-2 px-4 text-sm uppercase text-red hover:text-white hover:bg-blue"
                >
                  logout
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;