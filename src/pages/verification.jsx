import { CheckFat } from '@phosphor-icons/react'
import React from 'react'

function Verification() {
  return (
    <div>
        <div className='min-h-screen flex flex-col items-center justify-center '>
            <CheckFat size={150} color='green' />
            <div className='text-center text-2xl font-bold pb-4'>
                Verification Successful
            </div>
            <div>This page will automatically redirect to the login page after 5 seconds</div>
        </div>
    </div>
  )
}

export default Verification