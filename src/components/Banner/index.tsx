import { MagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'

const Banner: React.FC =() => {
  return (
    <div className="relative px-4">
      <div className="rounded-2xl overflow-hidden border w-full md:mt-8">
        <img src="/img/bcart-banner.webp" alt="logo" className="w-full min-h-40" />
        
      </div>
      <div className="w-full h-full text-white">
      <div className="absolute top-0 left-0 right-0 w-full h-full">
<div className="flex flex-col md:flex-row justify-center items-center  h-full md:py-10 md:px-20 md:justify-between gap-4">
  <div className="flex flex-col gap-4 justify-center">
    <div className="font-bold md:text-3xl"> Real pictures, <br/> by the creatives you love</div>
    <div className="flex rounded-full pl-4 items-center overflow-hidden bg-white gap-3 fill-black">
     <div ><MagnifyingGlass color="" /></div>
      <input type="text" className="w-full rounded-lg px-4 py-2 outline-none text-black" />
    </div>
  </div>
  <div className="flex items-end md:self-end text-xs">Image of the day by <span className="underline pl-1"> Brandon Nichelle</span></div>
</div>
        </div>
        </div>
      </div>
  )
}

export default Banner