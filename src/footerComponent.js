import BaseComponent from './baseComponent';
import { createElement } from './utilities';

export default class FooterComponent extends BaseComponent {
    constructor(copyrightYear) {
        super();
        this.copyrightYear = copyrightYear;
    }

    render() {
        this._element = document.createElement('footer');
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
                    'Source Code © ',
                    createElement('time', { id: 'copyright-year' }, currYear > this.copyrightYear ? `${this.copyrightYear}-${currYear}` : this.copyrightYear),
                    ' Todd Brentlinger, Santa Cruz, CA, USA. All Rights Reserved.'
                )
            )
        );

        return this._element;
    }
}
