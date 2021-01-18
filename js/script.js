import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import iniitFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/api-animais.js';
import initBitCoins from './modules/api-bitcoin.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tolltip = new Tooltip('[data-tooltip]');
tolltip.init();

initDropdownMenu();
initMenuMobile();
iniitFuncionamento();
fetchAnimais('../../animais-api.json', '.numeros-grid');

initBitCoins();
initAnimacaoScroll();
