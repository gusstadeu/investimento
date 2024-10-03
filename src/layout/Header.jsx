import React from 'react';
import Styles from '../styles/header.module.css'

function Header() {
  return (
    <div className={Styles.containerHeader}>
      <div className={Styles.standardText}>
        Edgar Chacon
      </div>
    </div>
  );
}

export default Header;