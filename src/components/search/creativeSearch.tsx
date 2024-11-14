import { ArrowRight } from "@phosphor-icons/react";
import { navigate } from "gatsby";
import React, { useEffect, useState } from "react";

interface SearchProps {
  handleOneImage: (take: any) => void;
  featuredCreatives: any;
  setFeaturedCreatives: any;
}

const CreativeSearch: React.FC<SearchProps> = ({ featuredCreatives, setFeaturedCreatives, handleOneImage }) => {

  const [categories, setCategories] = useState<any>([]);
  const [checks, setChecks] = useState<any>([]);
  // const [rate, setRate] = useState<any>([]);\
  const [rate, setRate] = useState<any>("");
  const [location, setLocation] = useState<any>([]);
  const [loader, setLoader] = useState(false);
  const [filter, setFilter] = useState(false);

//*******fetch all categories */
const getAllCategories = async () => {
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
};


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

console.log("categories : ", checks);
console.log("rates : ", rate);
console.log("locations : ", location);

useEffect(() => {
  if (filter === false) {
    filterByCityCategoryMinimumRate();
    getAllCategories();
  }
  else{
    filterByCityCategoryMinimumRate();
  }

}, [checks,rate,location]);

  return (
    <div className="pt-20">
      <div className="flex gap-10">
        <div>
          <div className="w-fit bg-opacity-30 rounded-2xl  bg-[#520b1f34]">
            <div className="p-8">
              <div className="font-bold text-[#520B1F] pb-4">Filters</div>
              <div className="text-sm font-bold pb-3 text-[#2B1139]">
                Categories
              </div>
              {/* checkbox */}
              <div className="flex flex-col gap-4">
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
                      else
                        setChecks((checks: any) => [...checks, cat.id]);
                    }}
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    {cat.creative_category}
                  </label>
                </div>
              ))}
                {/* <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Weddings
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Events
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Portrait session
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Product shoot
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Blog photos
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Drone shots
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Documentary
                  </label>
                </div> */}
                <div className="text-sm font-bold pt-4 text-[#2B1139]">
                  Minimum Rate
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    // checked={rate === "0_to_999" ? true : false}
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                    onChange={ () => setRate("0_to_999") }
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Below 1000
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                    onChange={ () => setRate("1000_to_2499") }
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    1000 to 2500
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                    onChange={ () => setRate("2500_to_4999") }
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    2500 to 5000
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Above 5000
                  </label>
                </div>
                <div className="text-sm font-bold pt-4 text-[#2B1139]">
                  Location
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                    onChange={() => {
                      if (location?.length > 0 && location.includes("Accra"))
                        setLocation((location: any) =>
                          location.filter((c: any) => c !== "Accra")
                        );
                      else
                        setLocation((location: any) => [...location, "Accra"]);
                    }}
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Accra
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                    onChange={() => {
                      if (location?.length > 0 && location.includes("Kumasi"))
                        setLocation((location: any) =>
                          location.filter((c: any) => c !== "Kumasi")
                        );
                      else
                        setLocation((location: any) => [...location, "Kumasi"]);
                    }}
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Kumasi
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                    onChange={() => {
                      if (location?.length > 0 && location.includes("Takoradi"))
                        setLocation((location: any) =>
                          location.filter((c: any) => c !== "Takoradi")
                        );
                      else
                        setLocation((location: any) => [...location, "Takoradi"]);
                    }}
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Takoradi
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                    onChange={() => {
                      if (location?.length > 0 && location.includes("Cape Coast"))
                        setLocation((location: any) =>
                          location.filter((c: any) => c !== "Cape Coast")
                        );
                      else
                        setLocation((location: any) => [...location, "Cape Coast"]);
                    }}
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Cape Coast
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                    onChange={() => {
                      if (location?.length > 0 && location.includes("Temale"))
                        setLocation((location: any) =>
                          location.filter((c: any) => c !== "Temale")
                        );
                      else
                        setLocation((location: any) => [...location, "Temale"]);
                    }}
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Tamale
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                    onChange={() => {
                      if (location?.length > 0 && location.includes("Akosombo"))
                        setLocation((location: any) =>
                          location.filter((c: any) => c !== "Akosombo")
                        );
                      else
                        setLocation((location: any) => [...location, "Akosombo"]);
                    }}
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Akosombo
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                    onChange={() => {
                      if (location?.length > 0 && location.includes("Ho"))
                        setLocation((location: any) =>
                          location.filter((c: any) => c !== "Ho")
                        );
                      else
                        setLocation((location: any) => [...location, "Ho"]);
                    }}
                  />
                  <label
                    htmlFor="red-checkbox"
                    className="ms-2 text-sm font-bold text-[#2B1139]"
                  >
                    Ho
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {featuredCreatives.map((creative: any, index: number) => (
            <>
              <div className="flex items-center border-b-2 pb-10 gap-6 w-full">
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
                <div className="flex flex-col justify-center gap-1 w-80">
                  <div className="text-xs font-bold text-[#520B1F]">
                    {/* {creative.username} */}
                    <a href={`/profile?creative=${creative.username}`}>{creative.username}</a>
                  </div>
                  <div className="text-xs text-[#737B7D]">
                    {creative.physical_address ? creative.physical_address : "No address added"}
                  </div>
                  <div className="text-xs">{creative.description}</div>
                </div>
                {creative?.photos?.length > 0 ? (
                  creative?.photos.map((photo: any, index: number) => (
                    <div key={index}>
                      <div className="rounded-2xl overflow-hidden w-40 h-28">
                        <button onClick={(take: any) => handleOneImage(photo.id)} className=" row-span-2">

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
                  <div className="rounded-2xl overflow-hidden w-40 h-28">
                    <img
                      src="/img/f-1.webp"
                      alt="logo"
                      className="w-full h-full"
                    />
                  </div>
                )}
                {/* <div className='rounded-2xl overflow-hidden w-40 h-28'>
                                <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                            </div>
                            <div className='rounded-2xl overflow-hidden w-40 h-28'>
                                <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                            </div>
                            <div className='rounded-2xl overflow-hidden w-40 h-28'>
                                <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                            </div> */}
                <button type="button" title="forward" onClick={() => navigate(`/profile?creative=${creative.username}`)} className="flex">
                  <div className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F]">
                    <ArrowRight size={40} />
                  </div>
                </button>
              </div>
              {/* {
                                creative.imageUrl && creative.imageUrl.length > 0 ?
                                    <div className='flex items-center border-b-2 pb-10 gap-6 w-full'>
                                        <div className='rounded-full overflow-hidden w-28 h-28'>
                                            <img src={creative.imageUrl} alt="logo" className="w-full h-full" />
                                        </div>
                                        <div className='flex flex-col justify-center gap-1 w-80'>
                                            <div className='text-xs font-bold text-[#520B1F]'>{creative.name}</div>
                                            <div className='text-xs text-[#737B7D]'>{creative.location}</div>
                                            <div className='text-xs'>{creative.description}</div>
                                        </div>
                                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                                        </div>
                                    </div>
                                    :
                                    <div className='flex items-center border-b-2 pb-10 gap-6 w-full'>
                                        <div className='rounded-full overflow-hidden w-28 h-28'>
                                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                                        </div>
                                        <div className='flex flex-col justify-center gap-1 w-80'>
                                            <div className='text-xs font-bold text-[#520B1F]'>{creative.name}</div>
                                            <div className='text-xs text-[#737B7D]'>{creative.location}</div>
                                            <div className='text-xs'>{creative.description}</div>
                                        </div>
                                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                                        </div>
                                    </div>
                            } */}
            </>
          ))}

          {/* <div className='flex items-center border-b-2 pb-10 gap-6 w-full'>
                        <div className='rounded-full overflow-hidden w-28 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 w-80'>
                            <div className='text-xs font-bold text-[#520B1F]'>Username</div>
                            <div className='text-xs text-[#737B7D]'>Location</div>
                            <div className='text-xs'>This is a brief description of the user called username. He specializes in this and that...</div>
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <button className="flex">
                            <div className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F]">
                                <ArrowRight size={40} />
                            </div>
                        </button>
                    </div><div className='flex items-center border-b-2 pb-10 gap-6 w-full'>
                        <div className='rounded-full overflow-hidden w-28 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 w-80'>
                            <div className='text-xs font-bold text-[#520B1F]'>Username</div>
                            <div className='text-xs text-[#737B7D]'>Location</div>
                            <div className='text-xs'>This is a brief description of the user called username. He specializes in this and that...</div>
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <button className="flex">
                            <div className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F]">
                                <ArrowRight size={40} />
                            </div>
                        </button>
                    </div>
                    <div className='flex items-center border-b-2 pb-10 gap-6 w-full'>
                        <div className='rounded-full overflow-hidden w-28 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 w-80'>
                            <div className='text-xs font-bold text-[#520B1F]'>Username</div>
                            <div className='text-xs text-[#737B7D]'>Location</div>
                            <div className='text-xs'>This is a brief description of the user called username. He specializes in this and that...</div>
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <button className="flex">
                            <div className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F]">
                                <ArrowRight size={40} />
                            </div>
                        </button>
                    </div>
                    <div className='flex items-center border-b-2 pb-10 gap-6 w-full'>
                        <div className='rounded-full overflow-hidden w-28 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 w-80'>
                            <div className='text-xs font-bold text-[#520B1F]'>Username</div>
                            <div className='text-xs text-[#737B7D]'>Location</div>
                            <div className='text-xs'>This is a brief description of the user called username. He specializes in this and that...</div>
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <button className="flex">
                            <div className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F]">
                                <ArrowRight size={40} />
                            </div>
                        </button>
                    </div>
                    <div className='flex items-center border-b-2 pb-10 gap-6 w-full'>
                        <div className='rounded-full overflow-hidden w-28 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 w-80'>
                            <div className='text-xs font-bold text-[#520B1F]'>Username</div>
                            <div className='text-xs text-[#737B7D]'>Location</div>
                            <div className='text-xs'>This is a brief description of the user called username. He specializes in this and that...</div>
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <button className="flex">
                            <div className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F]">
                                <ArrowRight size={40} />
                            </div>
                        </button>
                    </div>
                    <div className='flex items-center border-b-2 pb-10 gap-6 w-full'>
                        <div className='rounded-full overflow-hidden w-28 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 w-80'>
                            <div className='text-xs font-bold text-[#520B1F]'>Username</div>
                            <div className='text-xs text-[#737B7D]'>Location</div>
                            <div className='text-xs'>This is a brief description of the user called username. He specializes in this and that...</div>
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <button className="flex">
                            <div className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F]">
                                <ArrowRight size={40} />
                            </div>
                        </button>
                    </div>
                    <div className='flex items-center border-b-2 pb-10 gap-6 w-full'>
                        <div className='rounded-full overflow-hidden w-28 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 w-80'>
                            <div className='text-xs font-bold text-[#520B1F]'>Username</div>
                            <div className='text-xs text-[#737B7D]'>Location</div>
                            <div className='text-xs'>This is a brief description of the user called username. He specializes in this and that...</div>
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <button className="flex">
                            <div className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F]">
                                <ArrowRight size={40} />
                            </div>
                        </button>
                    </div>
                    <div className='flex items-center border-b-2 pb-10 gap-6 w-full'>
                        <div className='rounded-full overflow-hidden w-28 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 w-80'>
                            <div className='text-xs font-bold text-[#520B1F]'>Username</div>
                            <div className='text-xs text-[#737B7D]'>Location</div>
                            <div className='text-xs'>This is a brief description of the user called username. He specializes in this and that...</div>
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <button className="flex">
                            <div className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F]">
                                <ArrowRight size={40} />
                            </div>
                        </button>
                    </div>
                    <div className='flex items-center border-b-2 pb-10 gap-6 w-full'>
                        <div className='rounded-full overflow-hidden w-28 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 w-80'>
                            <div className='text-xs font-bold text-[#520B1F]'>Username</div>
                            <div className='text-xs text-[#737B7D]'>Location</div>
                            <div className='text-xs'>This is a brief description of the user called username. He specializes in this and that...</div>
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <button className="flex">
                            <div className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F]">
                                <ArrowRight size={40} />
                            </div>
                        </button>
                    </div>
                    <div className='flex items-center border-b-2 pb-10 gap-6 w-full'>
                        <div className='rounded-full overflow-hidden w-28 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 w-80'>
                            <div className='text-xs font-bold text-[#520B1F]'>Username</div>
                            <div className='text-xs text-[#737B7D]'>Location</div>
                            <div className='text-xs'>This is a brief description of the user called username. He specializes in this and that...</div>
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <button className="flex">
                            <div className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F]">
                                <ArrowRight size={40} />
                            </div>
                        </button>
                    </div>
                    <div className='flex items-center border-b-2 pb-10 gap-6 w-full'>
                        <div className='rounded-full overflow-hidden w-28 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 w-80'>
                            <div className='text-xs font-bold text-[#520B1F]'>Username</div>
                            <div className='text-xs text-[#737B7D]'>Location</div>
                            <div className='text-xs'>This is a brief description of the user called username. He specializes in this and that...</div>
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <div className='rounded-2xl overflow-hidden w-40 h-28'>
                            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                        </div>
                        <button className="flex">
                            <div className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F]">
                                <ArrowRight size={40} />
                            </div>
                        </button>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default CreativeSearch;
