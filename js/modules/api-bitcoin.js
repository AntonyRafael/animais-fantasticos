export default function initBitCoins() {
  // https://blockchain.info/ticker
  const spanBtc = document.querySelector('.btc-preco');
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((json) => {
      const valorCompra = json.BRL.sell;
      const calculoDoacao = (valorCompra / 1000000).toFixed(3);
      spanBtc.innerText = calculoDoacao;
    }).catch((erro) => {
      console.log(Error(erro));
    });
}
