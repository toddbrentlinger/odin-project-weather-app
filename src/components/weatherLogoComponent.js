import BaseComponent from "./baseComponent.js";
import { createElement } from "../utilities.js";

export default class WeatherLogoComponent extends BaseComponent {
    render() {
        this.initializeRender('section');

        this._element.id = 'weather-section';

        // Main
        if (this._props.main) {
            this._element.appendChild(
                createElement('span', {}, this_props.main)
            );
        }

        // Icon
        if (this._props.icon) {
            this._element.appendChild(
                createElement(
                    'img', {
                        src: `http://openweathermap.org/img/wn/${this._props.icon}@2x.png`,
                        alt: 'weather icon',
                        id: 'weather-icon'
                    })
            );
        }

        // Description
        if (this._props.description) {
            this._element.appendChild(
                createElement('span', {'class': 'capitalize'}, this._props.description)
            );
        }

        return this._element;
    }
}
