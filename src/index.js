import './styles/meyerReset.scss';
import './styles/styles.scss';
import weatherApp from './weatherApp.js';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';
import '@fortawesome/fontawesome-free/js/solid.min.js';

weatherApp.render(document.body);
weatherApp.init();
window.weatherApp = weatherApp;
