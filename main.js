/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Accordion\n/* harmony export */ });\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordionList = document.querySelectorAll(list);\r\n    this.activeClass = 'ativo';\r\n  }\r\n\r\n  toggleAccordion(item) {\r\n    item.classList.toggle(this.activeClass);\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  addAccordionEvent() {\r\n    this.accordionList.forEach((item) => {\r\n      item.addEventListener('click', () => {\r\n        this.toggleAccordion(item);\r\n      });\r\n    });\r\n  }\r\n  // iniciar a função\r\n\r\n  init() {\r\n    if (this.accordionList.length) {\r\n      this.toggleAccordion(this.accordionList[0]);\r\n      this.addAccordionEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/api-animais.js":
/*!***********************************!*\
  !*** ./js/modules/api-animais.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ fetchAnimais\n/* harmony export */ });\n/* harmony import */ var _numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numeros.js */ \"./js/modules/numeros.js\");\n\n\nfunction fetchAnimais(url, target) {\n  const numerosGrid = document.querySelector(target);\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = `<h3>${animal.especie}</h3>\n    <span data-numero=\"\">${animal.total}</span>`;\n    return div;\n  }\n\n  function preencherAnimais(animal) {\n    const divAnimal = createAnimal(animal);\n    numerosGrid.appendChild(divAnimal);\n  }\n\n  function animaAnimaisNumeros() {\n    const animaNumeros = new _numeros_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-numero]', '.numeros', 'ativo');\n    animaNumeros.init();\n  }\n\n  async function criarAnimais() {\n    try {\n      const animaisResposta = await fetch(url);\n      const JsonAnimais = await animaisResposta.json();\n      JsonAnimais.forEach((animal) => {\n        preencherAnimais(animal);\n      });\n      animaAnimaisNumeros();\n    } catch (erro) {\n      console.log(Error(erro));\n    }\n  }\n  return criarAnimais();\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/api-animais.js?");

/***/ }),

/***/ "./js/modules/api-bitcoin.js":
/*!***********************************!*\
  !*** ./js/modules/api-bitcoin.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ fetchBitcoin\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\r\n  // https://blockchain.info/ticker\r\n  const spanBtc = document.querySelector(target);\r\n  // const url = 'https://blockchain.info/ticker';\r\n  fetch(url)\r\n    .then((response) => response.json())\r\n    .then((json) => {\r\n      const valorCompra = json.BRL.sell;\r\n      const calculoDoacao = (valorCompra / 1000000).toFixed(3);\r\n      spanBtc.innerText = calculoDoacao;\r\n    }).catch((erro) => {\r\n      console.log(Error(erro));\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/api-bitcoin.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ debounce\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer;\r\n  return (...args) => {\r\n    if (timer) clearTimeout(timer);\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initDropdownMenu\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nclass initDropdownMenu {\n  constructor(dropdownMenus, events) {\n    this.dropdownMenus = document.querySelectorAll(dropdownMenus);\n    if (events === undefined) {\n      this.events = ['touchstart', 'click'];\n    } else {\n      this.events = events;\n    }\n    this.activeClass = 'active';\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);\n  }\n\n  activeDropdownMenu(event) {\n    event.preventDefault();\n    const element = event.currentTarget;\n    element.classList.add(this.activeClass);\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__.default)(element, this.events, () => {\n      element.classList.remove(this.activeClass);\n    });\n  }\n\n  addDropdownMenusEvents() {\n    this.dropdownMenus.forEach((menu) => {\n      this.events.forEach((userEvent) => {\n        menu.addEventListener(userEvent, this.activeDropdownMenu);\n      });\n    });\n  }\n\n  init() {\n    if (this.dropdownMenus.length) {\n      this.addDropdownMenusEvents();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initFuncionamento\n/* harmony export */ });\nclass initFuncionamento {\r\n  constructor(funcionamento, activeClass) {\r\n    this.funcionamento = document.querySelector(funcionamento);\r\n    this.activeClass = activeClass;\r\n  }\r\n\r\n  dadosFuncionamento() {\r\n    this.diaSemana = this.funcionamento.dataset.semana.split(',').map(Number);\r\n    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);\r\n  }\r\n\r\n  dadosAgora() {\r\n    this.agora = new Date();\r\n    this.diaAgora = this.agora.getDay();\r\n    this.horarioAgora = this.agora.getUTCHours() - 3;\r\n  }\r\n\r\n  estaAberto() {\r\n    this.semanaAberta = this.diaSemana.indexOf(this.diaAgora) !== -1;\r\n    this.horarioAberto = (this.horarioAgora >= this.horarioSemana[0] || \r\n      this.horarioAgora < this.horarioSemana[1]);\r\n\r\n    return this.semanaAberta && this.horarioAberto;\r\n  }\r\n\r\n  ativaAberto() {\r\n    if (this.estaAberto()) {\r\n      this.funcionamento.classList.add(this.activeClass);\r\n    }\r\n  }\r\n\r\n  init() {\r\n    this.dadosFuncionamento();\r\n    this.dadosAgora();\r\n    if (this.funcionamento) {\r\n      this.ativaAberto();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initMenuMobile\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nclass initMenuMobile {\n  constructor(menuButton, menuList, events) {\n    this.menuButton = document.querySelector(menuButton);\n    this.menuList = document.querySelector(menuList);\n    this.activeClass = 'active';\n    if (events === undefined) {\n      this.events = ['touchstart', 'click'];\n    } else {\n      this.events = events;\n    }\n\n    this.openMenu = this.openMenu.bind(this);\n  }\n\n  openMenu() {\n    this.menuList.classList.add(this.activeClass);\n    this.menuButton.classList.add(this.activeClass);\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.menuList, this.events, () => {\n      this.menuList.classList.remove(this.activeClass);\n      this.menuButton.classList.remove(this.activeClass);\n    });\n  }\n\n  addMenuMobileEvents() {\n    this.events.forEach((evento) => {\n      this.menuButton.addEventListener(evento, this.openMenu);\n    });\n  }\n\n  init() {\n    if (this.menuButton && this.menuList) {\n      this.addMenuMobileEvents();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initModal\n/* harmony export */ });\nclass initModal {\r\n  constructor(botaoAbrir, botaoFechar, containerModal) {\r\n    this.botaoAbrir = document.querySelector(botaoAbrir);\r\n    this.botaoFechar = document.querySelector(botaoFechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n\r\n    // bind this ao callback para fazer referência ao objeto da classe\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\r\n  }\r\n\r\n  toggleModal() {\r\n    this.containerModal.classList.toggle('ativo');\r\n  }\r\n\r\n  eventToggleModal(event) {\r\n    event.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n\r\n  cliqueForaModal(event) {\r\n    if (event.target === this.containerModal) {\r\n      this.toggleModal(event);\r\n    }\r\n  }\r\n\r\n  addModalEvent() {\r\n    this.botaoAbrir.addEventListener('click', this.eventToggleModal);\r\n    this.botaoFechar.addEventListener('click', this.eventToggleModal);\r\n    this.containerModal.addEventListener('click', this.cliqueForaModal);\r\n  }\r\n\r\n  init() {\r\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n      this.addModalEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/numeros.js":
/*!*******************************!*\
  !*** ./js/modules/numeros.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ AnimaNumeros\n/* harmony export */ });\nclass AnimaNumeros {\r\n  constructor(numeros, observerTarget, observerClass) {\r\n    this.numeros = document.querySelectorAll(numeros);\r\n    this.observerTarget = document.querySelector(observerTarget);\r\n    this.observerClass = observerClass;\r\n\r\n    this.handleMutation = this.handleMutation.bind(this);\r\n  }\r\n  // Recebe um elemento do Dom com um número em seu texto e\r\n  // incrementa de 0 até esse determinado número\r\n\r\n  static incrementarNumero(numero) {\r\n    const total = +numero.innerText;\r\n    const incremento = Math.floor(total / 100);\r\n    let start = 0;\r\n    const timer = setInterval(() => {\r\n      start += incremento;\r\n      numero.innerText = start;\r\n      if (start > total) {\r\n        numero.innerText = total;\r\n        clearInterval(timer);\r\n      }\r\n    }, 25 * Math.random());\r\n  }\r\n\r\n  animaNumeros() {\r\n    this.numeros.forEach((numero) => {\r\n      this.constructor.incrementarNumero(numero);\r\n    });\r\n  }\r\n\r\n  handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(this.observerClass)) {\r\n      this.observer.disconnect();\r\n      this.animaNumeros();\r\n    }\r\n  }\r\n\r\n  addMutationObserver() {\r\n    this.observer = new MutationObserver(this.handleMutation); // callBack\r\n    this.observer.observe(this.observerTarget, { attributes: true });\r\n  }\r\n\r\n  init() {\r\n    if (this.numeros.length && this.observerTarget) {\r\n      this.addMutationObserver();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/numeros.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ outsideClick\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = 'data-outside';\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    });\r\n    element.setAttribute(outside, '');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-anima.js":
/*!************************************!*\
  !*** ./js/modules/scroll-anima.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ AnimacaoScroll\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\nclass AnimacaoScroll {\n  constructor(sections) {\n    this.sections = document.querySelectorAll(sections);\n    this.windowMetade = window.innerHeight * 0.6;\n    this.animaScroll = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.animaScroll.bind(this), 50);\n  }\n\n  animaScroll() {\n    this.sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const isSectionVisible = (sectionTop - this.windowMetade) < 0;\n      if (isSectionVisible) {\n        section.classList.add('ativo');\n      } else if (section.classList.contains('ativo')) {\n        section.classList.remove('ativo');\n      }\n    });\n  }\n\n  init() {\n    this.animaScroll();\n    window.addEventListener('scroll', this.animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/scroll-anima.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ScrollSuave\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = { behavior: 'smooth', block: 'start' };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    section.scrollIntoView(this.options);\n\n    // forma alternativa\n    // const topo = section.offsetTop;\n    // window.scrollTo({\n    //   top: topo,\n    //   behavior: 'smooth',\n    // });\n  }\n\n  addLinkEvent() {\n    this.linksInternos.forEach((link) => {\n      link.addEventListener('click', this.scrollToSection);\n    });\n  }\n\n  init() {\n    if (this.linksInternos.length) {\n      this.addLinkEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initTabNav\n/* harmony export */ });\nclass initTabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = 'ativo';\n  }\n\n  activeTab(index) {\n    this.tabContent.forEach((section) => {\n      section.classList.remove(this.activeClass);\n    });\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent[index].classList.add(this.activeClass, direcao);\n  }\n\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => {\n        this.activeTab(index);\n      });\n    });\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initTooltip\n/* harmony export */ });\nclass initTooltip {\r\n  constructor(tolltips) {\r\n    this.tooltips = document.querySelectorAll(tolltips);\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n  }\r\n\r\n  onMouseMove(event) {\r\n    this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n    // Se a tolltip passar do tamanho da janela ela se redmensiona para a esquerda\r\n    if (event.pageX + 240 > window.innerWidth) {\r\n      this.tooltipBox.style.left = `${event.pageX - 190}px`;\r\n    } else {\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    }\r\n  }\r\n  // Remoce a tooltip e seus eventos\r\n\r\n  onMouseLeave({ currentTarget }) {\r\n    this.tooltipBox.remove();\r\n    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\r\n    currentTarget.removeEventListener('mousemove', this.onMouseMove);\r\n  }\r\n\r\n  // Cria a tolltip\r\n\r\n  criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement('div');\r\n    const text = element.getAttribute('aria-label');\r\n    tooltipBox.classList.add('tooltip');\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    this.tooltipBox = tooltipBox;\r\n  }\r\n\r\n  onMouseOver({ currentTarget }) {\r\n    // Cria a tolltip box e a coloca em uma propiedade\r\n    this.criarTooltipBox(currentTarget);\r\n\r\n    currentTarget.addEventListener('mousemove', this.onMouseMove);\r\n    currentTarget.addEventListener('mouseleave', this.onMouseLeave);\r\n  }\r\n\r\n  addTolltipsEvent() {\r\n    this.tooltips.forEach((item) => {\r\n      item.addEventListener('mouseover', this.onMouseOver);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tooltips.length) {\r\n      this.addTolltipsEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_api_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/api-animais.js */ \"./js/modules/api-animais.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./js/modules/scroll-anima.js\");\n/* harmony import */ var _modules_api_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/api-bitcoin.js */ \"./js/modules/api-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__.default('[data-anime=\"accordion\"] dt');\r\naccordion.init();\r\n\r\nconst tabnav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__.default('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\r\ntabnav.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__.default('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\r\nmodal.init();\r\n\r\nconst tolltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__.default('[data-tooltip]');\r\ntolltip.init();\r\n\r\nconst animaScroll = new _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_9__.default('[data-anime=\"scroll\"]');\r\nanimaScroll.init();\r\n\r\nconst dropdownMenu = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__.default('[data-dropdown]');\r\ndropdownMenu.init();\r\n\r\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__.default('[data-menu=\"button\"]', '[data-menu=\"list\"]');\r\nmenuMobile.init();\r\n\r\nconst funcionamento = new _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__.default('[data-semana]', 'aberto');\r\nfuncionamento.init();\r\n\r\n(0,_modules_api_animais_js__WEBPACK_IMPORTED_MODULE_8__.default)('./animais-api.json', '.numeros-grid');\r\n\r\n(0,_modules_api_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__.default)('https://blockchain.info/ticker', '.btc-preco');\n\n//# sourceURL=webpack://animaisfantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;