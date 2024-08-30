import { ArrowRight } from '@phosphor-icons/react'
import React from 'react'

const CreativeSearch = () => {
    return (
        <div className='pt-20'>
            <div className='flex gap-10'>
                <div>
                <div className='w-fit bg-opacity-30 rounded-2xl  bg-[#520b1f34]'>
                    <div className='p-8'>
                        <div className='font-bold text-[#520B1F] pb-4'>Filters</div>
                        <div className='text-sm font-bold pb-3 text-[#2B1139]'>Categories</div>
                        {/* checkbox */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Weddings</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Events</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Portrait session</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Product shoot</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Blog photos</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Drone shots</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Documentary</label>
                            </div>
                            <div className='text-sm font-bold pt-4 text-[#2B1139]'>Minimum Rate</div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Below 1000</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">1000 to 2500</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">2500 to 5000</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Above 5000</label>
                            </div>
                            <div className='text-sm font-bold pt-4 text-[#2B1139]'>Location</div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Accra</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Kumasi</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Takoradi</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Cape Coast</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Tamale</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Akosombo</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Ho</label>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='flex flex-col gap-4'>
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
                </div>
                </div>
            </div>
        </div>
    )
}

export default CreativeSearch