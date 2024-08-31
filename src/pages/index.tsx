import * as React from "react"
import { navigate, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/Banner"
import { ArrowRight } from "@phosphor-icons/react"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout active="about">
      <div className="container">
        <Banner />
      </div>
      <div className="container">
        <div className="px-4 py-10">
          <div className=" pb-6">
            <h1 className="text-lg font-bold text-[#2B1139]">Featured Categories</h1>
          </div>
          <div className="flex gap-4 lg:gap-10 items-center justify-between">
            <div className="flex gap-4 lg:gap-10 items-center">
              <div>
                <div className="border rounded-lg overflow-hidden bg-red-500"><img src="/img/f-1.webp" alt="logo" className="w-full h-full" /></div>
                <div className="pt-2 text-sm font-bold">Category 1</div>
              </div>
              <div className="hidden md:block">
                <div className="border rounded-lg overflow-hidden bg-red-500"><img src="/img/f-2.webp" alt="logo" className="w-full h-full" /></div>
                <div className="pt-2 text-sm font-bold">Category 2</div>
              </div>
              <div className="hidden md:block">
                <div className="border rounded-lg overflow-hidden bg-red-500"><img src="/img/f-3.webp" alt="logo" className="w-full h-full" /></div>
                <div className="pt-2 text-sm font-bold">Category 3</div>
              </div>
            </div>
            <div className="flex">
              <button onClick={() => navigate("/search")} className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F] hover:bg-[#520b1fb2]">
                <ArrowRight size={40} />
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 pt-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border rounded-2xl overflow-hidden">
              <img src="/img/f-4.webp" alt="logo" className="w-full h-full" />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div><h1 className="text-3xl font-bold text-[#2B1139]">Featured creative <br/> of the week.</h1></div>
              <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, tortor eu tincidunt pharetra, metus augue facilisis tellus, at maximus tortor ante ac massa. Duis ac lorem elit. Nulla consectetur diam ex, eu pellentesque mi dapibus vel. Suspendisse nec justo porta, lobortis enim non, pharetra nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque libero nisi, tempor ac volutpat sed, condimentum non libero. </div>
              <div>
                <button onClick={() => navigate("/featured-creative")} className="bg-[#520B1F] hover:bg-[#520b1fb2] text-white rounded-full px-4 py-2">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#520B1F] bg-opacity-20 py-20 px-4">
          <div className="container">
          <div className=" pb-6">
            <h1 className="text-lg font-bold text-[#2B1139]">Featured Creatives</h1>
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
            <div className="flex">
              <button onClick={() => navigate("/search")} className="border rounded-full p-4 lg:p-8 text-white bg-[#520B1F] hover:bg-[#520b1fb2]">
                <ArrowRight size={40} />
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div id="categories" className="container">
        <div className="py-20">
      <div className=" pb-10">
            <h1 className="text-lg font-bold text-[#2B1139]">All Categories</h1>
          </div>
      <div className='grid grid-cols-2 gap-x-4 w-full lg:gap-x-10 gap-y-10 md:grid-cols-4 lg:grid-cols-6'>
            
            <div className='flex flex-col gap-10'>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Technology</a>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Sports</a>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Drone Images</a>
            </div>
            <div className='flex flex-col gap-10'>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Architecture</a>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Nature</a>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Interior Decor</a>
            </div>
            <div className='flex flex-col gap-10'>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Food</a>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Music</a>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Documentary</a>
            </div>
            <div className='flex flex-col gap-10'>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>People</a>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Editorial</a>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Wallpaper</a>
            </div>
            <div className='flex flex-col gap-10'>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Fashion</a>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Commercial</a>
            </div>
            <div className='flex flex-col gap-10'>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Wildlife</a>
                <a href='/' className='font-semibold text-gray-800 hover:text-gray-600'>Blog</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
