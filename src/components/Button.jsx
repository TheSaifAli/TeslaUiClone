import React from 'react'

const Button = (props) => {
  return (
    <>
      <div className='bg-white opacity-80 w-56 lg:w-48 h-10 flex justify-center rounded'>
        <button className='text-sm font-semibold'>{props.left}</button></div>
      <div className='bg-black  opacity-60  w-56 lg:w-48 h-10 flex justify-center rounded'>
        <button className='text-sm text-white font-semibold'>{props.right}</button>
      </div>
    </>
  )
}

export default Button
