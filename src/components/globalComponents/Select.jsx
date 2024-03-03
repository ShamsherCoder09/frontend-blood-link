import React from 'react'

function Select({
    label,
    options,
    className = '',
    setStateCode = () => {}
}) {
    const handleChange = (e) => {
        const stateCode =  e.target.value;
        setStateCode(stateCode)
    }
    return (
        <div>
            <div className='flex flex-col'>
            <label className='text-gray-500'>{label}</label>
            <select onChange={handleChange} className={`px-4 py-2 outline-none border-2 border-gray-400 w-56 rounded-md ${className}`}>
                <option value="">Select</option>
                {options?.map(item =>  <option key={item.id} value={item.iso2} className='text-gray-500'>{item.name}</option>)}
            </select>
            </div>
        </div>
    )
}

export default Select
