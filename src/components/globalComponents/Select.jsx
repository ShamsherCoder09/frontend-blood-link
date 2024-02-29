import React from 'react'

function Select({
    label,
    options,
    className = ''
}) {
    return (
        <div>
            <div className='flex flex-col'>
            <label className='text-gray-500'>{label}</label>
            <select className={`px-4 py-2 outline-none border-2 border-gray-400 w-56 rounded-md ${className}`}>
                {options?.map(item =>  <option key={item.id} value={item.name}>{item.name}</option>)}
            </select>
            </div>
        </div>
    )
}

export default Select
