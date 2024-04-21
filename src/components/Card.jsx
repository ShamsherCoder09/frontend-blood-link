import React from 'react'

function Card({
    title,
    description,
    availability = 0,
}) {
  return (
    <div>
      <div className="card cursor-pointer shadow-lg transition-all ease-in-out h-72 w-72 bg-red-50 rounded-2xl p-2 flex flex-col text-center items-center hover:scale-105">
        <div className='text-5xl my-12 text-red-500 font-bold'>{title}</div>
        <div className='text-sm'>{description}</div>
        <div className='flex gap-2 my-8 items-center'>
            <p className='font-bold text-red-500'>Availability</p>
        <div >{`${availability} Units`}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
