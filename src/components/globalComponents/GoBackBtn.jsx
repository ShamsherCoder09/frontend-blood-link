import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

function GoBackBtn() {
    const navigate = useNavigate();
  return (
    <div className='text-red-500 cursor-pointer p-2'>
      <IoIosArrowBack className='rotate-180 hover:rotate-[-180] ease-in-out duration-500' size={30} onClick={() => navigate(-1)} />
    </div>
  )
}

export default GoBackBtn
