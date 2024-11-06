import { ArrowRight, MagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'
import Layout from '../components/layout'
import SearchIndex from '../components/search'
import CreativeSearch from '../components/search/creativeSearch'
import Modal from '../components/modal'
import { useState, useEffect } from "react";
import { getUserData, getUserToken } from '../services/user_service'

export default function Search() {
    const userData = getUserData();
    const token = getUserToken();
    const [featuredCreatives, setFeaturedCreatives] = useState<any>([]);
    const [showCreativeSearch, setShowCreativeSearch] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false)
    const [query, setQuery] = useState<string>('')
    const [photos, setPhotos] = useState<any>([]);
    const [pickedPhoto, setPickedPhoto] = useState<any>(null);
    const [relatedPhotos, setRelatedPhotos] = useState<any>([]);
    const [loader, setLoader] = useState<boolean>(false);

    function handleSearchCreatives() {
        setShowCreativeSearch(true)
    }

    async function handleOneImage(take:any) {
        console.log(take)
        try {
            //*****fetching single photo */
            const response = await fetch(`https://backend.bcartgh.com/api/photos/${take}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            //*****fetching single photo related */
            const response_another = await fetch(`https://backend.bcartgh.com/api/related-images/${take}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );


            const data = await response.json();
            const data_another = await response_another.json();
            if (Object.keys(data.data).length > 0) {
              //TODO:Place a toaster here
              setShowModal(true)
              setPickedPhoto(data.data);
              console.log(data_another.data);
              setRelatedPhotos(data_another.data);
            }
            else{
              //TODO:Place a toaster here
              console.log("something");
            }
             
          } catch (error) {}
       
    }

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
    } catch (error) {}
  };

  const getPhotos = async () => {
    try {
      const response = await fetch(
        `https://backend.bcartgh.com/api/photo-categories?paginate=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setPhotos(data.data);
    } catch (error) {
        console.log(error);
    }
  };

    const searchedCreatives = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            console.log("query : ", query);
            try {
                const response = await fetch(
                  `https://backend.bcartgh.com/api/creatives?filter[first_name]=${query}`,
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                    //   "Authorization": `Bearer ${token.token}`,
                    },
                  }
                );
                const data = await response.json();

                if (data.data.length > 0) {
                    //TODO:Place a toaster here
                    setFeaturedCreatives(data.data);
                    console.log("data : ", data);
                }
                else{
                    //TODO:Place a toaster here
                    console.log("something");
                }
              } catch (error) {
                //TODO:Place a toaster here
                  console.log(error);
              }
        }
        
      };

      useEffect(() => {
        // getCreativeCategories();
        getFeaturedCreatives();
        getPhotos();
        // getFeaturedCreative();
      }, []);
    return (
        <Layout active="partner">
            <div className="container relative">
                <div className='pt-5 md:pt-14 pb-40 px-4'>
                    <div className='w-full flex items-center justify-center'>
                        <div className="flex w-full md:w-1/2 rounded-full pl-4 border border-[#520B1F] items-center overflow-hidden bg-white gap-3 fill-[#520B1F]">
                            <div ><MagnifyingGlass color="" /></div>
                            <input type="text" className="w-full rounded-lg px-4 py-3 outline-none text-black" value={query} placeholder='Query item' onKeyDown={searchedCreatives} onChange={(e) => setQuery(e.target.value)} />
                        </div>
                    </div>
                    {!showCreativeSearch && <SearchIndex handleOneImage={handleOneImage} handleSearchCreatives={handleSearchCreatives} featuredCreatives={featuredCreatives} photos={photos} />}
                    {showCreativeSearch && <CreativeSearch featuredCreatives={featuredCreatives} />}
                    <div className='pt-20'>
                        <div className='flex flex-col gap-1 text-center text-[#737B7D] font-bold'>
                            <span>You have reached the end of the line. </span>
                            <span>Didn’t see what you were looking for? Suggest an edit</span>
                        </div>
                    </div>
                </div>
            </div>
            {showModal &&
            <Modal bigModal={true} handleClose={() => setShowModal(false)}
                Content={
                    <div>
                        <div className='w-full pb-10 border-b-2 border-[#a3a2a249] flex gap-10'>
                            <div className='w-1/2 hidden lg:block'>
                                <img src={pickedPhoto.image_url} alt="logo" className="w-full rounded-2xl h-full" />
                            </div>
                            <div className='w-full lg:w-1/2'>
                            <div className='flex flex-col gap-4'>
                            <div className='flex gap-4'>
                            <div>
                            <div className='rounded-full overflow-hidden w-28 h-28'>
                        <img src={pickedPhoto.image_url} alt="logo" className="w-full h-full" />
                    </div>
                            </div>
                    <div className='flex flex-col justify-center gap-1 w-80'>
                        <div className='text-lg font-bold'>{pickedPhoto.title}</div>
                        <div className='text-sm text-[#737B7D]'>Location</div>
                        </div> 
                            </div>
                            </div>
                            <div className='flex gap-4 flex-col pt-10'>
                                <div className='text-lg font-bold'>{pickedPhoto.description}</div>
                                <div className=' lg:hidden '>
                                <img src={pickedPhoto.image_url} alt="logo" className="w-full rounded-2xl h-full" />
                            </div>
                                {/* <div className='text-sm text-[#5c5c5c] font-bold'>We’re sorry you couldn’t find what you are looking for. Feel free to tell us what you want and our creatives will make your wishes come true</div>
                                <div className='text-xs text-[#5c5c5c]'>food, color, eggs, people, meal, treat, easter</div> */}
                            </div>
                            <div className='flex gap-1 flex-col pt-6'>
                                <div className='text-lg font-bold'>Price</div>
                                <div className='text-lg text-[#5c5c5c] font-bold'>$ {pickedPhoto.price}</div>
                            </div>
                            <div className='flex gap-8 py-8'>
                            <div className='w-full'>
                                        <button
                                            className={` text-white  bg-[#520B1F]  border border-[#520B1F] font-bold w-full px-4 py-3 text-sm rounded-full`}
                                            >
                                            Add to cart
                                        </button> 
                            </div>
                            <div className='w-full'>
                                        <button
                                            className={` text-white  bg-[#520B1F]  border border-[#520B1F] font-bold w-full px-4 py-3 text-sm rounded-full`}
                                            >
                                            Buy now
                                        </button> 
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className='pt-10'>
                            <div className=" pb-10">
                                <h1 className="text-lg font-bold text-[#2B1139]">Related Images</h1>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 gap-4">
                                {relatedPhotos.map((photo: any, index: number) => (
                                    <div key={index} className=" row-span-2">
                                        <img src={photo.image_url} alt="Image 1" className="w-full h-full rounded-lg object-cover" />
                                    </div>
                                ))}
                                {/* <div className=" row-span-2">
                                    <img src="/img/f-1.webp" alt="Image 1" className="w-full h-full rounded-lg object-cover" />
                                </div>
                                <div className=" row-span-1">
                                    <img src="/img/f-2.webp" alt="Image 2" className="w-full h-full rounded-lg object-cover" />
                                </div>
                                <div className=" row-span-2">
                                    <img src="/img/f-3.webp" alt="Image 3" className="w-full h-full rounded-lg object-cover" />
                                </div>
                                <div className=" row-span-1">
                                    <img src="/img/f-4.webp" alt="Image 4" className="w-full h-full rounded-lg object-cover" />
                                </div>
                                <div className=" row-span-2">
                                    <img src="/img/f-2.webp" alt="Image 5" className="w-full h-full rounded-lg object-cover" />
                                </div>
                                <div className=" row-span-2">
                                    <img src="/img/f-1.webp" alt="Image 6" className="w-full h-full rounded-lg object-cover" />
                                </div>
                                <div className=" row-span-2">
                                    <img src="/img/f-3.webp" alt="Image 7" className="w-full h-full rounded-lg object-cover" />
                                </div>
                                <div className=" row-span-1">
                                    <img src="/img/f-1.webp" alt="Image 8" className="w-full h-full rounded-lg object-cover" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                }
            />}
        </Layout>
    )
}
