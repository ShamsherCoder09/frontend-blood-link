import React, { useState } from 'react'

function Input({
    className = '',
    placeholder,
    type = 'text',
    required = false,
    label,
    onChange,
    name,
    ...props
}) {
    const [value, setValue] = useState("");
    const handleInputChange = (e) => {
        setValue(e.target.value)
        onChange(e)
    }
    return (
        <div className='flex flex-col'>
            <label className='text-gray-500'>{label}</label>
            <input name={name} className={`px-4 py-2 outline-none border-2 border-gray-400 w-56 rounded-md ${className}`} required={required} type={type} placeholder={placeholder} value={value} onChange={handleInputChange} {...props} />
        </div>
    )
}

export default Input
