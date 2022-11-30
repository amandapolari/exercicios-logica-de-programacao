//  QUESTÃO 1
// a) Na compra de duas unidades de um mesmo medicamento,
// o cliente recebe como desconto os centavos do valor total.
// Elaborar um programa que leia descrição e preço de um
// medicamento.
// Informe o valor do produto na promoção.

// => Capturar os dados:
const drug = document.getElementById('drug');
const price = document.getElementById('price');

// => Gerador do evento:
const btn = document.getElementById('show-promotion');
const quant = document.getElementById('quant');

// => Saída de dados:
const outputDrug = document.getElementById('promotion-drug');
const outputValuePromotion = document.getElementById('value-promotion');

quant.addEventListener('change', (e) => {
  e.preventDefault();
  // => Processar os dados:
  const totalValue = price.value * quant.value;

  // => Saídas
  if (quant.value >= 3) {
    const roundedValue = Math.floor(totalValue);
    outputDrug.innerHTML = `Promoção de ${drug.value}`;
    outputValuePromotion.innerHTML = `Leve 3 por apenas R$ ${roundedValue}`;
  } else {
    outputValuePromotion.innerHTML = `Total a pagar ${totalValue}`;
  }
});

// => Evento para exposição de resultados:
btn.addEventListener('click', (e) => {
  e.preventDefault();
  // => Teste de captura valores:
  console.log(drug.value);
  console.log(price.value);

  // => Processar os dados:
  const totalValue = price.value * quant.value;

  // => Saídas
  if (quant.value >= 3) {
    const roundedValue = Math.floor(totalValue);
    outputDrug.innerHTML = `Promoção de ${drug.value}`;
    outputValuePromotion.innerHTML = `Leve 3 por apenas R$ ${roundedValue}`;
  } else {
    outputValuePromotion.innerHTML = `Total a pagar ${totalValue}`;
  }
});
