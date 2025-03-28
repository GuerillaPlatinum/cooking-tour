import React from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
import {Menu, X, AlignRight} from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggle = ()=> setDrawerOpen(!drawerOpen);
  return (
    <nav className="py-3 sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
      <div className='container px-4 mx-auto lg:text-sm'>
        <div className='items flex justify-between items-center'>

          <div className='nameLogo  flex items-center justify-between gap-2'>
            <img src={logo} alt="logo" className='w-10' />
            <span className='text-xl'>Nne's Kitchen</span>
          </div>

          <ul className='hidden lg:flex justify-between items-center gap-10 '>
            {navItems.map((item,index)=>(
              <li key={index}>
                <a href={item.href} className='hover:text-green-700'>{item.label}</a>
              </li>
            ))}
          </ul>
          
          <div className='hidden lg:flex justify-between gap-10 items-center'>
            <a href="#" className='py-2 px-8 flex border rounded-sm'>
              Contact
            </a>
            {/* <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 opacity-70 py-2 px-3 rounded-md'>Blog</a> */}
          </div>

          <button onClick={toggle} className='cursor-pointer lg:hidden'>
            {drawerOpen ?<X /> : <AlignRight />}
          </button>

        </div>

        {drawerOpen &&(
          <div className='bg-neutral-900 opacity-95 w-full fixed right-0 py-12 flex flex-col items-center justify-center lg:hidden'>
            <ul>
              {navItems.map((item, index)=>(
                <li key={index} className='py-4'>
                  <a href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='flex gap-7'>
              <a href="#" className=' border rounded px-8 py-2'>
                Contact
              </a>
               
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
