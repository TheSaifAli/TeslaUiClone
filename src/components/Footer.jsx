import React from 'react'

const Footer = () => {
  return (
    <div className='mb-20 md:mb-10'>
      <ul className='flex flex-col justify-center items-center text-[.75rem] font-semibold text-gray-500 space-y-2 md:flex-row md:justify-center md:items-center md:space-x-3 md:space-y-0 md:text-[.8rem] '>
        <li className='cursor-pointer'>Tesla © 2023</li>
        <li className='cursor-pointer'>Privacy & Legal</li>
        <li className='cursor-pointer'>Vehicle Recalls</li>
        <li className='hidden md:inline cursor-pointer'>Contact</li>
        <li className='cursor-pointer'>News</li>
        <li className='hidden md:inline cursor-pointer'>Get Updates</li>
        <li className='hidden md:inline cursor-pointer'>Locations</li>
      </ul>
    </div>
  )
}

export default Footer
