import BaseComponent from './baseComponent.js';
import { createElement } from '../utilities.js';

export default class FooterComponent extends BaseComponent {
    constructor(copyrightYear, sourceCodeURL) {
        super();
        this.copyrightYear = copyrightYear;
        this.sourceCodeURL = sourceCodeURL;
    }

    render() {
        this.initializeRender('footer');

        const currYear = new Date().getFullYear();

        if (!this.copyrightYear) {
            this.copyrightYear = currYear;
        }

        this._element.appendChild(
            createElement(
                'p',
                {},
                createElement(
                    'small',
                    {},
                    createElement('a', {href: this.sourceCodeURL, target: '_blank'}, 'Source Code'),
                    ' © ',
                    createElement('time', { id: 'copyright-year' }, currYear > this.copyrightYear ? `${this.copyrightYear}-${currYear}` : this.copyrightYear),
                    ' Todd Brentlinger, Santa Cruz, CA, USA. All Rights Reserved.'
                )
            )
        );

        return this._element;
    }
}
