import { List } from "@phosphor-icons/react";
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    setUser(storedUser);
    setCheck(token);
  }, []);

  const showMenuTray = () => {
    setMobileMenu(!showMobileMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setCheck(null);
    setUser(null);
    navigate('/');
  };

  return (
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
              className={`hover:text-[#2B1139] py-2 lg:px-2 ${active === "about" ? " text-[#520B1F] font-bold" : ""
                }`}
            >
              about
            </a>
            <a
              href="/promo-pack"
              className={`hover:text-[#2B1139] py-2 lg:px-2 ${active === "promo packs" ? " text-[#520B1F] font-bold" : ""
                }`}
            >
              promo packs
            </a>
            <a
              href="/"
              className={`hover:text-[#2B1139] py-2 lg:px-2 ${active === "blog" ? " text-[#520B1F] font-bold" : ""
                }`}
            >
              blog
            </a>
            <a
              href="/technical-support"
              className={`hover:text-[#2B1139] py-2 lg:px-2 ${active === "support" ? " text-[#520B1F] font-bold" : ""
                }`}
            >
              support
            </a>
            <a
              href="/partners"
              className={`hover:text-[#2B1139] py-2 lg:px-2 ${active === "partner" ? " text-[#520B1F] font-bold" : ""
                }`}
            >
              partners
            </a>
          </div>
          </div>
          {check !== null ? (
            <div className="relative menu-avatar cursor-pointer hidden lg:block">
              <div className="flex gap-4 items-center">
                <div className="bg-white rounded-full p-6"></div>
                <div>{user}</div>
              </div>
              <div className="absolute dropdown border-0 mt-4 border-aluminium top-10 right-0 w-[150px] bg-white text-black shadow-xl rounded-md overflow-hidden">
                <ul className="py-1 w-full">
                  <li
                    onClick={() => navigate('/profile')}
                    className="px-4 hover:bg-blue hover:text-white py-3 cursor-pointer"
                  >
                    Profile
                  </li>
                  <li
                    onClick={handleLogout}
                    className="px-4 hover:bg-blue hover:text-white py-3 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-[#520B1F] hover:bg-[#520b1fd5] text-white px-4 py-3 font-medium items-center hidden lg:flex gap-4 rounded-full">
              <a
                href="/login"
                className="text-light_black hover:text-blue"
              >
                Sign In / Sign Up 
              </a>
            </div>
          )}
          <div className="lg:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={showMenuTray}
            >
              <List size={28} />
            </button>
          </div>
        </div>
        <div
          className={`mobile-menu py-2 uppercase z-10 ${showMobileMenu ? "" : "hidden"} lg:hidden`}
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
  );
};

export default Navigation;