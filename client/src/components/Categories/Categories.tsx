import Image from 'next/image'
import React from 'react'

function Categories() {
  return (
    <div className='grid lg:grid-cols-2 gap-4'>
      <div className='grid grid-cols-2 gap-4'>
        <div className=' overflow-hidden cursor-pointer rounded   relative  group'>
          <img
            src='/banner-category-sale2.webp'
            className='w-full h-full object-cover  relative  group-hover:scale-110 transition-transform duration-300 ease-in rounded'
          />
          <div className='absolute top-0 w-full h-full flex justify-center items-center'>
            <button className='bg-white py-[12px] px-[30px] rounded opacity-90 uppercase group-hover:bg-primary group-hover:text-white group-hover:font-bold transition-colors duration-300 ease-in'>
              Sale
            </button>
          </div>
        </div>
        <div className=' overflow-hidden cursor-pointer rounded   relative  group row-span-2'>
          <img
            src='/banner-category-women2.webp'
            className='w-full h-full object-cover  relative  group-hover:scale-110 transition-transform duration-300 ease-in rounded'
          />
          <div className='absolute top-0 w-full h-full flex justify-center items-center'>
            <button className='bg-white py-[12px] px-[30px] rounded opacity-90 uppercase group-hover:bg-primary group-hover:text-white group-hover:font-bold transition-colors duration-300 ease-in'>
              Women
            </button>
          </div>
        </div>
        <div className=' overflow-hidden cursor-pointer rounded   relative  group'>
          <img
            src='/banner-category-new2.webp'
            className='w-full h-full object-cover  relative  group-hover:scale-110 transition-transform duration-300 ease-in rounded'
          />
          <div className='absolute top-0 w-full h-full flex justify-center items-center'>
            <button className='bg-white py-[12px] px-[30px] rounded opacity-90 uppercase group-hover:bg-primary group-hover:text-white group-hover:font-bold transition-colors duration-300 ease-in'>
              New
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className=' overflow-hidden cursor-pointer rounded   relative  group'>
          <img
            src='/banner-category-men2.webp'
            className='w-full h-full object-cover  relative  group-hover:scale-110 transition-transform duration-300 ease-in rounded'
          />
          <div className='absolute top-0 w-full h-full flex justify-center items-center'>
            <button className='bg-white py-[12px] px-[30px] rounded opacity-90 uppercase group-hover:bg-primary group-hover:text-white group-hover:font-bold transition-colors duration-300 ease-in'>
              Men
            </button>
          </div>
        </div>
        <div className=' overflow-hidden cursor-pointer rounded   relative  group'>
          <img
            src='/banner-category-accessories2.webp'
            className='w-full h-full object-cover  relative  group-hover:scale-110 transition-transform duration-300 ease-in rounded'
          />
          <div className='absolute top-0 w-full h-full flex justify-center items-center'>
            <button className='bg-white py-[12px] px-[30px] rounded opacity-90 uppercase group-hover:bg-primary group-hover:text-white group-hover:font-bold transition-colors duration-300 ease-in'>
              Accessories
            </button>
          </div>
        </div>
        <div className=' overflow-hidden cursor-pointer rounded   relative  group col-span-2'>
          <img
            src='/banner-category-shoes2.webp'
            className='w-full h-full object-cover  relative  group-hover:scale-110 transition-transform duration-300 ease-in rounded'
          />
          <div className='absolute top-0 w-full h-full flex justify-center items-center'>
            <button className='bg-white py-[12px] px-[30px] rounded opacity-90 uppercase group-hover:bg-primary group-hover:text-white group-hover:font-bold transition-colors duration-300 ease-in'>
              Shoes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
