import React from 'react';
import Styles from '../styles/calcule.module.css'

function Calcule() {
  return (
    <body>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <h1>INVESTIMENTO</h1>
          <label for="valorAplicacao">Valor da Aplicação</label>
          <div className={Styles.boxInput}>
            <div className={Styles.inputFlex}>
              <span styles={"text-align: left; width: auto;"}>R$</span><input type="number" id="valorAplicacao" placeholder="1000" /><span>,00</span>
            </div>
            <label for="vencimento">Vencimento (dias)</label>
            <div className={Styles.inputFlex}>
              <input type="number" id="vencimento" placeholder="360" />
              <span>
                <select name="value_vencimento" id="value_vencimento">
                <option value="dia">Dias</option>
                <option value="mes">Meses</option>
                <option value="ano">Anos</option>
              </select>
            </span>
            </div>
            <label for="taxaDi">Taxa DI</label>
            <div className={Styles.inputFlex}>
              <input type="number" id="taxaDi" placeholder="10,65" step="0.01" /><span>% ao ano</span>
            </div>
            <label for="taxaSelic">Taxa Selic</label>
            <div className={Styles.inputFlex}>
              <input type="number" id="taxaSelic" placeholder="10,75" step="0.01" /><span>% ao ano</span>
            </div>
            <label for="percentualCdb">CDB/RDB/LC</label>
            <div className={Styles.inputFlex}>
              <input type="number" id="percentualCdb" placeholder="100" step="1" /><span>% DI</span>
            </div>
            <label for="percentualLci">LCI/LCA</label>
            <div className={Styles.inputFlex}>
              <input type="number" id="percentualLci" placeholder="100" step="1" /><span>% DI</span>
            </div>
          </div>
          <div className={Styles.boxButton}>
            <button onclick="calcular()">Simulação</button>
          </div>
          
        </div>
        <div className={Styles.content}>
          <div className={Styles.result} id="result">
            <div className={Styles.card}>
              <div className={Styles.standard}>
                <div className={Styles.boxes}>
                  <h3>Poupança</h3>
                </div>
                <div className={Styles.boxes}>
                  <div className={Styles.titleValor}>Total liquido</div>
                  <div className={Styles.valueDestaq}>R$ 1105.04</div>
                </div>
              </div>          
              <p>Valor Investido: R$ 1000,00</p>
              <p>Rendimento Bruto: R$ 105.04</p>
            </div>

            <div className={Styles.card}>
              <div className={Styles.standard}>
                <div className={Styles.boxes}>
                  <h3>CDB/RDB/LC</h3>
                </div>
                <div className={Styles.boxes}>
                  <div className={Styles.titleValor}>Valor liquido</div>
                  <div className={Styles.valueDestaq}>R$ 1105.04</div>
                </div>
              </div>
              <p>Valor Investido: R$ 1000,00</p>
              <p>Rendimento Bruto: R$ 105.04</p>
            </div>
              
            <div className={Styles.card}>
              <div className={Styles.standard}>
                <div className={Styles.boxes}>
                  <h3>LCI/LCA</h3>
                </div>
                <div className={Styles.boxes}>
                  <div className={Styles.titleValor}>Valor Investido</div>
                  <div className={Styles.valueDestaq}>R$ 1000.00</div>
                </div>
              </div>
              <p>Rendimento Bruto: R$ 105.04</p>
              <p>Valor Total Líquido: R$ 1105.04</p>
            </div>
          </div>

        </div>
      </div>
    </body>
  );
}

export default Calcule;