import React from 'react'
import Button from './Button'
import Navbar from './Navbar';


const Header = (props) => {
    let url = props.url;
  return (
    <div className={`relative h-screen bg-center bg-cover`} style={{backgroundImage: `${url}`}}>
        {<Navbar/>}
            <div className='absolute top-20 left-[50%] translate-x-[-50%] text-center'>
                <h1 className='text-4xl font-bold '>Model 3</h1>
                <p className='mt-3 text-sm whitespace-nowrap'>Starting at $32,740 <br/> After Federal Tax Credit</p>
            </div>
            <div className='flex max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 space-x-4 absolute bottom-10 left-[50%] translate-x-[-50%]'>
                <Button left='Explore Inventory' right='Custom Order'/>
            </div>
        </div>
  )
}

export default Header
