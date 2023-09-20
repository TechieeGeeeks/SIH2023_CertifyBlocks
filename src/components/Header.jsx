import React from 'react'
import NavBar from './Navbar'
import HeroComponent from './HeroComponent'

const Header = () => {
  return (
    <div className='flex flex-col bg-bgColor  md:p-12 p-8'>
        <NavBar />
        <HeroComponent />
    </div>
  )
}

export default Header