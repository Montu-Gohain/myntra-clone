import React from 'react'
import Image from 'next/image';
import myntra from '../assets/mntr.png'
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <div className='flex items-center bg-white max-h-20 shadow-md p-10'>

      {/* Logo section */}

      <section className=' ml-5 mr-14 cursor-pointer'>
          <Image src={myntra} width={125} height={140}/>
      </section>

      {/* Categories Section */}

      <section className='flex flex-1 cursor-pointer tracking-wide text-sm font-semibold text-gray-700'>

        <a className='mr-8' href="#">MEN</a>
        <a className='mr-8' href="#">WOMEN</a>
        <a className='mr-8' href="#">KIDS</a>
        <a className='mr-8' href="#">HOME & LIVING</a>
        <a className='mr-8' href="#">BEAUTY</a>
        <a className='mr-8' href="#">STUDIO</a>
      </section>

      {/* Search Box Section */}

      <section className='flex flex-1 relative ml-24 '>

      <MagnifyingGlassIcon className='h-4 text-gray-600 ml-3 mt-3 mr-6 absolute' />

        <input type="text" placeholder='Search for products,brands and more'
        className='border px-12 w-[600px] text-sm py-2 rounded-sm bg-gray-100 
        focus:bg-white focus:outline-none'
         
         />

      </section>

      {/* Icons Section */}
      <section className='flex justify-between'>
         <div className='flex flex-col mr-5'>
          <UserIcon className='h-5 text-gray-600' />
            <p className='text-xs font-semibold'>Profile</p>
         </div>
         <div className='flex flex-col mr-5 cursor-pointer'>
          <HeartIcon className='h-5 text-gray-600' />
            <p className='text-xs font-semibold'>Wishlist</p>
         </div>
         <div className='flex flex-col mr-9 cursor-pointer'>
          <ShoppingBagIcon className='h-5 text-gray-600' />
            <p className='text-xs font-semibold'>Bag</p>
         </div>
      </section>

    </div>
  )
}

export default Header;
