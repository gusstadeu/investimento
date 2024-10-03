import React from 'react';
import Styles from '../styles/header.module.css'
import Logo from '../assets/ECH.png'

function Header() {
  return (
    <div className={Styles.containerHeader}>
      <div className={Styles.standardLogo}>
        <img width={200} src={Logo} alt="Edgar Gonçalves" />
      </div>
    </div>
  );
}

export default Header;