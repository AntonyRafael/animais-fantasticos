import AnimaNumeros from './numeros.js';


export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3>
    <span data-numero="">${animal.total}</span>`;
    return div;
  }

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResposta = await fetch(url);
      const JsonAnimais = await animaisResposta.json();
      JsonAnimais.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  return criarAnimais();
}
