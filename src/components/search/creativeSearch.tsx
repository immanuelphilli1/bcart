import { ArrowRight } from "@phosphor-icons/react";
import { navigate } from "gatsby";
import React, { useEffect, useState } from "react";

interface SearchProps {
  handleOneImage: (take: any) => void;
  featuredCreatives: any;
  setFeaturedCreatives: any;
  userData: any;
}

const CreativeSearch: React.FC<SearchProps> = ({
  featuredCreatives,
  setFeaturedCreatives,
  handleOneImage,
  userData
}) => {
  const [categories, setCategories] = useState<any>([]);
  const [checks, setChecks] = useState<any>([]);
  // const [rate, setRate] = useState<any>([]);\
  const [rate, setRate] = useState<any>("");
  const [location, setLocation] = useState<any>([]);
  const [loader, setLoader] = useState(false);
  const [filter, setFilter] = useState(false);

  //*******fetch all categories */
  const getAllCategories = async () => {
    setLoader(true);
    const response = await fetch(
      `https://backend.bcartgh.com/api/creative-categories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setCategories(data.data);
    setLoader(false);
  };

  //******filter by city category and minimum rate
  const filterByCityCategoryMinimumRate = async () => {
    setLoader(true);
    setFilter(true);
    const response = await fetch(
      `https://backend.bcartgh.com/api/creatives?filter[city]=${location}&filter[minimum_rate]=${rate}&filter[creative_categories.id]=${checks}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    console.log("filterByCityCategoryMinimumRate: ", data);

    setFeaturedCreatives(data.data);
    // setChecks(data.data);s
    setLoader(false);
  };

  //*****storing all possible locations in an array
  const arrayLocation = [
    "Accra",
    "Kumasi",
    "Takoradi",
    "Cape Coast",
    "Temale",
    "Akosombo",
    "Ho",
  ];

  console.log("categories : ", checks);
  console.log("rates : ", rate);
  console.log("locations : ", location);

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="pt-20">
      <div className="flex justify-center gap-10">
        <div className="hidden lg:block">
          <div className="w-fit bg-opacity-30 rounded-2xl  bg-[#520b1f34]">
            <div className="p-8">
              <div className="font-bold text-[#520B1F] pb-4">Filters</div>
              <div className="text-sm font-bold pb-3 text-[#2B1139]">
                Categories
              </div>
              {/* checkbox */}
              <div className="flex flex-col gap-4">
                {loader === true ? "loading categories" : null}
                {categories.map((cat: any, index: number) => (
                  <div className="flex items-center me-4">
                    <input
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                      onChange={() => {
                        if (checks?.length > 0 && checks.includes(cat.id))
                          setChecks((checks: any) =>
                            checks.filter((c: any) => c !== cat.id)
                          );
                        else setChecks((checks: any) => [...checks, cat.id]);
                      }}
                      onClick={filterByCityCategoryMinimumRate}
                    />
                    <label
                      htmlFor="red-checkbox"
                      className="ms-2 text-sm font-bold text-[#2B1139]"
                    >
                      {cat.creative_category}
                    </label>
                  </div>
                ))}

                <div className="text-sm font-bold pt-4 text-[#2B1139]">
                  Minimum Rate
                </div>

                <div className="flex items-center me-4">
                  <div className="border-2 p-[2px] rounded-full border-gray-300 bg-white">
                    <input
                      id="below-1000"
                      type="radio"
                      value=""
                      name="minimum_rate"
                      className="w-2 h-2 text-[#2B1139] bg-[#2B1139] cursor-pointer"
                      onChange={() => setRate("0_to_999")}
                      onClick={filterByCityCategoryMinimumRate}
                    />
                  </div>
                  <label
                    htmlFor="below-1000"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Below 1000
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <div className="border-2 p-[2px] rounded-full border-gray-300 bg-white">
                    <input
                      id="1000-2500"
                      type="radio"
                      value=""
                      name="minimum_rate"
                      className="w-2 h-2 text-[#2B1139] bg-[#2B1139] cursor-pointer"
                    />
                  </div>
                  <label
                    htmlFor="1000-2500"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    1000 to 2500
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <div className="border-2 p-[2px] rounded-full border-gray-300 bg-white">
                    <input
                      id="2500-5000"
                      type="radio"
                      value=""
                      name="minimum_rate"
                      className="w-2 h-2 text-[#2B1139] bg-[#2B1139] cursor-pointer"
                    />
                  </div>
                  <label
                    htmlFor="2500-5000"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    2500 to 5000
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <div className="border-2 p-[2px] rounded-full border-gray-300 bg-white">
                    <input
                      id="above-5000"
                      type="radio"
                      value=""
                      name="minimum_rate"
                      className="w-2 h-2 text-[#2B1139] bg-[#2B1139] cursor-pointer"
                    />
                  </div>
                  <label
                    htmlFor="above-5000"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Above 5000
                  </label>
                </div>
                <div className="text-sm font-bold pt-4 text-[#2B1139]">
                  Location
                </div>
                {arrayLocation.map((item, index) => (
                  <div className="flex items-center me-4" key={index}>
                    <input
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                      onChange={() => {
                        if (location?.length > 0 && location.includes(item))
                          setLocation((location: any) =>
                            location.filter((c: any) => c !== item)
                          );
                        else
                          setLocation((location: any) => [...location, item]);
                      }}
                      onClick={filterByCityCategoryMinimumRate}
                    />
                    <label
                      htmlFor="red-checkbox"
                      className="ml-2 text-sm text-[#2B1139] cursor-pointer"
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {featuredCreatives.map((creative: any, index: number) => (
            <>
              <div className="flex items-center border-b-2 pb-10 gap-1 md:gap-6 w-full">
                <button onClick={() =>
                    navigate(`${userData?.user?.username === creative.username ? "/profile" : "/profile?creative=${creative.username}"}`)
                  }>
                <div className="rounded-full bg-gray-100 overflow-hidden w-28 h-28">
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
                      className="w-full h-full p-4"
                    />
                  )}
                </div>
                </button>
                <div className="flex flex-col justify-center gap-1 pl-2 min-w-40  md:min-w-[500px]">
                  <div className="text-xs font-bold text-[#520B1F]">
                    {/* {creative.username} */}
                    <a href={`${userData?.user?.username === creative.username ? "/profile" : "/profile?creative=${creative.username}"}`}>
                      {creative.username}
                    </a>
                  </div>
                  <div className="text-xs text-[#737B7D] text-wrap">
                    {creative.physical_address
                      ? creative.physical_address
                      : "No address added"}
                  </div>
                  <div className="text-xs text-wrap">{creative.description}</div>
                </div>
                {creative?.photos?.length > 0 ? (
                  creative?.photos.map((photo: any, index: number) => (
                    <div key={index} className="hidden lg:block">
                      <div className="rounded-2xl overflow-hidden w-40 h-28">
                        <button
                          onClick={(take: any) => handleOneImage(photo.id)}
                          className=" row-span-2"
                        >
                          <img
                            src={photo.image_url}
                            alt="logo"
                            className="w-full h-full"
                          />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl overflow-hidden hidden lg:block w-40 h-28">
                    <img
                      src="/img/f-1.webp"
                      alt="logo"
                      className="w-full h-full"
                    />
                  </div>
                )}
                <button
                  type="button"
                  title="forward"
                  onClick={() =>
                    navigate(`/profile?creative=${creative.username}`)
                  }
                  className="md:flex hidden "
                >
                  <div className="border rounded-full p-3 text-white bg-[#520B1F]">
                    <ArrowRight size={28} />
                  </div>
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreativeSearch;
