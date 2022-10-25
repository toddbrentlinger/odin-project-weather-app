import BaseComponent from './baseComponent.js';
import { createElement } from '../utilities.js';

export default class WeatherPropertyComponent extends BaseComponent {
    constructor(label, id, postfix = '', defaultValue = '-') {
        super();
        this._label = label;
        this._id = id;
        this._postfix = postfix;

        this._defaultValue = defaultValue;
        this._value = defaultValue;
    }

    set postfix(newPostfix) {
        if (newPostfix === this._postfix) { return; }

        this._postfix = newPostfix;
        this.render();
    }

    get postfix() { return this._postfix; }

    set value(newValue) {
        if (newValue === this._value) { return; }

        this._value = newValue;
        this.render();
    }

    get value() { return this._value; }

    render() {
        this.initializeRender(document.createElement('section'));

        this._element.append(
            createElement('span', {}, `${this._label}: `),
            createElement('span', {id: this._id})
        );

        if (this._postfix) {
            this._element.appendChild(
                createElement('span', {}, this._postfix)
            );
        }

        return this._element;
    }
}
