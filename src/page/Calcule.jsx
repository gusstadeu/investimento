import React, { useState } from 'react';
import Styles from '../styles/calcule.module.css';
import Accordion from 'react-bootstrap/Accordion';
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Calcule() {
  const [valorAplicacao, setValorAplicacao] = useState(1000);
  const [investimentoMensal, setInvestimentoMensal] = useState(0); // Novo estado para investimento mensal
  const [vencimento, setVencimento] = useState(360);
  const [taxaDi, setTaxaDi] = useState(10.65);
  const [taxaSelic, setTaxaSelic] = useState(10.75);
  const [percentualCdb, setPercentualCdb] = useState(100);
  const [percentualLci, setPercentualLci] = useState(100);
  const [tempo, setTempo] = useState('');
  
  const [rendimentoPoupanca, setRendimentoPoupanca] = useState(0);
  const [rendimentoBrutoPoupanca, setRendimentoBrutoPoupanca] = useState(0);
  
  const [rendimentoCdb, setRendimentoCdb] = useState(0);
  const [impostoCdb, setImpostoCdb] = useState(0);
  const [rendimentoBrutoCdb, setRendimentoBrutoCdb] = useState(0);
  const [rendimentoLiquidoCdb, setRendimentoLiquidoCdb] = useState(0);
  
  const [rendimentoLci, setRendimentoLci] = useState(0);
  const [rendimentoBrutoLci, setRendimentoBrutoLci] = useState(0);

  let [diasVencimento, setDiasVencimento] = useState(vencimento);


  const formatarNumero = (valor) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };

  const calcular = () => {

    
    if (tempo === "dia") {
      setDiasVencimento(diasVencimento = vencimento)
    } else if (tempo === "mes") {
      setDiasVencimento(diasVencimento = vencimento * 30)
    } else if (tempo === "ano") {
      setDiasVencimento(diasVencimento = vencimento * 365)
    }
    console.log(diasVencimento)
    // Cálculo da poupança (ajustado para cenário mensal e anual)
    let rendimentoPoupancaAnual = taxaSelic > 0.085 ? 0.00617 : 0.7 * (taxaSelic / 100);

    // Cálculo de juros compostos com contribuição mensal
    const calcularComMensal = (valorInicial, taxa, contribuicaoMensal, meses) => {
      let total = valorInicial;
      for (let i = 1; i <= meses; i++) {
        total = total * (1 + taxa) + contribuicaoMensal;
      }
      return total;
    };

    const meses = diasVencimento / 30;

    // Valor total investido
    const totalInvestido = valorAplicacao + investimentoMensal * meses;

    // Calculando para poupança com depósitos mensais
    const rendimentoPoupanca = calcularComMensal(valorAplicacao, rendimentoPoupancaAnual / 12, investimentoMensal, meses);
    const rendimentoBrutoPoupanca = rendimentoPoupanca - totalInvestido;

    // Cálculo do CDB
    // const rendimentoCdb = calcularComMensal(valorAplicacao, (taxaDi / 100) * (percentualCdb / 100) / 12, investimentoMensal, meses);
    // const rendimentoBrutoCdb = rendimentoCdb - totalInvestido;

    // Cálculo do CDB com imposto de renda
    const rendimentoCdb = calcularComMensal(valorAplicacao, (taxaDi / 100) * (percentualCdb / 100) / 12, investimentoMensal, meses);
    const rendimentoBrutoCdb = rendimentoCdb - totalInvestido;
    const impostoCdb = rendimentoBrutoCdb * 0.15;  // 15% de imposto sobre o rendimento bruto
    const rendimentoLiquidoCdb = rendimentoBrutoCdb - impostoCdb + totalInvestido;  // Subtrai o imposto para obter o rendimento líquido


    // Cálculo do LCI/LCA
    const rendimentoLci = calcularComMensal(valorAplicacao, (taxaDi / 100) * (percentualLci / 100) / 12, investimentoMensal, meses);
    const rendimentoBrutoLci = rendimentoLci - totalInvestido;

    // Formatação dos resultados
    setRendimentoPoupanca(formatarNumero(rendimentoPoupanca));
    setRendimentoBrutoPoupanca(formatarNumero(rendimentoBrutoPoupanca));

    setRendimentoLiquidoCdb(formatarNumero(rendimentoLiquidoCdb));
    setRendimentoBrutoCdb(formatarNumero(rendimentoBrutoCdb));
    setImpostoCdb(formatarNumero(impostoCdb)); 

    setRendimentoLci(formatarNumero(rendimentoLci));
    setRendimentoBrutoLci(formatarNumero(rendimentoBrutoLci));
  };

  const formatarValorInput = (valor, setValor) => {
    const valorNumerico = parseFloat(valor.replace(/\D/g, '')) / 100;
    setValor(valorNumerico);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <h1 id="simulador">INVESTIMENTO</h1>
        <label>Valor da Aplicação Inicial</label>
        <div className={Styles.boxInput}>
          <div className={Styles.inputFlex}>
            <input
              type="text"
              value={formatarNumero(valorAplicacao)}
              onChange={e => formatarValorInput(e.target.value, setValorAplicacao)}
              placeholder="1000"
            />
          </div>

          {/* Novo campo para investimento mensal */}
          <label>Investimento Mensal</label>
          <div className={Styles.inputFlex}>
            <input
              type="text"
              value={formatarNumero(investimentoMensal)}
              onChange={e => formatarValorInput(e.target.value, setInvestimentoMensal)}
              placeholder="200"
            />
          </div>

          <label>Vencimento</label>
          <div className={Styles.inputFlex}>
            <input
              type="number"
              value={vencimento}
              onChange={e => setVencimento(parseInt(e.target.value))}
              placeholder="360"
            />
            <select value={tempo} onChange={e => setTempo(e.target.value)}>
              <option value="dia">Dias</option>
              <option value="mes">Meses</option>
              <option value="ano">Anos</option>
            </select>
          </div>

          {/* Outros campos */}
          <div className={Styles.containerInputDividido}>
            <div className={Styles.contentInputMetade}>
              <label>Taxa DI</label>
              <div className={Styles.inputFlex}>
                <input
                  type="number"
                  value={taxaDi}
                  onChange={e => setTaxaDi(parseFloat(e.target.value))}
                  placeholder="10,65"
                  step="0.01"
                  />
                <span>% ao ano</span>
              </div>
            </div>
            <div className={Styles.contentInputMetade}>
              <label>Taxa Selic</label>
              <div className={Styles.inputFlex}>
                <input
                  type="number"
                  value={taxaSelic}
                  onChange={e => setTaxaSelic(parseFloat(e.target.value))}
                  placeholder="10,75"
                  step="0.01"
                />
                <span>% ao ano</span>
              </div>
            </div>
          </div>

          <div className={Styles.containerInputDividido}>
            <div className={Styles.contentInputMetade}>
              <label>CDB/RDB/LC</label>
              <div className={Styles.inputFlex}>
                <input
                  type="number"
                  value={percentualCdb}
                  onChange={e => setPercentualCdb(parseFloat(e.target.value))}
                  placeholder="100"
                  step="1"
                />
                <span>% DI</span>
              </div>
            </div>
            <div className={Styles.contentInputMetade}>
              <label>LCI/LCA</label>
              <div className={Styles.inputFlex}>
                <input
                  type="number"
                  value={percentualLci}
                  onChange={e => setPercentualLci(parseFloat(e.target.value))}
                  placeholder="100"
                  step="1"
                />
                <span>% DI</span>
              </div>
            </div>
          </div>
        </div>

        <AnchorLink className={Styles.boxButton} offset={100} href="#resultado">
          <button onClick={calcular}>Simulação</button>
        </AnchorLink>
      </div>

      <div style={{backgroundColor: '#1B264F', boxShadow: 'none'}} className={Styles.content}>
        <div className={Styles.result}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" id='resultado' className={Styles.card}>
              <Accordion.Header className={Styles.cardHeader}>
                <h3>Poupança</h3>
              </Accordion.Header>
              <Accordion.Body className={Styles.cardBody}>
                <p>Valor Total Investido: <span>{formatarNumero(valorAplicacao + investimentoMensal * (diasVencimento / 30))}</span></p>
                <p>Rendimento Bruto: <span>{rendimentoBrutoPoupanca}</span></p>
              </Accordion.Body>
              <div lassName={Styles.sectionValueLiquid}>
                <p className={Styles.textTotalLiquido}>Total Líquido:</p>
                <p style={{backgroundColor: 'rgb(241, 15, 15)'}} className={Styles.textValorTotalLiquido}>{rendimentoPoupanca}</p>
              </div>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className={Styles.card}>
              <Accordion.Header className={Styles.cardHeader}>
                <h3>CDB/RDB/LC</h3>
              </Accordion.Header>
              <Accordion.Body className={Styles.cardBody}>
                  <p>Valor Total Investido: <span>{formatarNumero(valorAplicacao + investimentoMensal * (diasVencimento / 30))}</span></p>
                  <p>Rendimento Bruto: <span>{rendimentoBrutoCdb}</span></p>
                  <p style={{color:'red'}}>Imposto de Renda: <span>{impostoCdb}</span></p>
              </Accordion.Body>
              <div lassName={Styles.sectionValueLiquid}>
                <p className={Styles.textTotalLiquido}>Total Líquido:</p>
                <p style={{backgroundColor: 'rgb(243, 142, 26)'}} className={Styles.textValorTotalLiquido}>{rendimentoLiquidoCdb}</p>
              </div>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className={Styles.card}>
              <Accordion.Header className={Styles.cardHeader}>
                <h3>LCI/LCA</h3>
              </Accordion.Header>
              <Accordion.Body className={Styles.cardBody}>
                  <p>Valor Total Investido: <span>{formatarNumero(valorAplicacao + investimentoMensal * (diasVencimento / 30))}</span></p>
                  <p>Rendimento Bruto: <span>{rendimentoBrutoLci}</span></p>
              </Accordion.Body>
              <div lassName={Styles.sectionValueLiquid}>
                <p className={Styles.textTotalLiquido}>Total Líquido:</p>
                <p style={{backgroundColor: 'rgb(7, 168, 7)'}} className={Styles.textValorTotalLiquido}>{rendimentoLci}</p>
              </div>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Calcule;
