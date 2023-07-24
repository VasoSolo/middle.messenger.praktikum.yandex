import registration from './registration.hbs';
import './registration.css';
const root = document.querySelector('#app');
const registrationToRender = registration({registrationLabel: "Регистрация", });
if (window.location.pathname ==='/registration') {root.innerHTML = registrationToRender};