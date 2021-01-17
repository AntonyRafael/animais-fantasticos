import AnimaNumeros from './numeros.js';

export default function apiAnimais() {
  async function fetchAnimais(url) {
    function createAnimal(animal) {
      const div = document.createElement('div');
      div.classList.add('numero-animal');
      div.innerHTML = `<h3>${animal.especie}</h3>
      <span data-numero="">${animal.total}</span>`;
      return div;
    }

    try {
      const animaisResposta = await fetch(url);
      const JsonAnimais = await animaisResposta.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      JsonAnimais.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  fetchAnimais('./animais-api.json');
}
