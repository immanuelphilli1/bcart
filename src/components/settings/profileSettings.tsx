import React from 'react'

export default function ProfileSettings() {
  return (
    <div className='p-10'>
        <div className='font-bold text-[#520B1F]'>Profile Settings</div>
        <div className='flex flex-col md:flex-row items-start gap-10 py-10 border-b-2 border-[#520b1f3a] '>
            <div className=''>
<div className='rounded-full overflow-hidden w-40 h-40'><img src="/img/f-1.webp" alt="logo" className="w-full h-full" /></div>
</div>
        <div>
        <div className='font-bold text-sm text-[#520B1F] pb-10'>Personal Information</div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>First Name</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Last Name</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Username</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Email</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
        </div>
        </div>
        </div>
        <div className='pt-10 '>
        <div className='font-bold text-sm pb-6 text-[#520B1F]'>Password Reset</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Current Password</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>New Password</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Confirm Password</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
        </div>
        <div className='flex justify-end pt-4'>
        <button className="bg-[#520B1F] text-white rounded-full px-10 md:px-14 text-sm py-2">Save</button>
        </div>
        </div>
    </div>
  )
}
