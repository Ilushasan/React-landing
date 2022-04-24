import React from 'react'
import styles from './Footer.module.css'
import style from '../../App.module.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className={`${styles.gpt3_footer} ${style.sectionPadding}`}>
      <div className={styles.gpt3_footer_heading}>
        <h1 className={style.gradientText}>
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className={styles.gpt3_footer_btn}>
        <p>Request Early Access</p>
      </div>
      <div className={styles.gpt3_footer_links}>
        <div className={styles.gpt3_footer_links_logo}>
          <a href='#home'><img src={gpt3Logo} alt='logo'/></a>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className={styles.gpt3_footer_links_div}>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className={styles.gpt3_footer_links_div}>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className={styles.gpt3_footer_links_div}>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className={styles.gpt3_footer_copuright}>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer