import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const navItems = [
    {
      id: 1,
      name: "Home",
      slug: '/'
    },
    
    {
      id: 2,
      name: "Contact",
      slug: '/'
    },
  ]
  return (
    <div className='px-2 w-full my-12'>
      <footer>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-red-500 text-2xl'>
            BloodLink
          </div>
          <div>
            <ul className='flex gap-4'>
              {navItems.map(item => <Link className='hover:text-red-500 hover:scale-105 duration-200' key={item.id} to={item.slug}><li>{item.name}</li></Link>)}
            </ul>
          </div>
        </div>
        <hr className='mt-4 border-2' />
        <div className='text-center'>
        <span className="block text-gray-400">© 2023 BloodLink. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
