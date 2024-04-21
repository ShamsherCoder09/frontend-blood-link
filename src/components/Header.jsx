import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { removeUser } from "../reducers/userSlice";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = localStorage.getItem('user');
  const currentUser = JSON.parse(user);
  const [displayNav, setDisplayNav] = useState(false);
  const handleLogOut = () => {
    localStorage.removeItem('user');
    dispatch(removeUser())
    toast.success("User Logout SuccesFully")
    navigate('/login')
  }
  const navItems = [
    { id: 1, name: "Want Blood", slug: 'wantBlood' },
    { id: 2, name: "Want to Donate", slug: 'wantDonate' },
    { id: 4, name: "Home", slug: '/' },
    { id: 5, name: currentUser?.role === 'Organization' && "Set Availability",
     slug: '/setAvailable' },
    {
      id: 6,
      name: user ? "Logout" : "Login",
      className: 'bg-gray-300 rounded-md hover:bg-gray-400 hover:text-black px-4 py-2',
      slug: user ? '/' : '/login',
      onClick: user ? handleLogOut : undefined
    },
    {
      id: 7,
      name: user ? "Profile" : "Signup",
      className: 'bg-red-500 rounded-md text-white hover:bg-red-600 hover:text-white px-4 py-2',
      slug: user ? '/profile' : '/signup'
    },
    
  ];

  // Filter navItems based on authentication status
  const filteredNavItems = user ? navItems : navItems.filter(item => !['wantBlood', 'wantDonate'].includes(item.slug));

  const navStyling = "hover:text-red-500 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer";

  return (
    <div className="px-2 flex justify-between items-center h-20 ">
      <div className=" text-red-500 font-bold text-lg">
        BloodLink {/* BLOODLINK Actual Logo Will Placed here */}
      </div>
      <ul className="hidden gap-6 items-center md:flex">
        {filteredNavItems.map((item) => (
          <Link to={item.slug} key={item.id}>
            <li onClick={item.onClick} className={`cursor-pointer ${item.className} ${navStyling}`}>{item.name}</li>
          </Link>
        ))}
      </ul>

      <div className="md:hidden">
        <div className="cursor-pointer" onClick={() => setDisplayNav(prev => !prev)}><CiMenuFries size={30} /></div>
        {displayNav && (
          <ul className="flex gap-6 absolute right-6 top-20 text-right flex-col bg-opacity-950 bg-gray-100 rounded-md p-4">
            {filteredNavItems.map((item) => (
              <Link to={item.slug} key={item.id}>
                <li className={`cursor-pointer  ${navStyling}`}>{item.name}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
