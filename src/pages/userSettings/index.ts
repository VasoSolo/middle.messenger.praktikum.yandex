import registration from './userSettings.hbs';
import './userSettings.css';
const root = document.querySelector('#app');
const userSettingsToRender = registration({regixtrationLabel: "Настройка пользователя", });
if (window.location.pathname ==='/userSettings') {root.innerHTML = userSettingsToRender}