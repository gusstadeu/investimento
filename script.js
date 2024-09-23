function calcular() {
    // Pegando os valores dos inputs
    let valorAplicacao = parseFloat(document.getElementById('valorAplicacao').value);
    let vencimento = parseInt(document.getElementById('vencimento').value);
    let taxaDi = parseFloat(document.getElementById('taxaDi').value) / 100;
    let percentualCdb = parseFloat(document.getElementById('percentualCdb').value) / 100;
    let percentualLci = parseFloat(document.getElementById('percentualLci').value) / 100;
    let tempo = document.getElementById('value_vencimento').value;

    if (tempo === "dia") {
      vencimento = vencimento * 1
    }
    else if(tempo === "mes") {
      vencimento = vencimento * 30
    }
    else if (tempo === "ano") {
      vencimento = vencimento * 365
    }
    
    // Calculando o rendimento da poupança
    let rendimentoPoupancaAnual;
    if (taxaSelic > 0.085) {
      rendimentoPoupancaAnual = 0.5 / 100; // 0,5% ao mês
    } else {
      rendimentoPoupancaAnual = 0.7 * taxaSelic; // 70% da Selic
    }

    const rendimentoPoupanca = valorAplicacao * Math.pow((1 + rendimentoPoupancaAnual), vencimento / 365);
    const rendimentoBrutoPoupanca = rendimentoPoupanca - valorAplicacao;

    // Calculando o rendimento para CDB/RDB
    let rendimentoCdb = valorAplicacao * (1 + (taxaDi * percentualCdb) * (vencimento / 365));
    let rendimentoBrutoCdb = rendimentoCdb - valorAplicacao;

    // Calculando o rendimento para LCI/LCA
    let rendimentoLci = valorAplicacao * (1 + (taxaDi * percentualLci) * (vencimento / 365));
    let rendimentoBrutoLci = rendimentoLci - valorAplicacao;



    // Gerando o HTML com o resultado
    document.getElementById('result').innerHTML = `
       <div class="card">
          <div class="standard">
            <div class="boxes">
              <h3>Poupança</h3>
            </div>
            <div class="boxes">
              <div class="title-valor">Total liquido</div>
              <div class="value-destaq">R$ ${rendimentoPoupanca.toFixed(2)}</div>
            </div>
          </div>          
          <p>Valor Investido: R$ ${valorAplicacao.toFixed(2)}</p>
          <p>Rendimento Bruto: R$ ${rendimentoBrutoPoupanca.toFixed(2)}</p>
        </div>

        <div class="card">
          <div class="standard">
            <div class="boxes">
              <h3>CDB/RDB/LC</h3>
            </div>
            <div class="boxes">
              <div class="title-valor">Valor liquido</div>
              <div class="value-destaq">R$ ${rendimentoCdb.toFixed(2)}</div>
            </div>
          </div>
          <p>Valor Investido: R$ ${valorAplicacao.toFixed(2)}</p>
          <p>Rendimento Bruto: R$ ${rendimentoBrutoCdb.toFixed(2)}</p>
        </div>
          
        <div class="card best">
          <div class="standard">
            <div class="boxes">
              <h3>LCI/LCA</h3>
            </div>
            <div class="boxes">
              <div class="title-valor">Valor Investido</div>
              <div class="value-destaq">R$ 1000.00</div>
            </div>
          </div>
          <p>Valor Investido: R$ ${valorAplicacao.toFixed(2)}</p>
          <p>Rendimento Bruto: R$ ${rendimentoBrutoLci.toFixed(2)}</p>
        </div>
    `;
  }

    
