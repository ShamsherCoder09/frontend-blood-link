import React from 'react'

function Button({
    value,
    type,
    className = '',
    onClick,
    parentClassName = ''
}) {
  return (
    <div className={parentClassName}>
      <button onClick={onClick} type={type} className={`px-4 py-2 rounded-md capitalize bg-red-500 text-white ${className} hover:bg-red-600`}>{value}</button>
    </div>
  )
}

export default Button
