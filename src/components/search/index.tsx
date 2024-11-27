import { ArrowRight } from "@phosphor-icons/react";
import React from "react";
import { useState, useEffect } from "react";
import Loader from "../loader";

interface SearchProps {
  handleSearchCreatives: () => void;
  handleOneImage: (take: any) => void;
  featuredCreatives: any;
  photos: any;
  loading: boolean;
}

const SearchIndex: React.FC<SearchProps> = ({
  handleSearchCreatives,
  handleOneImage,
  featuredCreatives,
  photos,
  loading
}) => {

  return (
    <div>
      <div className="pt-14">
        <div className=" pb-6">
          <h1 className="text-lg font-bold text-[#2B1139]">Creatives</h1>
        </div>
        <div className="flex gap-4 lg:gap-10 items-center justify-between">
          <div className="flex gap-8 lg:gap-10 items-center overflow-scroll no-scrollbar">
            {featuredCreatives.length > 0 ?
              featuredCreatives.map((creative: any, index: number) => (
                <a href={`/profile?creative=${creative.username}`} key={index}>
                  <div className="border w-28 h-28 rounded-full overflow-hidden bg-gray-200">
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
                    <a href={`/profile?creative=${creative.username}`}>{creative.username}</a>
                  </div>
                </a>
              )) : "No Creatives Found"}
          </div>
          {featuredCreatives.length > 0 &&
            <button type="button" title="forward" onClick={handleSearchCreatives} className="flex">
              <div className="border rounded-full p-4 text-white bg-[#520B1F]">
                <ArrowRight size={28} />
              </div>
            </button>
          }
        </div>
      </div>
      <div className="pt-20">
        <div className=" pb-6">
          <h1 className="text-lg font-bold text-[#2B1139]">Photos</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 gap-4">
          {photos.length > 0 ? photos.map((photo: any, index: number) => (
            <div key={index} className={`h-full relative row-span-${photo.col_span} col-span-${photo.row_span} `}>
              {photo.image_url &&
                <button onClick={(take: any) => handleOneImage(photo.id)} className=" h-full">

                  <img
                    src={photo.image_url}
                    alt="Image 1"
                    className="w-full h-full rounded-lg object-cover"
                  />

                </button>
              }
              {loading &&
              <div className="">
              <div className="absolute bottom-0 left-0 text-white font-bold bg-black bg-opacity-50 rounded-lg w-full h-full">
                <div className="flex items-center justify-center h-full">
                  <Loader size="w-8 h-8" />
                </div>
              </div>
            </div>
              }
            </div>
          )) : "No Photos Found"}
        </div>
      </div>
    </div>
  );
};

export default SearchIndex;
