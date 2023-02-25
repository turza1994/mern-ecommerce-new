import Image from 'next/image'
import React from 'react'
import {
  addToCart,
  decreaseQuantityFromCart,
  removeFromCart,
} from '../../redux/cartSlice'
import { useAppDispatch } from '../../redux/hooks'

function SingleCartItem({ data }: any) {
  const { name, image, qty, totalPrice } = data
  const dispatch = useAppDispatch()

  const handleDecreaseQuantity = () => {
    data = { ...data, qty: 0, totalPrice: 0, totalVat: 0 }
    dispatch(decreaseQuantityFromCart(data))
  }

  const handleIncreaseQuantity = () => {
    data = { ...data, qty: 0, totalPrice: 0, totalVat: 0 }
    dispatch(addToCart(data))
  }

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(data))
  }

  return (
    <div className='p-2 flex items-center justify-between bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100'>
      <div className='flex items-center gap-2'>
        <Image src={data.image} alt='img product' width={50} height={50} />
        <span className='text-sm'>{name}</span>
      </div>

      <div className='flex justify-around items-center '>
        <button
          className='bg-[#F3BA00] px-[5px] text-xl hover:opacity-75 text-black'
          onClick={handleDecreaseQuantity}
        >
          -
        </button>
        <span className='px-3 fs-5'> {qty} </span>
        <button
          className='bg-[#F3BA00] px-[5px] text-xl hover:opacity-75 text-black'
          onClick={handleIncreaseQuantity}
        >
          +
        </button>
      </div>
      <div className='flex flex-col w-18 font-medium items-end'>
        <div
          className='w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700'
          onClick={handleRemoveFromCart}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='100%'
            height='100%'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-trash-2 '
          >
            <polyline points='3 6 5 6 21 6'></polyline>
            <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
            <line x1='10' y1='11' x2='10' y2='17'></line>
            <line x1='14' y1='11' x2='14' y2='17'></line>
          </svg>
        </div>
        <span className='text-black'>${totalPrice}</span>
      </div>
    </div>
  )
}

export default SingleCartItem
