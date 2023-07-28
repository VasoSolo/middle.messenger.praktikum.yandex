import error500 from './error500.hbs';
const root = document.querySelector('#app');
const error500ToRender = error500();
if (window.location.pathname ==='/error500') {root.innerHTML = error500ToRender}