import React, { useState } from 'react'
import { addToCart } from '../../redux/cartSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

const ProductCard = ({ product }: any) => {
  const dispatch = useAppDispatch()
  const { image, name, price } = product

  const handleAddToCart = () => {
    const data = { ...product, qty: 0, totalPrice: 0, totalVat: 0 }
    dispatch(addToCart(data))
  }

  return (
    <div className='w-[250px] rounded-md overflow-hidden cursor-pointer transition-transform duration-300 transform-gpu shadow-md relative group'>
      <div className='h-72 w-full'>
        <img className='h-full w-full object-cover' src={image} alt={name} />
      </div>
      <div
        className={`transition-transform duration-300 px-4 py-4 bg-white flex flex-col items-center justify-center gap-y-2 translate-y-[-50px] lg:translate-y-0 group-hover:translate-y-[-50px]`}
      >
        <h3 className='text-gray-800 font-medium'>{name}</h3>
        <p className='text-gray-600'>${price}</p>
      </div>
      <div className='absolute bottom-4 w-full'>
        <button
          className='bg-primary text-white font-medium w-[75%] py-2 rounded transition-all duration-500 hover:bg-white hover:border hover:border-primary hover:text-primary block mx-auto lg:opacity-0 group-hover:opacity-100'
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
