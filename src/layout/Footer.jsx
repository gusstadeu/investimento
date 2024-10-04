import React from 'react';
import Styles from '../styles/footer.module.css'
import Logo from '../assets/ECH.png'

function Footer() {
  return (
    <div className={Styles.containerFooter}>
      <div className={Styles.standardLogo}>
        <img width={200} src={Logo} alt="Edgar Gonçalves" />
      </div>
    </div>
  );
}

export default Footer;