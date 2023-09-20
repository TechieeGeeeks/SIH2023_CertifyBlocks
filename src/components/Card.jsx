import React from 'react'


const Card = ({img, title, subtitle}) => {
  return (
    <div className="shadow-lg md:w-[20%] rounded-lg">
    <div className="flex flex-col gap-4 p-6 text-left">
      <img src={img} className="w-20" />

      <p className='font-semibold'>{title}</p>
      <p className=" font-bold text-sm">
       {subtitle}
      </p>
    </div>
  </div>
  )
}

export default Card