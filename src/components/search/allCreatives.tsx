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
  userData: any;
}

const AllCreativeSearchIndex: React.FC<SearchProps> = ({
  handleSearchCreatives,
  handleOneImage,
  featuredCreatives,
  photos,
  loading,
  userData
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
                <a href={`${userData?.user?.username === creative.username ? "/profile" : `/profile?creative=${creative.username}`}`} key={index}>
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
      
    </div>
  );
};

export default AllCreativeSearchIndex;
