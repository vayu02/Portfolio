import './nav.css'
import { BiHome } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { BiBookHeart } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeLink, setActiveLink] = useState('#')
  return (
    <nav className='nav'>
      <a
        href='/#'
        onClick={() => setActiveLink('/#')}
        className={activeLink === '/#' ? 'active' : ''}
      >
        <BiHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveLink('#about')}
        className={activeLink === '#about' ? 'active' : ''}
      >
        <FiUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveLink('#experience')}
        className={activeLink === '#experience' ? 'active' : ''}
      >
        <BiBookHeart />
      </a>
      <a
        href='#portfolio'
        onClick={() => setActiveLink('#portfolio')}
        className={activeLink === '#portfolio' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveLink('#contact')}
        className={activeLink === '#contact' ? 'active' : ''}
      >
        <BiMessageDetail />
      </a>
    </nav>
  )
}

export default Nav
