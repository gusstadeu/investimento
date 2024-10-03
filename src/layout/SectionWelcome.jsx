import React from 'react';
import Styles from '../styles/sectionWelcome.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


function SectionWelcome() {
  return (
    <div className={Styles.container}>
      <div className={Styles.containerOpacity}>

        <h3>Calculadora de Renda Fixa</h3>
        <h1>A combinação perfeita entre rentabilidade e segurança</h1>

        <AnchorLink className={Styles.boxButton} offset={100} href="#simulador">
          <button>Simular Investimentos</button>
        </AnchorLink>
      </div>
    </div>
  );
}

export default SectionWelcome;