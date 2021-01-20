export default class initFuncionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diaSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.agora = new Date();
    this.diaAgora = this.agora.getDay();
    this.horarioAgora = this.agora.getUTCHours() - 3;
  }

  estaAberto() {
    this.semanaAberta = this.diaSemana.indexOf(this.diaAgora) !== -1;
    this.horarioAberto = (this.horarioAgora >= this.horarioSemana[0] || 
      this.horarioAgora < this.horarioSemana[1]);

    return this.semanaAberta && this.horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    this.dadosFuncionamento();
    this.dadosAgora();
    if (this.funcionamento) {
      this.ativaAberto();
    }
    return this;
  }
}
