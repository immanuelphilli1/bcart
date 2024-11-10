import React from 'react'
import Layout from '../components/layout'
import Modal from '../components/modal'
import { CloudArrowUp } from '@phosphor-icons/react'
import { useEffect, useState } from "react";
import { getUserData, getUserToken } from '../services/user_service';
import Loader from '../components/loader';
import { navigate } from 'gatsby';

const Profile = () => {
    const token = getUserToken();
    let [userData, setUserData] = useState<any>([]);
    const [showModal, setShowModal] = React.useState(false)
    const [showEditModal, setShowEditModal] = React.useState(false)
    const [featuredCreative, setFeaturedCreative] = useState<any>([]);
    const [suggestion, setSuggestion] = useState<string>("");
    const [loader, setLoader] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [showRelatedModal, setShowRelatedModal] = React.useState(false)
    const [pickedPhoto, setPickedPhoto] = useState<any>(null);
    const [relatedPhotos, setRelatedPhotos] = useState<any>([]);

    //****** fetch the params from the url*/
    const urlParams = new URLSearchParams(window.location.search);
    const featured = urlParams.get("featured");
    const creative = urlParams.get("creative");

    //*******fetch featured creatives */
    const getFeaturedCreative = async () => {
        try {
            const response = await fetch(
                'https://backend.bcartgh.com/api/featured-creative',
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();

            setUserData({ user: data.data });

            console.log("Featured User Data : ", userData);

        } catch (error) { console.log(error) }
    };

    //******fetch creative user */
    const getCreativeUser = async () => {
        setLoader(true);
        try {
            const response = await fetch(
                `https://backend.bcartgh.com/api/search-creative?keyword=${creative}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();

            if (data.data.length > 0) {
                setUserData({ user: data.data[0] });
            }
            setLoader(false);

        } catch (error) { console.log(error) }
    }

    //******logged in user data */
    const getUserData_ = async () => {
        setLoader(true);
        try {
            const response = await fetch(`https://backend.bcartgh.com/api/user-profile`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token.token}`,
                },
            });
            const data = await response.json();

            if (Object.keys(data.data).length > 0) {
                setIsLoggedIn(true);
                setUserData({ user: data.data });
            }
            setLoader(false);

        } catch (error) { console.log(error) }
    }

    //*****submit suggestion */
    const submitSuggestion = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoader(true);
        const response = await fetch(`https://backend.bcartgh.com/api/suggest-upload`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${token.token}`,
            },
            body: JSON.stringify({
                suggestion: suggestion,
            }),
        });
        const data = await response.json();
        if (response.status === 200) {
            setLoader(false);
            // storeUserData({"user":data.data});
            alert(data.message);
        } else {
            setLoader(false);
            alert(data.message);
        }
    }

    async function handleOneImage(take: any) {
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
                setShowRelatedModal(true)
                setPickedPhoto(data.data);
                console.log(data_another.data);
                setRelatedPhotos(data_another.data);
            }
            else {
                //TODO:Place a toaster here
                console.log("something");
            }

        } catch (error) { }

    }


    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 5000)
        if (featured === "true") {
            console.log("fetching featured creative");
            getFeaturedCreative();
        }
        else if (creative !== '' && creative !== null) {
            console.log("fetching creative user");
            getCreativeUser()
        }
        else {
            console.log("fetching user data");
            getUserData_();
        }
    }, []);




    console.log("User Data : ", userData?.user?.username);

    return (
        <Layout active="partner">
            <div className=" relative">
                {loader ? <div className='flex items-center justify-center pt-20'><Loader size="w-12 h-12" /></div> :
                    <div className=' pb-40'>
                        <div className='bg-[#520b1f21] px-10 py-24'>
                            <div className='container flex items-center'>
                                <div className='flex items-center w-full px-4 gap-10'>
                                    <div className='rounded-full overflow-hidden w-40 h-40'>
                                        <img src={userData?.user?.profile_picture ? userData?.user?.profile_picture : "/img/f-1.webp"} alt="logo" className="w-full h-full" />
                                    </div>
                                    <div className='flex flex-col justify-center gap-1 w-80'>
                                        <div className='text-2xl font-bold text-[#520B1F]'>{userData?.user?.username}</div>
                                        <div className='text-xs text-[#737B7D]'>{userData?.user?.physical_address}</div>
                                        <div className='text-xs'>{userData?.user?.description}</div>
                                        {userData?.user?.creative_hire_status === true && isLoggedIn === false ?
                                            <div className='w-fit pt-4'>
                                                <button title='hire me' type='button' onClick={() => setShowModal(true)} className="text-white bg-[#520B1F] border border-[#520B1F] font-bold w-full px-4 py-2 text-sm rounded-full">Hire Me</button>
                                            </div>
                                            : isLoggedIn ?
                                                <div className='flex gap-4'>
                                                    <div className='w-fit pt-4'>
                                                        <button title='Upload Photo' type='button' onClick={() => navigate("/upload-image")} className="text-white bg-[#520B1F] border border-[#520B1F] font-bold w-full px-4 py-2 text-sm rounded-full">Upload Photo</button>
                                                    </div>
                                                    <div className='w-fit pt-4'>
                                                        <button title='Edit' type='button' onClick={() => navigate("/settings")} className="text-white bg-[#520B1F] border border-[#520B1F] font-bold w-full px-4 py-2 text-sm rounded-full">Edit Profile</button>
                                                    </div>

                                                </div>

                                                : null
                                        }
                                    </div>
                                </div>
                                {userData?.user?.creative_hire_status === true && isLoggedIn ?
                                    <>
                                        <div className='flex flex-col border-l border-gray-300 text-sm justify-center p-4 gap-1'>
                                            <div className='text-[#2B1139]'>hire me for </div>
                                            <div>{userData?.user?.creative_categories.map((cat: any, index: number) => (
                                                <div key={index}>{cat.creative_category},</div>
                                            ))}</div>
                                        </div>
                                    </>
                                    : userData?.user?.creative_hire_status === true ?
                                    <>
                                        <div className='flex flex-col border-l border-gray-300 text-sm justify-center p-4 gap-1'>
                                            <div className='text-[#2B1139]'>hire me for </div>
                                            <div>{userData?.user?.creative_categories.map((cat: any, index: number) => (
                                                <div key={index}>{cat.creative_category},</div>
                                            ))}</div>
                                        </div>
                                    </>
                                    : null}

                            </div>
                        </div>
                        <div className='container mx-auto'>
                            <div className='pt-20'>
                                <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 gap-4">

                                    {/* {userData?.user?.creative_hire_status === true ? */}
                                        {/* <> */}
                                            {userData?.user?.photos.length > 0 ? userData?.user?.photos.map((photo: any, index: number) => (
                                                <button onClick={(take: any) => handleOneImage(photo.id)} type='button' title='photo' key={index} className=" row-span-2">
                                                    <img src={photo.image_url} alt="Image 1" className="w-full h-full rounded-lg object-cover" />
                                                </button>
                                            )) : "No Photos Yet"}
                                        {/* </> */}
                                        {/* : null} */}
                                    {/* <button className=" row-span-2">
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
                          </div> */}
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
                }


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
                                            <input type="text" title='date' className='w-full mt-1 rounded-full px-4 py-2' />
                                        </div>
                                        <div>
                                            <label className='text-sm font-bold text-[#5C5C5C]'>Location</label>
                                            <input type="text" title='location' className='w-full mt-1 rounded-full px-4 py-2' />
                                        </div>
                                        <div>
                                            <label className='text-sm font-bold text-[#5C5C5C]'>No of Days</label>
                                            <input type="text" title='days' className='w-full mt-1 rounded-full px-4 py-2' />
                                        </div>
                                        <div className=''>
                                            <label className='text-xs lg:text-sm font-bold text-[#5C5C5C]'>No of Hours (One day only)</label>
                                            <input type="text" title='hours' className='w-full mt-1 rounded-full px-4 py-2' />
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
                                            <textarea title='description' className='w-full mt-1 rounded-3xl px-4 py-2' rows={5} cols={5} />
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
                            <form onSubmit={submitSuggestion}>
                                <div className='pb-8 pt-2'>
                                    <div className='font-bold text-[#520B1F] text-2xl pb-4 text-center'>Suggest an upload</div>
                                    <div className="grid grid-cols-1 gap-4">

                                        <div className=''>
                                            <div className='text-sm font-bold text-[#5C5C5C] text-center'>We’re sorry you couldn’t find what you are looking for. Feel free to tell us what you want and our creatives will make your wishes come true</div>
                                            <textarea title='suggestion' value={suggestion} onChange={(e) => setSuggestion(e.target.value)} className='w-full mt-2 rounded-3xl px-4 py-2' rows={5} cols={5} />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center pt-4'>
                                    <button type='submit' className="bg-[#520B1F] text-white rounded-full px-10 md:px-14 text-sm py-2">Submit</button>
                                </div>
                            </form>
                        </div>
                    }
                />}
            {showRelatedModal &&
                <Modal bigModal={true} handleClose={() => setShowRelatedModal(false)}
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
                                                <div className='rounded-full bg-gray-100 overflow-hidden w-28 h-28'>
                                                    {pickedPhoto?.creative?.profile_picture ? (
                                                        <img src={pickedPhoto?.creative?.profile_picture} alt="logo" className="w-full h-full" />
                                                    ) : (
                                                        <img src="/img/user-avatar.svg" alt="logo" className="w-full h-full p-4" />

                                                    )}
                                                </div>
                                            </div>
                                            <div className='flex flex-col justify-center gap-1 w-80'>
                                                <div className='text-lg font-bold'>{pickedPhoto.creative?.username ? pickedPhoto.creative?.username : "B Cart"}</div>
                                                <div className='text-sm text-[#737B7D]'>{pickedPhoto?.creative?.physical_address ? pickedPhoto?.creative?.physical_address : "American House, 5th Floor, East Legon"}</div>
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

                                </div>
                            </div>
                        </div>
                    }
                />}
        </Layout>
    )
}

export default Profile