export default function fetchBitcoin(url, target) {
  // https://blockchain.info/ticker
  const spanBtc = document.querySelector(target);
  // const url = 'https://blockchain.info/ticker';
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const valorCompra = json.BRL.sell;
      const calculoDoacao = (valorCompra / 1000000).toFixed(3);
      spanBtc.innerText = calculoDoacao;
    }).catch((erro) => {
      console.log(Error(erro));
    });
}
