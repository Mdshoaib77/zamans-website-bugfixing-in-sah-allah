import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  useEffect(() => {
    setVisible(false);
  }, [location]);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [visible]);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      {/* Logo */}
      <Link
        to='/'
        className='pl-4 font-extrabold text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text whitespace-nowrap'
        style={{
          fontSize: 'clamp(14px, 4vw, 34px)', // Responsive font-size, min 14px max 34px
          lineHeight: '1',
        }}
      >
        Z<span className="text-black">aman&apos;s</span> <span className="text-blue-600">Gadget</span>
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      {/* Icons */}
      <div className='flex items-center gap-6'>

        {/* Search Icon */}
        <img
          onClick={() => {
            setShowSearch(true);
            navigate('/collection');
          }}
          src={assets.search_icon}
          className='w-[22px] h-[22px] min-w-[20px] min-h-[20px] sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer object-contain'
          alt="search"
        />

        {/* Profile Icon with Dropdown */}
        <div className='relative group'>
          <img
            onClick={() => (token ? null : navigate('/login'))}
            className='w-[22px] h-[22px] min-w-[20px] min-h-[20px] sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer object-contain'
            src={assets.profile_icon}
            alt="profile"
          />

          {token && (
            <div className='absolute right-0 hidden pt-4 group-hover:block dropdown-menu'>
              <div className='flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to='/cart' className='relative'>
          <img
            src={assets.cart_icon}
            className='w-[22px] h-[22px] min-w-[20px] min-h-[20px] sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain'
            alt="cart"
          />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-[22px] h-[22px] min-w-[20px] min-h-[20px] sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer object-contain sm:hidden'
          alt="menu"
        />
      </div>

      {/* Sidebar menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white z-[9999] transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="back" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;