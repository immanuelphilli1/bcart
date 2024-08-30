import React from 'react'
import Layout from '../components/layout'
import Modal from '../components/modal'
import { CloudArrowUp } from '@phosphor-icons/react'

const Profile = () => {
    const [showModal, setShowModal] = React.useState(false)
    const [showEditModal, setShowEditModal] = React.useState(false)
    return (
        <Layout active="partner">
            <div className=" relative">


                <div className=' pb-40'>
                    <div className='bg-[#520b1f21] px-10 py-24'>
                        <div className='container flex items-center'>
                            <div className='flex items-center w-full px-4 gap-10'>
                                <div className='rounded-full overflow-hidden w-40 h-40'>
                                    <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                                </div>
                                <div className='flex flex-col justify-center gap-1 w-80'>
                                    <div className='text-2xl font-bold text-[#520B1F]'>Username</div>
                                    <div className='text-xs text-[#737B7D]'>Location</div>
                                    <div className='text-xs'>This is a brief description of the user called username. He specializes in this and that...</div>
                                    <div className='w-fit pt-4'>
                                        <button onClick={() => setShowModal(true)} className="text-white bg-[#520B1F] border border-[#520B1F] font-bold w-full px-4 py-2 text-sm rounded-full">Hire Me</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col border-l border-gray-300 text-sm justify-center p-4 gap-1'>
                                <div className='text-[#2B1139]'>hire me</div>
                                <div>category,category,category,category,category,category,category</div>
                            </div>
                        </div>
                    </div>
                    <div className='container mx-auto'>
                        <div className='pt-20'>
                            <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 gap-4">
                                <button className=" row-span-2">
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
                        <div className='pt-20'>
                            <div className='flex flex-col gap-1 text-center text-[#737B7D] font-bold'>
                                <span>You have reached the end of the line. </span>
                                <span>Didn’t see what you were looking for? <button onClick={() => setShowEditModal(true)} className='hover:underline'>Suggest an edit</button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal &&
                <Modal bigModal={true} back='bg-[#DCCED2]' handleClose={() => setShowModal(false)}
                    Content={
                        <div>
                            <div className='flex gap-4 pb-10 border-b-2 border-[#520b1f3a]'>
                                <div className='rounded-full overflow-hidden w-28 h-28'>
                                    <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
                                </div>
                                <div className='flex flex-col justify-center gap-1'>
                                    <div className='text-lg text-[#520B1F] font-bold'>Hire username for your next project</div>
                                    <div className='text-sm text-[#737B7D]'>Provide some details below we will let you know if username is available to work on your awesome project</div>
                                </div>
                            </div>
                            <form>
                            <div className='border-b-2 border-[#520b1f3a] py-8'>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                   <div>
                                        <label className='text-sm font-bold text-[#5C5C5C]'>Date</label>
                                        <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
                                    </div>
                                    <div>
                                        <label className='text-sm font-bold text-[#5C5C5C]'>Location</label>
                                        <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
                                    </div>
                                    <div>
                                        <label className='text-sm font-bold text-[#5C5C5C]'>No of Days</label>
                                        <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
                                    </div>
                                    <div className=''>
                                        <label className='text-xs lg:text-sm font-bold text-[#5C5C5C]'>No of Hours (One day only)</label>
                                        <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
                                    </div>
                                </div>
                            </div>
                            <div className='border-b-2 border-[#520b1f3a] py-8'>
                                <div className='text-sm font-bold pb-3 text-[#5C5C5C]'>Which of these would you want username to do for you?</div>
                                {/* checkbox */}
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                                    <div className="flex items-center me-4">
                                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                        <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Red</label>
                                    </div>
                                    <div className="flex items-center me-4">
                                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                        <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Red</label>
                                    </div>
                                    <div className="flex items-center me-4">
                                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                        <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Red</label>
                                    </div>
                                    <div className="flex items-center me-4">
                                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                        <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Red</label>
                                    </div>
                                    <div className="flex items-center me-4">
                                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                        <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Red</label>
                                    </div>
                                    <div className="flex items-center me-4">
                                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                        <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Red</label>
                                    </div>
                                    <div className="flex items-center me-4">
                                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                        <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Red</label>
                                    </div>
                                    <div className="flex items-center me-4">
                                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                        <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Red</label>
                                    </div>
                                    <div className="flex items-center me-4">
                                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                        <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Red</label>
                                    </div>
                                    <div className="flex items-center me-4">
                                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                        <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Red</label>
                                    </div>
                                    <div className="flex items-center me-4">
                                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2" />
                                        <label htmlFor="red-checkbox" className="ms-2 text-sm font-bold text-[#2B1139]">Red</label>
                                    </div>
                                </div>
                            </div>
                            <div className='border-b-2 border-[#520b1f3a] py-8'>
                                <div className='text-sm font-bold pb-3 text-[#5C5C5C]'>Fill this section if you selected weddings</div>
                                {/* checkbox */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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

                                </div>
                            </div>
                            <div className='py-8'>
                                <div className='font-bold text-[#520B1F] pb-4'>Creative's pricing</div>
                                <div className="grid grid-cols-1 gap-4">
                                    
                                    <div className=''>
                                        <label className='text-sm font-bold text-[#5C5C5C]'>Give a short description of the services to be provided. Remeber to include anything that isn’t available in this form.</label>
                                        <textarea className='w-full mt-1 rounded-3xl px-4 py-2' rows={5} cols={5} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end pt-4'>
        <button className="bg-[#520B1F] text-white rounded-full px-10 md:px-14 text-sm py-2">Submit</button>
        </div>
        </form>
                        </div>
                    }
                />}
                {showEditModal &&
                <Modal bigModal={true} back='bg-[#DCCED2]' handleClose={() => setShowEditModal(false)}
                    Content={
                        <div>
                            <div className='flex items-center justify-center pb-1'>
                                <div className='bg-[#FF6F51] fill-[#520B1F] rounded-full p-10'>
                                    <CloudArrowUp size={80} color='' />
                                </div>
                            </div>
                            <form>
                            <div className='pb-8 pt-2'>
                                <div className='font-bold text-[#520B1F] text-2xl pb-4 text-center'>Suggest an upload</div>
                                <div className="grid grid-cols-1 gap-4">
                                    
                                    <div className=''>
                                        <div className='text-sm font-bold text-[#5C5C5C] text-center'>We’re sorry you couldn’t find what you are looking for. Feel free to tell us what you want and our creatives will make your wishes come true</div>
                                        <textarea className='w-full mt-2 rounded-3xl px-4 py-2' rows={5} cols={5} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center pt-4'>
        <button className="bg-[#520B1F] text-white rounded-full px-10 md:px-14 text-sm py-2">Submit</button>
        </div>
        </form>
                        </div>
                    }
                />}
        </Layout>
    )
}

export default Profile