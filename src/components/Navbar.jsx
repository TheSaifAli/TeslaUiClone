import React from 'react'

const Navbar = () => {
   
  return (
    <>
    <div className='pt-5 flex justify-between items-center'>
            <div className='ml-8'>
                <svg className='w-32 cursor-pointer ' viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
            </div>
            <div className='hidden lg:inline myanimation'>
                <ul className='flex justify-between items-center font-semibold text-sm space-x-2 '>
                    <li className='modelClass'><a href='#modelS'>Model S</a></li>
                    <li className='modelClass'><a href='#model3'>Model 3</a></li>
                    <li className='modelClass'><a href='#modelX'>Model X</a></li>
                    <li className='modelClass'><a href='#modelY'>Model Y</a></li>
                    <li className='modelClass'><a href='#solarRoof'>Solar Roof</a></li>
                    <li className='modelClass'><a href='#solarPanel'>Solar Panels</a></li>
                    <li className='modelClass'><a href='*'>Powerwall</a></li>
                </ul>
            </div>
            <div className='mr-8'>
                <ul className='flex justify-between items-center font-semibold text-sm space-x-4'>
                    <li className='modelClass hidden sm:inline' ><a href='#accessories'>Shop</a></li>
                    <li className='modelClass hidden sm:inline'>Account</li>
                    <li className='modelClass'>Menu</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar;
