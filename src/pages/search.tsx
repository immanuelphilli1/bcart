import { ArrowRight, CloudArrowUp, Eye, EyeClosed, MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";
import Layout from "../components/layout";
import SearchIndex from "../components/search";
import CreativeSearch from "../components/search/creativeSearch";
import Modal from "../components/modal";
import { useState, useEffect } from "react";
import { getUserData, getUserToken } from "../services/user_service";
import Loader from "../components/loader";
import { Toaster, toast } from "sonner";
import { navigate } from "gatsby";
import {
  addToCart,
  clearCart,
  getPurchasingProducts,
  removeFromCart,
} from "../services/add_to_cart";
import { get } from "http";

export default function Search() {
  const userData = getUserData();
  const token = getUserToken() === null ? { token: "" } : getUserToken();
  const [featuredCreatives, setFeaturedCreatives] = useState<any>([]);
  const [showCreativeSearch, setShowCreativeSearch] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<any>([]);
  const [pickedPhoto, setPickedPhoto] = useState<any>(null);
  const [relatedPhotos, setRelatedPhotos] = useState<any>([]);
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [suggestion, setSuggestion] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [purchased, setPurchased] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [buttonLoader, setButtonLoader] = useState<boolean>(false);
  const [mine, setMine] = useState<boolean>(false);

  //****** fetch the params from the url*/
  let urlParams;

  if (typeof window !== "undefined") {
    urlParams = new URLSearchParams(window.location.search);
  } else {
    // Handle the server-side rendering case if needed
    urlParams = new URLSearchParams();
  }
  const searchKey = urlParams.get("q");
  const message = urlParams.get("message");

  function handleSearchCreatives() {
    setShowCreativeSearch(true);
  }

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 5000);

    if (message === "Payment Successful") {
      clearCart();
      toast.success("Purchase Successful", {
        position: "top-center",
        duration: 5000,
        // description: "Purchase Successful",
      });
    }
  }, []);

  //******fetch single photo */
  async function handleOneImage(take: any) {
    console.log(take);
    setLoading(true);
    try {
      //*****fetching single photo */
      const response = await fetch(
        `https://c952-154-161-39-111.ngrok-free.app/api/photos/${take}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.token}`,
          },
        }
      );

      //*****fetching single photo related */
      const response_another = await fetch(
        `https://c952-154-161-39-111.ngrok-free.app/api/related-images/${take}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.token}`,
          },
        }
      );

      const data = await response.json();
      const data_another = await response_another.json();
      if (Object.keys(data.data).length > 0) {
        //TODO:Place a toaster here
        setShowModal(true);
        setLoading(false);
        setPickedPhoto(data.data);
        // console.log(data_another.data);
        setRelatedPhotos(data_another.data);

        //****check if user is mine */
        if (data.data.creative.username === userData?.user?.username) {
          setMine(true);
        }
      } else {
        //TODO:Place a toaster here
        console.log("something");
      }
    } catch (error) { }
  }

  //*******fetch all featured creatives */
  const getFeaturedCreatives = async () => {
    try {
      const response = await fetch(
        `https://c952-154-161-39-111.ngrok-free.app/api/featured-creatives`,
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
    } catch (error) { }
  };

  //******fetch photos */
  const getPhotos = async () => {
    try {
      const response = await fetch(`https://c952-154-161-39-111.ngrok-free.app/api/photos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.data.length === 0) {
        setPhotos(data.data);
      } else {
        setPhotos([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //******search for creatives using params */
  async function searchFromUrl() {
    try {
      const response = await fetch(
        `https://c952-154-161-39-111.ngrok-free.app/api/search-creative?filter[keyword]=${searchKey}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
              "Authorization": `Bearer ${token.token}`,
          },
        }
      );
      const data = await response.json();

      //******search for photos */
      const response_ = await fetch(
        `https://c952-154-161-39-111.ngrok-free.app/api/search-photo?filter[keyword]=${searchKey}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
              "Authorization": `Bearer ${token.token}`,
          },
        }
      );
      const data_ = await response_.json();

      if (Object.keys(data_.data).length > 0) {
        //TODO:Place a toaster here
        setPhotos(data_.data);
        // console.log("data photo: ", data_);
      } else {
        //TODO:Place a toaster here
        setPhotos([]);
      }

      if (data.data.length > 0) {
        //TODO:Place a toaster here
        setFeaturedCreatives(data.data);
        // console.log("data : ", data);
      } else {
        //TODO:Place a toaster here
        // console.log("something");
        setFeaturedCreatives([]);
      }
    } catch (error) {
      //TODO:Place a toaster here
      console.log(error);
    }
  }

  //******search for creatives */
  const searchedCreatives = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setLoader(true);
      setShowCreativeSearch(false);
      // console.log("query : ", query);
      try {
        const response = await fetch(
          `https://c952-154-161-39-111.ngrok-free.app/api/search-creative?filter[keyword]=${query}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
                "Authorization": `Bearer ${token.token}`,
            },
          }
        );
        const data = await response.json();

        //******search for photos */
        const response_ = await fetch(
          `https://c952-154-161-39-111.ngrok-free.app/api/search-photo?filter[keyword]=${query}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
                "Authorization": `Bearer ${token.token}`,
            },
          }
        );
        const data_ = await response_.json();

        if (Object.keys(data_.data).length > 0) {
          //TODO:Place a toaster here
          setPhotos(data_.data);
          // console.log("data photo: ", data_);
          setLoader(false);
        } else {
          //TODO:Place a toaster here
          setPhotos([]);
          setLoader(false);
        }

        if (data.data.length > 0) {
          //TODO:Place a toaster here
          setFeaturedCreatives(data.data);
          // console.log("data : ", data);
          setLoader(false);
        } else {
          //TODO:Place a toaster here
          setFeaturedCreatives([]);
          setLoader(false);
        }
      } catch (error) {
        //TODO:Place a toaster here
        console.log(error);
      }
    }
  };

  //******order photo now */
  const buyNow = async (id: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setButtonLoader(true);
    e.preventDefault();
    const response = await fetch(`https://c952-154-161-39-111.ngrok-free.app/api/buy-photos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify({
        photo_ids: getPurchasingProducts().length > 0 ? getPurchasingProducts() : [id],
      }),
    });
    const data = await response.json();

    // console.log("data : ", data);

    if (data.success === true && response.status === 200) {
      // console.log(data);
      setButtonLoader(false);
      toast.success("Redirecting .....", {
        position: "top-center",
        duration: 5000,
        description: data.message,
      });
      //****Store User Data in Local Storage****//
      // storeUserData({"user":data.data});
      // storeUserToken({"token":data.token});
      window.location.href = `${data.data.authorization_url}`;
    } else {
      setButtonLoader(false);
      toast.error("Purchase Failed", {
        position: "top-center",
        duration: 5000,
        description: data.message,
      });
    }
  };

  //******add product to cart */
  const handleCartAndRefresh = () => {
    if (addToCart(pickedPhoto)) {
      // console.log("add");
      setShowModal(false);
      toast.success("Product Added Successfully", {
        position: "top-center",
        duration: 5000,
        description: pickedPhoto.description,
      });
    }

    console.log(addToCart(pickedPhoto));
  };

  //******remove product from cart */
  const handleRemove = () => {
    // console.log("remove");
    if (removeFromCart(pickedPhoto.id)) {
      setShowModal(false);
      toast.success("Product Removed Successfully", {
        position: "top-center",
        duration: 5000,
        description: pickedPhoto.description,
      });
    }
    console.log(removeFromCart(pickedPhoto.id));
  };

  const submitSuggestion = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    const response = await fetch(
      `https://c952-154-161-39-111.ngrok-free.app/api/suggest-upload`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${token.token}`,
        },
        body: JSON.stringify({
          suggestion: suggestion,
        }),
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      setLoader(false);
      // storeUserData({"user":data.data});
      alert(data.message);
    } else {
      setLoader(false);
      alert(data.message);
    }
  };

  useEffect(() => {
    console.log("user data : ", userData)
    if (searchKey !== "" && searchKey !== null) {
      searchFromUrl();
      // setQuery(searchKey)
    }
    getFeaturedCreatives();
    getPhotos();
  }, []);

  return (
    <Layout active="partner">
      <div className="container relative">
        <div className="pt-5 md:pt-14 pb-40 px-4">
          <div className="w-full flex items-center justify-center">
            <div className="flex w-full md:w-1/2 rounded-full pl-4 border border-[#520B1F] items-center overflow-hidden bg-white gap-3 fill-[#520B1F]">
              <div>
                <MagnifyingGlass color="" />
              </div>
              <input
                type="text"
                className="w-full rounded-lg px-4 py-3 outline-none text-black"
                value={query}
                placeholder="Query item"
                onKeyDown={searchedCreatives}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          {loader ? (
            <div className="flex items-center justify-center pt-20">
              <Loader size="w-12 h-12" />
            </div>
          ) : (
            <div>
              {!showCreativeSearch && (
                <SearchIndex
                  handleOneImage={handleOneImage}
                  handleSearchCreatives={handleSearchCreatives}
                  featuredCreatives={featuredCreatives}
                  photos={photos}
                  loading={loading}
                  userData={userData}
                />
              )}
              {showCreativeSearch && (
                <CreativeSearch
                  userData={userData}
                  featuredCreatives={featuredCreatives}
                  setFeaturedCreatives={setFeaturedCreatives}
                  handleOneImage={handleOneImage}
                />
              )}
              <div className="pt-20">
                <div className="flex flex-col gap-1 text-center text-[#737B7D] font-bold">
                  <span>You have reached the end of the line. </span>
                  <span>
                    Didn’t see what you were looking for?{" "}
                    <button
                      onClick={() => setShowEditModal(true)}
                      className="hover:underline"
                    >
                      Suggest an edit
                    </button>
                  </span>
                  {/* <span>Didn’t see what you were looking for? Suggest an edit</span> */}
                </div>
              </div>
            </div>
          )}
        </div>
        <Toaster richColors />
      </div>
      {showModal && (
        <Modal
          bigModal={true}
          handleClose={() => setShowModal(false)}
          Content={
            <div>
              <div className="w-full pb-2 border-b-2 border-[#a3a2a249] flex gap-10">
                <div className="w-1/2 hidden lg:block">
                  <a
                    href={pickedPhoto.image_url}
                    title="preview"
                    target="_blank"
                  >
                    <img
                      src={pickedPhoto.image_url}
                      alt="logo"
                      className="w-full rounded-2xl min-h-fit "
                    />
                  </a>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex flex-col gap-4">
                    <a href={`/profile?creative=${pickedPhoto.creative?.username}`} className="flex gap-4">
                      <div>
                        <div className="rounded-full bg-gray-100 overflow-hidden w-28 h-28">
                          {pickedPhoto?.creative?.profile_picture ? (
                            <img
                              src={pickedPhoto?.creative?.profile_picture}
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
                      </div>
                      <div className="flex flex-col justify-center gap-1 w-80">
                        <div className="text-lg font-bold">
                          {pickedPhoto.creative?.username
                            ? pickedPhoto.creative?.username
                            : "B Cart"}
                        </div>
                        <div className="text-sm text-[#737B7D]">
                          {pickedPhoto?.creative?.physical_address
                            ? pickedPhoto?.creative?.physical_address
                            : "American House, 5th Floor, East Legon"}
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="flex gap-4 flex-col pt-6">
                    <div className="text-sm font-bold">
                      {pickedPhoto.description}
                    </div>
                    <div className=" lg:hidden ">
                      <img
                        src={pickedPhoto.image_url}
                        alt="logo"
                        className="w-full rounded-2xl h-full"
                      />
                    </div>
                    {/* <div className='text-sm text-[#5c5c5c] font-bold'>We’re sorry you couldn’t find what you are looking for. Feel free to tell us what you want and our creatives will make your wishes come true</div>
                                <div className='text-xs text-[#5c5c5c]'>food, color, eggs, people, meal, treat, easter</div> */}
                  </div>
                  <div className="flex gap-1 flex-col pt-6">
                    <div className="text-lg font-bold">Price</div>
                    <div className="text-lg text-[#5c5c5c] font-bold">
                      GH₵ {pickedPhoto.price}
                    </div>
                  </div>
                  <div className="flex gap-8 py-8">
                    {pickedPhoto.price === 0 || pickedPhoto.has_purchased === 1 ? (
                      <>
                        {mine === true || pickedPhoto.has_purchased === 1 ?
                        <div className="w-full">
                          <button
                            className="text-white bg-[#520B1F] border border-[#520B1F] font-bold w-full px-4 py-3 text-sm rounded-full"
                            onClick={async () => {
                              try {
                                const response = await fetch(pickedPhoto.image_url);
                                if (!response.ok) {
                                  throw new Error('Network response was not ok');
                                }

                                const blob = await response.blob();
                                const url = window.URL.createObjectURL(blob);

                                const link = document.createElement('a');
                                link.href = url;
                                link.download = 'bcart_free.png'; // Set your desired filename
                                document.body.appendChild(link);
                                link.click();
                                link.remove();

                                // Revoke the object URL to free up memory
                                window.URL.revokeObjectURL(url);
                              } catch (error) {
                                console.error('Failed to download file:', error);
                              }
                            }}
                          >
                             Download
                          </button>
                        </div>
                        :
                        <div className="w-full">
                          <button
                            className="text-white bg-[#520B1F] border border-[#520B1F] font-bold w-full px-4 py-3 text-sm rounded-full"
                            onClick={async () => {
                              try {
                                const response = await fetch(pickedPhoto.image_url);
                                if (!response.ok) {
                                  throw new Error('Network response was not ok');
                                }

                                const blob = await response.blob();
                                const url = window.URL.createObjectURL(blob);

                                const link = document.createElement('a');
                                link.href = url;
                                link.download = 'bcart_free.png'; // Set your desired filename
                                document.body.appendChild(link);
                                link.click();
                                link.remove();

                                // Revoke the object URL to free up memory
                                window.URL.revokeObjectURL(url);
                              } catch (error) {
                                console.error('Failed to download file:', error);
                              }
                            }}
                          >
                            Free Download Now
                          </button>
                        </div>
                    }
                      </>
                    ) : (
                      <>
                        {userData && (
                          mine === true ? null:
                          <div className="w-full">
                            <button
                              title="Add to cart"
                              disabled={!userData}
                              type="button"
                              className={` text-white  bg-[#520B1F]  border border-[#520B1F] font-bold w-full px-4 py-3 text-sm rounded-full`}
                              onClick={
                                getPurchasingProducts().includes(pickedPhoto.id)
                                  ? handleRemove
                                  : handleCartAndRefresh
                              }
                            >
                              {
                                userData !== null ? getPurchasingProducts().includes(pickedPhoto.id)
                                  ? "Remove from cart"
                                  : "Add to cart" : "please login to add to cart"
                              }

                            </button>
                          </div>
                            
                        )}

                        {mine === true ? null:
                        <div className="w-full">
                          <button
                            type="button"
                            onClick={(e) => getPurchasingProducts().length > 0 ? handleCartAndRefresh() : buyNow(pickedPhoto.id, e)}
                            className={` text-white  bg-[#520B1F]  border border-[#520B1F] font-bold w-full px-4 py-3 text-sm rounded-full`}
                          >
                            {buttonLoader === true ? "Processing ...... " : "Buy Now"}
                          </button>
                        </div>
                   }
                      </>
                    )}
                    <div className="flex-shrink self-center hidden">
                      <a
                        className={`flex-shrink hover:fill-[#91485d]`}
                        href={pickedPhoto.image_url}
                        title="preview"
                        target="_blank"
                      >
                        <EyeClosed className="w-10 h-10" color="" weight="duotone" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-10">
                <div className=" pb-10">
                  <h1 className="text-lg font-bold text-[#2B1139]">
                    {relatedPhotos.length <= 0 ? "No Related Images" : "Related Images"}
                  </h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-3 gap-4">
                  {relatedPhotos.map((photo: any, index: number) => (
                    <button onClick={(take: any) => handleOneImage(photo.id)} key={index} className=" row-span-2">
                      <img
                        src={photo.image_url}
                        alt="Image 1"
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </button>
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
        />
      )}
      {showEditModal && (
        <Modal
          bigModal={true}
          back="bg-[#DCCED2]"
          handleClose={() => setShowEditModal(false)}
          Content={
            <div>
              <div className="flex items-center justify-center pb-1">
                <div className="bg-[#FF6F51] fill-[#520B1F] rounded-full p-10">
                  <CloudArrowUp size={80} color="" />
                </div>
              </div>
              <form onSubmit={submitSuggestion}>
                <div className="pb-8 pt-2">
                  <div className="font-bold text-[#520B1F] text-2xl pb-4 text-center">
                    Suggest an upload
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="">
                      <div className="text-sm font-bold text-[#5C5C5C] text-center">
                        We’re sorry you couldn’t find what you are looking for.
                        Feel free to tell us what you want and our creatives
                        will make your wishes come true
                      </div>
                      <textarea
                        title="suggestion"
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                        className="w-full mt-2 rounded-3xl px-4 py-2"
                        rows={5}
                        cols={5}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-[#520B1F] text-white rounded-full px-10 md:px-14 text-sm py-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          }
        />
      )}
    </Layout>
  );
}
