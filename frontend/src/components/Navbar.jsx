import React from 'react';
import { Search, User, ShoppingBag, ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate, Link } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full'>
        {/* Announcement Bar */}
        <div className='bg-gray-100 py-4 flex items-center justify-between px-4'>
            <ChevronLeft className='h-5 w-5' />
            <p className='text-center font-medium'>| For International Orders and Express Shipping Contact Us |</p>
            <ChevronRight className='h-5 w-5' />
        </div>
      {/* Logo and Icons */}
      <div className='flex items-center justify-between py-6 px-4'>
        <button className='p-2'>
            <Search className='h-6 w-6' />
        </button>
        <div className='flex-1 flex justify-center'>
            <div className='text-center'>
                <h1 className='text-3xl font-serif text-amber-600'>BudhShiv</h1>
                <p className='text-xs tracking-widest uppercase text-amber-600'>BRING HOME POSITIVITY</p>

            </div>
        </div>

        <div className='flex items-center gap-4'>
        <button className='p-2 cursor-pointer'>
            <User onClick={() => navigate("/signup")} className='h-6 w-6' />
        </button>
        <button className='p-2'>
            <ShoppingBag className='h-6 w-6' />
        </button>
        <button className='flex items-center gap-1 p-2'>
            <span className='flex items-center'>
                <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" className='h-4 w-6 mr-1' />
                <span>INR</span>
            </span>
            <ChevronDown className='h-4 w-4' />
        </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className='border-t border-b border-gray-200'>
        <ul className='flex flex-wrap justify-center text-sm gap-6 py-4 px-4'>
        <li className='hover:text-amber-600 transition-colors'>
          <a href="/" className='block px-2'>Home</a>
        </li>
        <li className='hover:text-amber-600 transition-colors flex items-centre'>
          <Link to="/our-story" className='block px-2'>Our Story</Link>
        </li>
        

        <li className='hover:text-amber-600 transition-colors flex items-center'>
          <a href="/god-idols" className='block px-2'>God Idols</a>
         <ChevronDown className='h-4 w-4' />
        </li>
        <li className='hover:text-amber-600 transition-colors flex items-center'>
          <a href="brass-decor" className='block px-2'>Brass decor</a>
         <ChevronDown className='h-4 w-4' />
        </li>
        <li className='hover:text-amber-600 transition-colors'>
          <a href="/brass-idols" className='block px-2'>Intricate small superfine brass idols</a>
        </li>
        <li className='hover:text-amber-600 transition-colors'>
          <a href="/copper-idols" className='block px-2'>Copper idols</a>
        </li>
        <li className='hover:text-amber-600 transition-colors'>
          <a href="/south-india" className='block px-2'>Pure Bronze Solid idols from South India</a>
        </li>
        <li className='hover:text-amber-600 transition-colors'>
          <a href="god-idols" className='block px-2'>Wooden Wall Hangings with Brass Artifacts</a>
        </li>
        <li className='hover:text-amber-600 transition-colors'>
          <a href="god-idols" className='block px-2'>Vintage statues sculptures</a>
        </li>
        <li className='hover:text-amber-600 transition-colors'>
          <a href="god-idols" className='block px-2'>Timeless Indonesian Style Bronze Artefacts</a>
        </li>
        <li className='hover:text-amber-600 transition-colors'>
          <a href="god-idols" className='block px-2'>Master Pieces</a>
        </li>
        <li className='hover:text-amber-600 transition-colors'>
          <a href="god-idols" className='block px-2'>Hand painted Brass idols</a>
        </li>
        <li className='hover:text-amber-600 transition-colors'>
          <a href="god-idols" className='block px-2'>Contact</a>
        </li>
        <li className='hover:text-amber-600 transition-colors'>
          <a href="god-idols" className='block px-2'>Visit Our Store</a>
        </li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
