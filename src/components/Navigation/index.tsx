import { Bell, Empty, List, ShoppingCartSimple, Trash } from "@phosphor-icons/react";
import { navigate } from "gatsby";
import * as React from "react";
import { useEffect, useState } from "react";
import { getUserData, getUserToken, logoutUserData, storeUserData, storeUserToken } from "../../services/user_service";
import { getCart, removeFromCart, calculateTotal, getPurchasingProducts } from "../../services/add_to_cart";
import { Toaster, toast } from "sonner";

interface NavigationProps {
  active: string;
}

const Navigation: React.FC<NavigationProps> = ({ active }) => {
  const token_ = getUserToken();
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [check, setCheck] = useState(false);
  const [user, setUser] = useState<any | null>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [buttonLoader, setButtonLoader] = useState<boolean>(false);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const refreshCart = () => {
    setCart(getCart());
    setTotal(calculateTotal());

    console.log("cart : ", cart);
  };



  //*****fetch token from the url for those who used google auth */
  let urlParams;

  if (typeof window !== 'undefined') {
    urlParams = new URLSearchParams(window.location.search);
  } else {
    // Handle the server-side rendering case if needed
    urlParams = new URLSearchParams();
  }
  const token = urlParams.get("token");
  const getUserData_ = async () => {
    // setLoader(true);
    try {
      const response = await fetch(
        `https://backend.bcartgh.com/api/user-profile`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (Object.keys(data.data).length > 0) {
        //****Store User Data in Local Storage****//
        storeUserData({ user: data.data });
        storeUserToken({ token: token });
        // toast.success('Login Successful', {
        //   position: 'top-center',
        //   duration: 5000,
        //   description:data.message
        // });
      }
      // setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    refreshCart();
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const removeAndRefresh = (id:number) => {
    removeFromCart(id);
    refreshCart();
  }

  //******order photo now */
  const buyNow = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setButtonLoader(true);
    e.preventDefault();
    // console.log(getPurchasingProducts());
    const response = await fetch(`https://backend.bcartgh.com/api/buy-photos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token_.token}`,
        },
        body: JSON.stringify({
          photo_ids: getPurchasingProducts(),
        }),
    });
    const data = await response.json();

    console.log("data : ", data);
    
    if (data.success === true && response.status === 200) {
        // console.log(data);
        setButtonLoader(false);
        toast.success('Redirecting .....', {
          position: 'top-center',
          duration: 5000,
          description:data.message
        });
        //****Store User Data in Local Storage****//
        // storeUserData({"user":data.data});
        // storeUserToken({"token":data.token});
        window.location.href = `${data.data.authorization_url}`;
    } else {
      setButtonLoader(false);
        toast.error('Purchase Failed', {
            position: 'top-center',
            duration: 5000,
            description:data.message
          });
    }
}

  useEffect(() => {
    const userData = getUserData();

    if (token !== null) {
      getUserData_();
    }

    if (!!userData) {
      setUser(userData);
      setCheck(true);
    }

    refreshCart();

    // console.log("check : ", check);
  }, []);

  const showMenuTray = () => {
    setMobileMenu(!showMobileMenu);
  };

  const handleLogout = () => {
    logoutUserData();
    setCheck(false);
    setUser(null);
    navigate("/");
  };

  // console.log("user : ", user);

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
        className={`fixed top-0 right-0 w-72 md:w-96 lg:w-[30rem] bg-white h-full z-10 transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="pt-24 lg:pt-36 px-4">
  <div className="px-4 font-bold pb-5 text-[#520B1F]">
    {cart.length > 0 ? "Your Cart" : ""}
  </div>
  
  {cart.length > 0 ? (
    <div className="h-[60vh] overflow-y-scroll no-scrollbar pb-4">
      {cart.map((item: any, index: number) => (
        item.has_purchased === 1 ? null :
        <div
          key={index}
          className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-b-2"
        >
          <div className="flex justify-center rounded-2xl overflow-hidden items-center w-full">
            <img src={item.image_url} alt="logo" className="w-80" />
          </div>
          <div className="w-full">
            <div className="text-lg font-bold pb-5">Description</div>
            <div className="text-sm tracking-wider">{item.description}</div>
            <div className="flex justify-between items-end">
              <div className="pt-7 text-xl font-semibold text-[#2B1139]">
              GH₵ {item.price}
              </div>
              <button
                title="Remove from cart"
                type="button"
                onClick={() => removeAndRefresh(item.id)}
                className=""
              >
                <Trash
                  className="w-6 h-6 fill-red-700"
                  color=""
                  weight="duotone"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="w-full">
      <div className="flex flex-col items-center justify-between gap-4">
        <ShoppingCartSimple
          className="w-28 h-28 fill-red-700"
          color=""
          weight="duotone"
        />
        <div className="text-lg text-red-700 font-bold pb-5">
          Your Cart is Empty
        </div>
      </div>
    </div>
  )}

  {cart.length > 0 ? (
    <div className="mt-4">
      <div className="flex items-start gap-4 justify-between w-full text-[#520B1F] px-4 pb-10">
        <div className="font-bold text-3xl">Total</div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-3xl text-right">GH₵ {total.toFixed(2)}</div>
          <div className="pt-4">
            <button
              className="bg-[#520B1F] text-white px-8 md:px-10 py-3 text-sm font-bold rounded-full"
              onClick={(e) => buyNow(e)}
              type="button"
            >
              {buttonLoader === true ? "Processing ...... " : "Buy now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null}
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
            {check === true ? (
              <div className="hidden lg:flex gap-4">
                <button
                  type="button"
                  title="Open menu"
                  onClick={toggleSidebar}
                  className="fill-[#ccc] stroke-black hover:fill-gray-600 relative"
                >
                  <div className="absolute w-full top-1 right-3">
                  <div className="bg-[#520B1F] text-white p-[2px] text-xs w-full rounded-full">{getCart().length}</div>
                    </div><ShoppingCartSimple size={24} color="" weight="fill" />
                </button>
                <button
                  type="button"
                  title="Open menu"
                  className="fill-[#737B7D] hover:fill-gray-900">
                  <Bell size={24} color="" weight="fill"
                  />
                </button>
                <div className="relative menu-avatar cursor-pointer hidden lg:block">
                  <div className="flex gap-4 items-center">

                    <div className="bg-gray-200 rounded-full w-12 h-12 overflow-hidden">
                      {user.user.profile_picture ? (
                        <img src={user.user.profile_picture} alt="logo" className="w-full h-full" />
                      ) : (
                        <img src="/img/user-avatar.svg" alt="logo" className="w-full h-full p-2" />
                      )}
                    </div>
                  </div>
                  <div className="absolute dropdown border-0 mt-4 border-aluminium top-10 right-0 w-[150px] bg-white text-black shadow-xl rounded-md overflow-hidden">
                    <ul className="py-1 w-full">
                      <li
                        onClick={() => window.location.href = "/profile"}
                        className="px-4 hover:bg-blue hover:text-white hover:bg-[#520B1F] py-3 cursor-pointer"
                      >
                        Profile
                      </li>
                      <li
                        onClick={() => navigate("/settings")}
                        className="px-4 hover:bg-blue hover:text-white hover:bg-[#520B1F] py-3 cursor-pointer"
                      >
                        Settings
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
            <div className="pr-2 flex items-end gap-1">
                <button
                  type="button"
                  title="Open menu"
                  onClick={toggleSidebar}
                  className="fill-[#ccc] stroke-black hover:fill-gray-600 relative"
                >
                  <div className="absolute w-full top-1 right-3">
                  <div className="bg-[#520B1F] text-white p-[2px] text-xs w-full rounded-full">{getCart().length}</div>
                    </div><ShoppingCartSimple size={24} color="" weight="fill" />
                </button>
                <button
                  type="button"
                  title="Open menu"
                  className="fill-[#737B7D] hover:fill-gray-900">
                  <Bell size={24} color="" weight="fill"
                  />
                </button>
                </div>
              <button
                type="button"
                title="Open menu"
                className="mobile-menu-button"
                onClick={showMenuTray}>
                <List size={28} />
              </button>
            </div>
          </div>
          <div
            className={`mobile-menu py-2 uppercase z-10 ${showMobileMenu ? "" : "hidden"
              } lg:hidden`}
          >
            <a
              href="/"
              className="block py-2 px-4 text-sm text-[#520B1F] hover:text-[#2B1139]"
            >
              Home
            </a>
            <a
                  href="/about"
                  className="block py-2 px-4 text-sm text-[#520B1F] hover:text-[#2B1139]" 
                >
                  about
                </a>
                <a
                  href="/promo-pack"
                  className="block py-2 px-4 text-sm text-[#520B1F] hover:text-[#2B1139]"
                >
                  promo packs
                </a>
                <a
                  href="/"
                  className="block py-2 px-4 text-sm text-[#520B1F] hover:text-[#2B1139]"
                >
                  blog
                </a>
                <a
                  href="/technical-support"
                  className="block py-2 px-4 text-sm text-[#520B1F] hover:text-[#2B1139]"
                >
                  support
                </a>
                <a
                  href="/partners"
                  className="block py-2 px-4 text-sm text-[#520B1F] hover:text-[#2B1139]"
                >
                  partners
                </a>
            {check === false ? (
              <div>
                <a
                  href="/login"
                  className="block py-2 px-4 text-sm hover:text-[#520B1F] text-[#2B1139] uppercase"
                >
                  sign in
                </a>
                <a
                  href="/sign-up"
                  className="block py-2 px-4 text-sm hover:text-[#520B1F] text-[#2B1139] uppercase"
                >
                  sign up
                </a>
              </div>
            ) : (
              <div>
                <a
                  onClick={() => navigate("/profile")}
                  className="block py-2 px-4 text-sm hover:text-[#520B1F] text-[#2B1139]"
                >
                  profile
                </a>
                <button
                  type="button"
                  title=""
                  onClick={() => navigate("/settings")}
                  className="block py-2 px-4 text-sm uppercase hover:text-[#520B1F] text-[#2B1139]"
                >
                  settings
                </button>
                <button
                  type="button"
                  title=""
                  onClick={handleLogout}
                  className="block py-2 px-4 text-sm uppercase hover:text-[#520B1F] text-red-600"
                >
                  logout
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default Navigation;