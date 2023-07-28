import chatList from './chatList.hbs';
import './chatList.css';
const root = document.querySelector('#app');
const chatListToRender = chatList();
if (window.location.pathname ==='/chatList') {root.innerHTML = chatListToRender};
