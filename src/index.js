import renderManager from './app/views/home';
import './main.scss';

const home = document.querySelector('#home');
const container = document.querySelector('.container');

home.addEventListener('click', () => {
  container.innerHTML = '';
  renderManager.renderHome();
}, false);
