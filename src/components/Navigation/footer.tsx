import React from 'react'
import { InstagramLogo, TwitterLogo } from "@phosphor-icons/react"


const Footer: React.FC = () => {
  return (
    <div className='pt-10'>
    <div className='bg-[#1c1c1c]'>
      <div className='container px-4'>
        <div className='py-20 flex flex-col md:flex-row gap-10'>
        <div className=''>
            <img
              src='/img/bcart-white.webp'
              alt='logo'
              className='w-20'
            />
            </div>
          <div className='grid grid-cols-2 pt-2 gap-x-4 w-full lg:gap-x-10 gap-y-10 md:justify-items-center md:grid-cols-4 lg:grid-cols-5'>
            
            <div className='flex flex-col gap-4'>
                <div className='text-white font-bold text-lg'>Content</div>
                <a href='/' className='font-semibold text-gray-100 hover:text-gray-300'>Categories</a>
                <a href='/' className='font-semibold text-gray-100 hover:text-gray-300'>Promo Pack</a>
                <a href='/' className='font-semibold text-gray-100 hover:text-gray-300'>Blog</a>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='text-white font-bold text-lg'>Company</div>
                <a href='/' className='font-semibold text-gray-100 hover:text-gray-300'>About</a>
                <a href='/' className='font-semibold text-gray-100 hover:text-gray-300'>Product</a>
                <a href='/' className='font-semibold text-gray-100 hover:text-gray-300'>FAQs</a>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='text-white font-bold text-lg'>Legal</div>
                <a href='/' className='font-semibold text-gray-100 hover:text-gray-300'>Terms & Conditions</a>
                <a href='/' className='font-semibold text-gray-100 hover:text-gray-300'>Privacy Policy</a>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='text-white font-bold text-lg'>Support</div>
                <a href='/' className='font-semibold text-gray-100 hover:text-gray-300'>Help</a>
                <a href='/' className='font-semibold text-gray-100 hover:text-gray-300'>Technical Support</a>
                <a href='/' className='font-semibold text-gray-100 hover:text-gray-300'>Suggestions</a>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='text-white font-bold text-lg'>Partner</div>
                <a href='/' className='font-semibold text-gray-100 hover:text-gray-300'>Brand</a>
                <a href='/' className='font-semibold text-gray-100 hover:text-gray-300'>Offers</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-black'>
      <div className='container px-4'>
        <div className='py-6'>
          <div className='flex items-center justify-between font-semibold'>
            <p className='text-white'>Copyright information</p>
            <div className='flex items-center gap-4'>
            <a href='https://instagram.com' className=' fill-white hover:fill-gray-300' title='Instagram'>
               <InstagramLogo size={24} weight='bold' color='' />
            </a>
            <a href='https://twitter.com' className=' fill-white hover:fill-gray-300' title='Twitter'>
               <TwitterLogo size={24} weight='bold' color='' />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
