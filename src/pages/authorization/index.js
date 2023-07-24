import authorization from './authorization.hbs';
import './authorization.css';
const root = document.querySelector('#app');
const authorizationToRender = authorization({authorizationLabel: "Авторизация", });
if (window.location.pathname === '/' || window.location.pathname ==='/authorization') {root.innerHTML = authorizationToRender};