import error404 from './error404.hbs';
import './error404.css';
const root = document.querySelector('#app');
const error404ToRender = error404();
if (window.location.pathname ==='/error404') {root.innerHTML = error404ToRender};