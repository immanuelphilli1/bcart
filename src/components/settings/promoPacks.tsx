import React from 'react'

export default function PromoPacks() {
  return (
    <div>
        <div className='font-bold text-[#520B1F] p-10'>Active Subscriptions</div>
        <div>
        <div className="relative overflow-x-auto mx-auto lg:w-full no-scrollbar shadow-md sm:rounded-lg px-4">
            <table className="w-full table-auto min-w-max mx-auto text-sm text-left text-[#5C5C5C]">
                <thead className="text-[#520B1F] border-b-2 border-[#520b1f31]">
<tr>
    <th scope="col" className="px-6 py-3">
        Name
    </th>
    <th scope="col" className="px-6 py-3">
        Description
    </th>
    <th scope="col" className="px-6 py-3">
        Actions
    </th>
</tr>
                </thead>
                <tbody>
<tr className="">
    <td className="px-6 py-4 min-w-max"><div className="font-bold w-full">Package 1</div></td>
    <td className="px-6 py-4 ">Provide a brief description of what this package entails</td>
    <td className="px-6 py-4">
        <div className="">
           <button className="bg-[#520B1F] text-white rounded-full px-10  text-sm py-2">Cancel</button> 
        </div>
    </td>
</tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}
