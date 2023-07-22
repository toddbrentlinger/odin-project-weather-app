import './styles/meyerReset.scss';
import './styles/styles.scss';
import weatherApp from './weatherApp.js';

weatherApp.render(document.body);
weatherApp.init();
window.weatherApp = weatherApp;
