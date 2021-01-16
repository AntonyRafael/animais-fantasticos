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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initAccordion\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\n  const activeClass = 'ativo';\n\n  function activeAccordion() {\n    this.classList.toggle(activeClass);\n    this.nextElementSibling.classList.toggle(activeClass);\n  }\n\n  if (accordionList.length) {\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n\n    accordionList.forEach((item) => {\n      item.addEventListener('click', activeAccordion);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/api-animais.js":
/*!***********************************!*\
  !*** ./js/modules/api-animais.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ apiAnimais\n/* harmony export */ });\n/* harmony import */ var _numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numeros.js */ \"./js/modules/numeros.js\");\n\n\nfunction apiAnimais() {\n  async function fetchAnimais(url) {\n    function createAnimal(animal) {\n      const div = document.createElement('div');\n      div.classList.add('numero-animal');\n      div.innerHTML = `<h3>${animal.especie}</h3>\n      <span data-numero=\"\">${animal.total}</span>`;\n      return div;\n    }\n\n    try {\n      const animaisResposta = await fetch(url);\n      const JsonAnimais = await animaisResposta.json();\n      const numerosGrid = document.querySelector('.numeros-grid');\n      JsonAnimais.forEach((animal) => {\n        const divAnimal = createAnimal(animal);\n        numerosGrid.appendChild(divAnimal);\n      });\n\n      (0,_numeros_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n    } catch (erro) {\n      console.log(Error(erro));\n    }\n  }\n  fetchAnimais('./animais-api.json');\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/api-animais.js?");

/***/ }),

/***/ "./js/modules/api-bitcoin.js":
/*!***********************************!*\
  !*** ./js/modules/api-bitcoin.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initBitCoins\n/* harmony export */ });\nfunction initBitCoins() {\n  // https://blockchain.info/ticker\n  const spanBtc = document.querySelector('.btc-preco');\n  fetch('https://blockchain.info/ticker')\n    .then((response) => response.json())\n    .then((json) => {\n      const valorCompra = json.BRL.sell;\n      const calculoDoacao = (valorCompra / 1000000).toFixed(3);\n      spanBtc.innerText = calculoDoacao;\n    }).catch((erro) => {\n      console.log(Error(erro));\n    });\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/api-bitcoin.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initDropdownMenu\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initDropdownMenu() {\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  }\n  dropdownMenus.forEach((menu) => {\n    ['touchstart', 'click'].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initFuncionamento\n/* harmony export */ });\nfunction initFuncionamento() {\n  const agora = new Date();\n  console.log(agora);\n\n  const funcionamento = document.querySelector('[data-semana]');\n\n  const diaSemana = funcionamento.dataset.semana.split(',').map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n\n  const diaAgora = agora.getDay();\n  const horarioAgora = agora.getHours();\n\n  const semanaAberta = diaSemana.indexOf(diaAgora) !== -1;\n\n  const horarioAberto = (horarioAgora >= horarioSemana[0] || horarioAgora < horarioSemana[1]);\n  if (semanaAberta && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initMenuMobile\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nconst menuButton = document.querySelector('[data-menu=\"button\"');\nconst menuList = document.querySelector('[data-menu=\"list\"');\nconst eventos = ['click', 'touchstart'];\n\nfunction initMenuMobile() {\n  function openMenu() {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__.default)(menuList, eventos, () => {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n  if (menuButton) {\n    eventos.forEach((evento) => {\n      menuButton.addEventListener(evento, openMenu);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initModal\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\n\n  function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle('ativo');\n  }\n  function cliqueForaModal(event) {\n    if (event.target === this) {\n      toggleModal(event);\n    }\n  }\n  if (botaoAbrir && botaoFechar && containerModal) {\n    botaoAbrir.addEventListener('click', toggleModal);\n    botaoFechar.addEventListener('click', toggleModal);\n    containerModal.addEventListener('click', cliqueForaModal);\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/numeros.js":
/*!*******************************!*\
  !*** ./js/modules/numeros.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initAnimaNumeros\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]');\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 100);\n      let start = 0;\n      const timer = setInterval(() => {\n        start += incremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n  let observer;\n  function handleMutation(mutation) {\n    if (\n      mutation[0].target.classList.contains('ativo')) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n  observer = new MutationObserver(handleMutation); // callBack\n\n  const observerTarget = document.querySelector('.numeros');\n\n  observer.observe(observerTarget, { attributes: true });\n  // Objeto a ser observado (target), atributos\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/numeros.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ outsideClick\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initAnimacaoScroll\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  const windowMetade = window.innerHeight * 0.6;\n  function animaScroll() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const isSectionVisible = (sectionTop - windowMetade) < 0;\n      if (isSectionVisible) {\n        section.classList.add('ativo');\n      } else if (section.classList.contains('ativo')) {\n        section.classList.remove('ativo');\n      }\n    });\n  }\n  if (sections.length) {\n    animaScroll();\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initScrollSuave\n/* harmony export */ });\nfunction initScrollSuave() {\n  const linksInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n\n  function scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    section.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start',\n    });\n\n    // forma alternativa\n    // const topo = section.offsetTop;\n    // window.scrollTo({\n    //   top: topo,\n    //   behavior: 'smooth',\n    // });\n  }\n\n  linksInternos.forEach((link) => {\n    link.addEventListener('click', scrollToSection);\n  });\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initTabNav\n/* harmony export */ });\nfunction initTabNav() {\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n  function activeTab(index) {\n    tabContent.forEach((section) => {\n      section.classList.remove('ativo');\n    });\n    const direcao = tabContent[index].dataset.anime;\n    tabContent[index].classList.add('ativo', direcao);\n  }\n  if (tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add('ativo');\n    tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initTooltip\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll('[data-tooltip]');\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    },\n  };\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    },\n  };\n  function criarTooltipBox(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n  function onMouseOver() {\n    const tooltipBox = criarTooltipBox(this);\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove);\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n\n  tooltips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_api_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/api-animais.js */ \"./js/modules/api-animais.js\");\n/* harmony import */ var _modules_api_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/api-bitcoin.js */ \"./js/modules/api-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__.default)();\n(0,_modules_api_animais_js__WEBPACK_IMPORTED_MODULE_9__.default)();\n(0,_modules_api_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__.default)();\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/script.js?");

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