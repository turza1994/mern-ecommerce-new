import React from 'react'
import Header from './Header'

interface IProps {
  children: JSX.Element[] | JSX.Element
}

function Layout({ children }: IProps) {
  return (
    <div className='relative'>
      <Header />
      {children}
    </div>
  )
}

export default Layout
