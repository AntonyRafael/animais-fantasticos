export default function initFuncionamento() {
  const agora = new Date();
  console.log(agora);

  const funcionamento = document.querySelector('[data-semana]');

  const diaSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const diaAgora = agora.getDay();
  const horarioAgora = agora.getHours();

  const semanaAberta = diaSemana.indexOf(diaAgora) !== -1;

  const horarioAberto = (horarioAgora >= horarioSemana[0] || horarioAgora < horarioSemana[1]);
  if (semanaAberta && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
