import React from 'react'
import { useState } from 'react'
import logo from '../../assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => (
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT3</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
    </>
  );

  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar-links'>
        <div className='gpt3_navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='gpt3_navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3_navbar-menu'>
        { toggleMenu?
          <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>:
          <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt3_navbar-menu_container scale-up-center'>
            <div className='gpt3_navbar-menu_container-links'>
              <Menu />
              <div className='gpt3_navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
