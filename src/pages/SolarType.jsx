import React from 'react'
import Button from '../components/Button'

const SolarType = (props) => {
  let url = props.url;
  return (
    <div id={props.id} className={`relative h-screen bg-center bg-cover`} style={{backgroundImage: `${url}`}}>
            <div className='absolute top-10 left-[50%] translate-x-[-50%] text-center'>
                <h1 className='text-4xl font-bold '>{props.solarType}</h1>
                <p className={`mt-3 text-sm whitespace-nowrap ${props.solarType === 'Solar Panels' &&'underline underline-offset-4 hover:decoration-2 cursor-pointer'}`}>{props.moto}</p>
            </div>
            <div className='flex max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 space-x-4 absolute bottom-10 left-[50%] translate-x-[-50%]'>
            <Button left='Order Now' right='Learn More'/>
            </div>
        </div>
  )
}

export default SolarType
