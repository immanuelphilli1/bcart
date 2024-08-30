import React from 'react'

export default function CreativeHiring() {
  return (
    <div className='p-10'>
        <form>
       <div className='font-bold text-[#520B1F] pb-10'>Creative & Hiring Settings</div>
       <div className='border-b-2 border-[#520b1f3a] pb-8'> 
       <div >
       <label className="inline-flex flex-col md:flex-row items-center justify-between me-5 cursor-pointer">
       <span className="me-3 text-sm font-bold text-[#2B1139]">Toggle the checkmark to list yourself as available for hiring; application subject to review</span>
  <input type="checkbox" value="" className="sr-only peer" checked />
  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#520B1F]"></div>
  
</label>
</div>
<div className='pt-8 flex items-center justify-between'>
    <div className="text-sm font-bold text-[#2B1139]">Creative Status</div>
    <div><button className="text-[#520B1F] border border-[#520B1F] uppercase font-bold bg-white rounded-full px-4 text-sm py-2">Pending verification</button></div>
</div>
       </div>
       <div className='border-b-2 border-[#520b1f3a] py-8'>
       <div className='font-bold text-[#520B1F] pb-4'>Creative Profile</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className='md:col-span-3'>
                <label className='text-sm font-bold text-[#5C5C5C]'>Provide a brief description (this will be displayed on your profile)</label>
                <textarea className='w-full mt-1 rounded-3xl px-4 py-2' rows={5} cols={5} />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Phone Number</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Ghana Post GPS</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>City</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div className='md:col-span-3'>
                <label className='text-sm font-bold text-[#5C5C5C]'>Physical Address</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
        </div>
       </div>
       <div className='border-b-2 border-[#520b1f3a] py-8'>
       <div className='font-bold text-[#520B1F] pb-4'>Creative Profile</div>
       <div className='text-sm font-bold pb-3 text-[#5C5C5C]'>What do you want to be hired for? (Select all that apply)</div>
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
       <div className='font-bold text-[#520B1F] pb-4'>Creative's pricing</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Hour Rate</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Daily Rate</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Minimum charge</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div className='font-bold text-sm text-[#2B1139] py-2 md:col-span-3'>Weddings (Leave this section if you don’t offer services for weddings</div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>One day (Traditional)</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>One day (White)</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>One day (White & Traditional)</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div className=''>
                <label className='text-xs lg:text-sm font-bold text-[#5C5C5C]'>Two days (White & Traditional)</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div className=''>
                <label className='text-sm font-bold text-[#5C5C5C]'>Three days (+Thanksgiving)</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div className='md:col-span-3'>
                <label className='text-sm font-bold text-[#5C5C5C]'>Other charges (Please specify in detail)</label>
                <textarea className='w-full mt-1 rounded-3xl px-4 py-2' rows={5} cols={5} />
            </div>
        </div>
       </div>
       <div className=' py-8'>
       <div className='font-bold text-[#520B1F] pb-4'>Payment Information</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Bank Name</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Branch</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Account Name</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Account Number</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div className='font-bold text-sm text-[#2B1139] pt-2 md:col-span-2'>Mobile Money</div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Account Name</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
            <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Account Number</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' />
            </div>
             <div className='font-bold text-sm text-[#2B1139] pt-2 md:col-span-2'>Preferred Payment Account</div>
             {/* radio button */}
             <div className="flex items-center me-4">
              <div className='border-2 p-[2px] rounded-full border-[#520B1F]'>
        <input id="red-radio" type="radio" value="" name="colored-radio" className="w-2 h-2 text-[#520B1F] bg-[#520B1F] " />
        </div>
        <label htmlFor="red-radio" className="ms-2 text-sm font-bold text-[#5c5c5c]">Bank Account</label>
    </div>
             <div className="flex items-center me-4">
             <div className='border-2 p-[2px] rounded-full border-[#520B1F]'>
        <input id="yellow-radio" type="radio" value="" name="colored-radio" className="w-2 h-2 text-[#520B1F] bg-[#520B1F] " />
        </div><label htmlFor="yellow-radio" className="ms-2 text-sm font-bold text-[#5c5c5c]">Mobile Money</label>
    </div>
        </div>
       </div>
       <div className='flex justify-end pt-4'>
        <button className="bg-[#520B1F] text-white rounded-full px-10 md:px-14 text-sm py-2">Save</button>
        </div>
       </form>
    </div>
  )
}
