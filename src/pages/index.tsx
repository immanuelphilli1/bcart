import * as React from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/Banner";
import { ArrowRight } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { storeUserData, storeUserToken } from "../services/user_service";
import { Toaster, toast } from "sonner";

const IndexPage: React.FC<PageProps> = () => {
  const [categories, setCategories] = useState<any>([]);
  const [featuredCreative, setFeaturedCreative] = useState<any>([]);
  const [featuredCreatives, setFeaturedCreatives] = useState<any>([]);
  const [searchKey, setSearchKey] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  const apiUrl = process.env.BASE_URL;

  //*******fetch all featured categories */
  const getCreativeCategories = async () => {
    try {
      const response = await fetch(
        `https://backend.bcartgh.com/api/featured-creative-categories`,
        // 'https://b578-154-161-187-132.ngrok-free.app/api/featured-creative-categories',
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      setCategories(data.data);
    } catch (error) {}
  };

  //*******fetch all featured creatives */
  const getFeaturedCreatives = async () => {
    try {
      const response = await fetch(
        `https://backend.bcartgh.com/api/featured-creatives`,
        // 'https://b578-154-161-187-132.ngrok-free.app/api/featured-creatives',
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setFeaturedCreatives(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //*******fetch featured creatives */
  const getFeaturedCreative = async () => {
    try {
      const response = await fetch(
        "https://backend.bcartgh.com/api/featured-creative",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setFeaturedCreative(data.data);
    } catch (error) {}
  };

  function search(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      navigate(`/search?q=${encodeURIComponent(searchKey)}`);
    }
  }

  //*****fetch token from the url for those who used google auth */
  // const urlParams = new URLSearchParams(window.location.search);
  // const token = urlParams.get("token");
  // const getUserData_ = async () => {
  //   setLoader(true);
  //   try {
  //     const response = await fetch(
  //       `https://backend.bcartgh.com/api/user-profile`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     const data = await response.json();

  //     if (Object.keys(data.data).length > 0) {
  //       //****Store User Data in Local Storage****//
  //       storeUserData({ user: data.data });
  //       storeUserToken({ token: token });
  //       toast.success('Login Successful', {
  //         position: 'top-center',
  //         duration: 5000,
  //         description:data.message
  //       });
  //     }
  //     setLoader(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // if (token !== null) {
    //   setLoader(true);
    //   getUserData_();
    // }

    getCreativeCategories();
    getFeaturedCreatives();
    getFeaturedCreative();
  }, []);

  return (
    <Layout active="about">
      <div className="container">
        <Banner
          search={search}
          searchKey={searchKey}
          setSearchKey={setSearchKey}
        />
      </div>
      <div className="container">
        <div className="px-4 py-10">
          <div className=" pb-6">
            <h1 className="text-lg font-bold text-[#2B1139]">
              Featured Categories
            </h1>
          </div>
          <div className="flex gap-4 lg:gap-10 items-center justify-between">
            <div className="flex gap-4 lg:gap-10 items-center overflow-scroll no-scrollbar">
              {categories.map(
                (cat: any, index: number) =>
                  cat.image_url && (
                    <button
                      onClick={() =>
                        navigate(
                          `/search?q=${encodeURIComponent(
                            cat.creative_category
                          )}`
                        )
                      }
                      key={index}
                    >
                      <div className="border w-72 h-48 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={cat.image_url}
                          alt="logo"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="pt-2 text-sm font-bold">
                        {cat.creative_category}
                      </div>
                    </button>
                  )
              )}
            </div>
            <div className="flex">
              <button
                type="button"
                title="button"
                onClick={() => navigate("/search")}
                className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F] hover:bg-[#520b1fb2]"
              >
                <ArrowRight size={40} />
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 pt-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border rounded-2xl overflow-hidden">
              <img
                src={
                  featuredCreative.profile_picture
                    ? featuredCreative.profile_picture
                    : "/img/f-3.webp"
                }
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-[#3c3441]">
                  Featured creative <br /> of the week.
                </h1>
              </div>
              <div className="text-sm">{featuredCreative.description} </div>
              <div>
                <button
                  onClick={() => navigate("/featured-creative")}
                  className="bg-[#520B1F] hover:bg-[#520b1fb2] text-white rounded-full px-4 py-2"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#520B1F] bg-opacity-20 py-20 px-4">
          <div className="container">
            <div className=" pb-6">
              <h1 className="text-lg font-bold text-[#2B1139]">
                Featured Creatives
              </h1>
            </div>
            <div className="flex gap-4 lg:gap-10 items-center justify-between">
              <div className="flex gap-4 lg:gap-10 items-center overflow-scroll no-scrollbar">
                {featuredCreatives.map((creative: any, index: number) => (
                  <button
                    onClick={() =>
                      navigate(
                        `/profile?creative=${encodeURIComponent(
                          creative.username
                        )}`
                      )
                    }
                    key={index}
                  >
                    <div className="border w-28 h-28 rounded-full overflow-hidden bg-white">
                      {creative.profile_picture ? (
                        <img
                          src={creative.profile_picture}
                          alt="logo"
                          className="w-full h-full"
                        />
                      ) : (
                        <img
                          src="/img/user-avatar.svg"
                          alt="logo"
                          className="w-full h-full p-2"
                        />
                      )}
                    </div>
                    <div className="pt-2 text-sm font-bold text-center">
                      <a href={`/profile?creative=${creative.username}`}>
                        {creative.username}
                      </a>
                      {/* {creative.username} */}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex">
                <button
                  type="button"
                  title="Search"
                  onClick={() => navigate("/search")}
                  className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F] hover:bg-[#520b1fb2]"
                >
                  <ArrowRight size={40} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="categories" className="container">
        <div className="py-20">
          <div className=" pb-10">
            <h1 className="text-lg font-bold text-[#2B1139]">All Categories</h1>
          </div>
          <div className="grid grid-cols-2 gap-x-4 w-full lg:gap-x-10 gap-y-10 md:grid-cols-4 lg:grid-cols-5">
            {categories.map((cat: any, index: number) => (
              <div className="flex flex-col gap-10">
                <button
                  onClick={() =>
                    navigate(
                      `/search/?q=${encodeURIComponent(cat.creative_category)}`
                    )
                  }
                  className="font-semibold text-left text-gray-800 hover:text-gray-600"
                >
                  {cat.creative_category}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
