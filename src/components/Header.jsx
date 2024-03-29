import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../reducers/userSlice";
import {toast} from 'react-toastify'

function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const [displayNav, setDisplayNav] = useState(false);
  const handleLogOut = () => {
    dispatch(removeUser())
    toast.success("User Logout SuccesFully")
  }
  const navItems = [
    { id: 1, name: "Want Blood", slug: 'wantBlood' },
    { id: 2, name: "Want to Donate", slug: 'wantDonate' },
    { id: 4, name: "Home", slug: '/' },
    {
      id: 5,
      name: isAuthenticated ? "Logout" : "Login",
      className: 'bg-gray-300 rounded-md hover:bg-gray-400 hover:text-black px-4 py-2',
      slug: isAuthenticated ? '/' : '/login',
      onClick: isAuthenticated ? handleLogOut : undefined
    },
    {
      id: 6,
      name: isAuthenticated ? "Profile" : "Signup",
      className: 'bg-red-500 rounded-md text-white hover:bg-red-600 hover:text-white px-4 py-2',
      slug: isAuthenticated ? '/profile' : '/signup'
    }
  ];

  // Filter navItems based on authentication status
  const filteredNavItems = isAuthenticated ? navItems : navItems.filter(item => !['wantBlood', 'wantDonate'].includes(item.slug));

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
