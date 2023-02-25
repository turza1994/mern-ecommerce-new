import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import SingleCartItem from './SingleCartItem'

function CartBar() {
  const { cartItems } = useAppSelector((state) => state.cart)
  const cartItemsArray = cartItems && Object.keys(cartItems)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalVat, setTotalVat] = useState(0)

  useEffect(() => {
    setTotalPrice(
      cartItemsArray.reduce(
        (pv: any, cv: any) => pv + cartItems[cv].totalPrice,
        0
      )
    )

    setTotalVat(
      cartItemsArray.reduce(
        (pv: any, cv: any) => pv + cartItems[cv].totalVat,
        0
      )
    )
  }, [cartItems, cartItemsArray])

  return (
    <div className='bg-white h-fit w-[300px] shadow-md shadow-gray-400 flex flex-col text-[#929292]'>
      <h3 className='p-2'>Cart Items:</h3>
      <div className='overflow-auto'>
        {cartItemsArray.map((id: any) => (
          <SingleCartItem key={id} data={cartItems[id]} />
        ))}
      </div>
      <p className='my-auto text-center py-2'>
        Total Price:{' '}
        <span className='text-black font-semibold'>${totalPrice}</span>
      </p>
      <button className='my-auto py-2 font-semibold bg-[#F3BA00] text-black'>
        <Link href='#'>Checkout</Link>
      </button>
    </div>
  )
}

export default CartBar
