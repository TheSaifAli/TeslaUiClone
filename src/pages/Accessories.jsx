import React from 'react'




const Accessories = () => {
  return (
    <div id='accessories' className=" relative bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Desktop_Accessories')] h-screen bg-center bg-cover">
    <div className='absolute top-10 left-[50%] translate-x-[-50%] text-center'>
        <h1 className='text-4xl font-bold '>Accessories</h1>
    </div>
    <div className='flex max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 space-x-4 absolute bottom-10 left-[50%] translate-x-[-50%]'>
    <div className='bg-black  opacity-100  w-56 lg:w-48 h-10 flex justify-center rounded'>
        <button className='text-sm text-white font-semibold'>Show Now</button>
      </div>
      </div>
</div>
  )
}

export default Accessories
