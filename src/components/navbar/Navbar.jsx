import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import styles from './Navbar.module.css'
import style from '../../App.module.css'
import logo from '../../assets/logo.svg'

const Menu = () => {
  return(
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT?</a></p>
    <p><a href='#possibility'>OpenAI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
  )
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className={styles.gpt3__navbar}>
      <div className={styles.gpt3__navbar_links}>
        <div className={styles.gpt3__navbar_links_logo}>
          <a href='#home'><img src={logo} alt="logo"/></a>
        </div>
        <div className={styles.gpt3__navbar_links_container}>
          <Menu/>
        </div>
      </div>
      <div className={styles.gpt3__navbar_sign}>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className={styles.gpt3__navbar_menu}>
        {toggleMenu
          ?<RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          :<RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className={`${styles.gpt3__navbar_menu_container} ${style.scale_up_center}`}>
            <div className={styles.gpt3__navbar_menu_container_links}>
              <Menu/>
              <div className={styles.gpt3__navbar_menu_container_links_sign}>
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