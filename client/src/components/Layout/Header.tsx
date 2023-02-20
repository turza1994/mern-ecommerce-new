import Image from 'next/image'
import React, { useEffect } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { CiSearch } from 'react-icons/ci'
import { CiShoppingCart } from 'react-icons/ci'
import { CiTextAlignJustify } from 'react-icons/ci'
import { CiUser } from 'react-icons/ci'

function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const [cartOpen, setCartOpen] = React.useState(false)

  const [navbarTransparent, setNavbarTransparent] = React.useState(true)

  const changeBackground = (): any => {
    if (window.scrollY >= 66 || window.innerWidth < 1024) {
      setNavbarTransparent(false)
    } else {
      setNavbarTransparent(true)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground)
    console.log(window.innerWidth)
  })

  return (
    <>
      <nav
        className={`fixed w-full z-10 flex flex-wrap items-center justify-between px-[50px] transition-colors duration-500 ease-in-out ${
          navbarTransparent ? 'bg-transparent' : 'bg-white'
        }`}
      >
        <div className='w-full flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <a
              className='font-poppins text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-primary relative'
              href='#'
            >
              Turz
            </a>
            <button
              className='text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <CiTextAlignJustify />
            </button>
          </div>
          <div
            className={
              'lg:flex items-center' + (navbarOpen ? ' flex' : ' hidden')
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:mx-auto text-base'>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center   leading-5 text-black hover:text-primary  hover:font-bold transition-all duration-100 ease-in'
                  href='#'
                >
                  <i className='fab fa-facebook-square  leading-lg text-black opacity-75'></i>
                  <span className='ml-2'>Home</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center   leading-5 text-black hover:text-primary  hover:font-bold transition-all duration-100 ease-in'
                  href='#'
                >
                  <i className='fab fa-twitter  leading-lg text-black opacity-75'></i>
                  <span className='ml-2'>About</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center   leading-5 text-black hover:text-primary  hover:font-bold transition-all duration-100 ease-in'
                  href='#'
                >
                  <span className='ml-2'>Menu</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center   leading-5 text-black hover:text-primary  hover:font-bold transition-all duration-100 ease-in'
                  href='#'
                >
                  <span className='ml-2'>Blog</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center   leading-5 text-black hover:text-primary  hover:font-bold transition-all duration-100 ease-in'
                  href='#'
                >
                  <span className='ml-2'>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          <div
            className={
              'lg:flex items-center' + (navbarOpen ? ' flex' : ' hidden')
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto items-center text-xl'>
              <li className='nav-item'>
                <a className='mx-3 my-2 flex items-center text-black hover:text-primary  hover:font-black transition-all duration-100 ease-in cursor-pointer'>
                  <CiSearch />
                </a>
              </li>
              <li className='nav-item' onClick={() => setCartOpen(!cartOpen)}>
                <a className='mx-3 my-2 flex items-center text-black hover:text-primary  hover:font-black transition-all duration-100 ease-in cursor-pointer relative'>
                  <CiShoppingCart />
                  <div className='h-[8px] w-[8px] absolute top-0 right-0 bg-primary rounded-full'></div>
                </a>
              </li>
              <li className='nav-item'>
                <a className='mx-3 my-2 flex items-center text-black hover:text-primary  hover:font-black transition-all duration-100 ease-in cursor-pointer'>
                  <CiUser />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`absolute top-[100%] right-0 transition-all-all duration-200 ease-in ${
            !cartOpen && 'hidden '
          }`}
        >
          {/* <CartBar /> */}
        </div>
      </nav>
    </>
  )
}

export default Header
