import { MagnifyingGlass } from '@phosphor-icons/react'
import { navigate } from 'gatsby';
import React from 'react'

interface SearchProps {
  search: (e: any) => void;
  // handleOneImage: (take: any) => void;
  searchKey: any;
  setSearchKey: any;
  bannerImage: any;
  bannerCreative: any
}

const Banner: React.FC<SearchProps> =({search, searchKey, setSearchKey, bannerImage, bannerCreative}) => {
  return (
    <div className="relative">
      <div className="rounded-2xl overflow-hidden border w-full mt-8 ">
        <img src={bannerImage} alt="logo" className="w-full min-h-96 max-h-96 md:min-h-40 md:max-h-[35rem] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl"></div>
      </div>
      <div className="w-full h-full text-white">
      <div className="absolute top-0 left-0 right-0 w-full h-full">
<div className="flex flex-col md:flex-row justify-center md:items-center h-full md:py-10 md:px-20 md:justify-between gap-4">
  <div className="flex flex-col gap-4 justify-center px-4 md:px-0">
    <div className="font-bold text-2xl md:text-3xl"> Real pictures, <br/> by the creatives you love</div>
    <div className="flex rounded-full pl-4 items-center overflow-hidden bg-white gap-3 fill-black">
     <div ><MagnifyingGlass color="" /></div>
      <input placeholder='Search' type="text" className="w-full rounded-lg px-4 py-3 outline-none text-black" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} onKeyDown={search} />
    </div>
  </div>
  <div className="flex items-end md:self-end px-4 md:px-0 text-xs">Image of the day by <button
                    onClick={() =>
                      navigate(
                        `/profile?creative=${encodeURIComponent(
                          bannerCreative
                        )}`
                      )
                    } className="underline pl-1"> {bannerCreative}</button></div>
</div>
        </div>
        </div>
      </div>
  )
}

export default Banner