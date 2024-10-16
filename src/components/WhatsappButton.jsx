import React from 'react';
import Styles from '../styles/whatsappButton.module.css'
import Logo from '../assets/whatsapp.png' 

function WhatsappButton() {
  return (
        <a href="https://wa.link/xkkbli" target="_blank" className={Styles.containerButton}>
            <div className={Styles.standardLogo}>
                <img width={200} src={Logo} alt="Logo Whatsapp" />
                <p className={Styles.standardText}>FALAR COM ESPECIALISTA</p>
            </div>
        </a>
  );
}

export default WhatsappButton;