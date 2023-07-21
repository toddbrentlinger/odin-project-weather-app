import BaseComponent from "./baseComponent";
import { capitalize, createElement } from "../utilities";

class TopNavComponent extends BaseComponent {
    handleSubmit(e) {
        this.props.handleSubmit(e);
    }
    
    render() {
        this.initializeRender('nav');

        this.element.id = 'topnav';

        const searchInput = createElement('input', {
            type: 'search',
            name: 'search',
            id: 'weather-search',
            placeholder: 'Enter location',
            'aria-label': 'Enter location',
            autofocus: true,
            required: true,
        });

        const selectOptions = Object.entries(this.props.temperatureUnits)
            .map(([key, obj]) => {
                let str = `${capitalize(key)} (`;
                // if (value.key) {
                //     str += '&deg;';
                // }
                str += `${obj.temperature.abbreviation}, ${obj.speed.abbreviation})`; 
                
                const optionElement = createElement('option', {value: key}, str);

                if (key === 'imperial') {
                    optionElement.selected = true;
                }

                return optionElement;
            });

        const unitsSelect = createElement('select', {
            name: 'units',
            id: 'weather-units-select',
            'aria-label': 'Select units',
            required: true,
        }, ...selectOptions);

        const form = createElement('form', {
            id: 'weather-search-form',
            accept: '',
            method: 'get',
        });

        form.addEventListener('submit', this.handleSubmit.bind(this), false);

        form.append(
            createElement('div', {id: 'weather-search-form-inputs'}, 
                createElement('label', {'for': 'weather-search'}, 
                    searchInput
                ),
                createElement('label', {'for': 'weather-units-select'}, 
                    unitsSelect
                )
            ),
            createElement('input', {type: 'submit'})
        );

        this.element.appendChild(form);

        return this.element;
    }
}

export default TopNavComponent;
