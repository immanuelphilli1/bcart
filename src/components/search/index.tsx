import { ArrowRight } from '@phosphor-icons/react'
import React from 'react'

interface SearchProps {
    handleSearchCreatives: () => void;
    handleOneImage: () => void;
  }

const SearchIndex: React.FC<SearchProps> =({handleSearchCreatives, handleOneImage}) => {
  return (
    <div>
                        <div className='pt-20'>
                            <div className=" pb-6">
                                <h1 className="text-lg font-bold text-[#2B1139]">Creatives</h1>
                            </div>
                            <div className="flex gap-4 lg:gap-10 items-center justify-between">
                                <div className="flex gap-4 lg:gap-10 items-center">
                                    <div>
                                        <div className="border rounded-full overflow-hidden bg-red-500"><img src="/img/c-1.webp" alt="logo" className="w-full h-full" /></div>
                                        <div className="pt-2 text-sm font-bold text-center">Category 1</div>
                                    </div>
                                    <div>
                                        <div className="border rounded-full overflow-hidden bg-red-500"><img src="/img/c-1.webp" alt="logo" className="w-full h-full" /></div>
                                        <div className="pt-2 text-sm font-bold text-center">Category 1</div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="border rounded-full overflow-hidden bg-red-500"><img src="/img/c-1.webp" alt="logo" className="w-full h-full" /></div>
                                        <div className="pt-2 text-sm font-bold text-center">Category 1</div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="border rounded-full overflow-hidden bg-red-500"><img src="/img/c-1.webp" alt="logo" className="w-full h-full" /></div>
                                        <div className="pt-2 text-sm font-bold text-center">Category 1</div>
                                    </div>
                                    <div className="hidden lg:block">
                                        <div className="border rounded-full overflow-hidden bg-red-500"><img src="/img/c-1.webp" alt="logo" className="w-full h-full" /></div>
                                        <div className="pt-2 text-sm font-bold text-center">Category 1</div>
                                    </div>
                                    <div className="hidden lg:block">
                                        <div className="border rounded-full overflow-hidden bg-red-500"><img src="/img/c-1.webp" alt="logo" className="w-full h-full" /></div>
                                        <div className="pt-2 text-sm font-bold text-center">Category 1</div>
                                    </div>
                                    <div className="hidden lg:block">
                                        <div className="border rounded-full overflow-hidden bg-red-500"><img src="/img/c-1.webp" alt="logo" className="w-full h-full" /></div>
                                        <div className="pt-2 text-sm font-bold text-center">Category 1</div>
                                    </div>
                                </div>
                                <button onClick={handleSearchCreatives} className="flex">
                                    <div className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F]">
                                        <ArrowRight size={40} />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='pt-20'>
                            <div className=" pb-6">
                                <h1 className="text-lg font-bold text-[#2B1139]">Photos</h1>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 gap-4">
                                <button onClick={handleOneImage} className=" row-span-2">
                                    <img src="/img/f-1.webp" alt="Image 1" className="w-full h-full rounded-lg object-cover" />
                                </button>
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
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default SearchIndex
