import * as React from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/Banner";
import { ArrowRight } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { getUserData } from "../services/user_service";

const IndexPage: React.FC<PageProps> = () => {
  const [categories, setCategories] = useState<any>([]);
  const [featuredCreative, setFeaturedCreative] = useState<any>([]);
  const [featuredCreatives, setFeaturedCreatives] = useState<any>([]);
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
      console.log(error)
    }
  };

  //*******fetch featured creatives */
  const getFeaturedCreative = async () => {
    try {
      const response = await fetch(
        'https://backend.bcartgh.com/api/featured-creative',
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

  useEffect(() => {
    getCreativeCategories();
    getFeaturedCreatives();
    getFeaturedCreative();
  }, []);

  return (
    <Layout active="about">
      <div className="container">
        <Banner />
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
              {categories.map((cat: any, index: number) => (
                cat.image_url &&
                <div key={index}>
                  <div className="border w-72 h-48 rounded-lg overflow-hidden bg-red-500">
                    <img
                      src={cat.image_url}
                      alt="logo"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="pt-2 text-sm font-bold">
                    {cat.creative_category}
                  </div>
                  </div>
                ))
              }
              {/* <div>
                <div className="border rounded-lg overflow-hidden bg-red-500">
                  <img
                    src="/img/f-1.webp"
                    alt="logo"
                    className="w-full h-full"
                  />
                </div>
                <div className="pt-2 text-sm font-bold">Category 1</div>
              </div>
              <div className="hidden md:block">
                <div className="border rounded-lg overflow-hidden bg-red-500">
                  <img
                    src="/img/f-2.webp"
                    alt="logo"
                    className="w-full h-full"
                  />
                </div>
                <div className="pt-2 text-sm font-bold">Category 2</div>
              </div>
              <div className="hidden md:block">
                <div className="border rounded-lg overflow-hidden bg-red-500">
                  <img
                    src="/img/f-3.webp"
                    alt="logo"
                    className="w-full h-full"
                  />
                </div>
                <div className="pt-2 text-sm font-bold">Category 3</div>
              </div> */}
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
              <img src={featuredCreative.profile_picture ? featuredCreative.profile_picture : "/img/f-3.webp"} alt="logo" className="w-full h-full" />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-[#3c3441]">
                  Featured creative <br /> of the week.
                </h1>
              </div>
              <div className="text-sm">
                {featuredCreative.description}{" "}
              </div>
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
                <div key={index}>
                  <div className="border w-28 h-28 rounded-full overflow-hidden bg-white">
                    {creative.profile_picture ? (
                      <img
                      src={creative.profile_picture}
                      alt="logo"
                      className="w-full h-full"
                    />
                    ) :(
                    <img
                      src="/img/user-avatar.svg"
                      alt="logo"
                      className="w-full h-full p-2"
                    />
                    )}
                  </div>
                  <div className="pt-2 text-sm font-bold text-center">
                    {creative.username}
                  </div>
                </div>
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
                <a
                  href="/"
                  className="font-semibold text-gray-800 hover:text-gray-600"
                >
                  {cat.creative_category}
                </a>
                {/* <a
                  href="/"
                  className="font-semibold text-gray-800 hover:text-gray-600"
                >
                  Sports
                </a>
                <a
                  href="/"
                  className="font-semibold text-gray-800 hover:text-gray-600"
                >
                  Drone Images
                </a> */}
              </div>
            ))}
            {/* <div className="flex flex-col gap-10">
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Technology
              </a>
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Sports
              </a>
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Drone Images
              </a>
            </div> */}
            {/* <div className="flex flex-col gap-10">
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Architecture
              </a>
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Nature
              </a>
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Interior Decor
              </a>
            </div>
            <div className="flex flex-col gap-10">
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Food
              </a>
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Music
              </a>
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Documentary
              </a>
            </div>
            <div className="flex flex-col gap-10">
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                People
              </a>
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Editorial
              </a>
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Wallpaper
              </a>
            </div>
            <div className="flex flex-col gap-10">
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Fashion
              </a>
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Commercial
              </a>
            </div>
            <div className="flex flex-col gap-10">
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Wildlife
              </a>
              <a
                href="/"
                className="font-semibold text-gray-800 hover:text-gray-600"
              >
                Blog
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
