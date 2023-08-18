import BaseComponent from "./baseComponent";
import openWeatherMapAPI from "../openWeatherMapAPI";
import { capitalize, createElement } from "../utilities";

class TopNavComponent extends BaseComponent {
    constructor(props) {
        super(props);
        this.controller;
        this.isFetching = false;
        this.geolocationListElement;
    }

    async handleChange(e) {
        // If currently fetching data, abort
        if (this.isFetching) {
            this.controller.abort();
            this.isFetching = false;
        }

        // Return if search field is blank
        if (!e.target.value) { 
            this.emptyGeolocationListElement();
            return; 
        }

        try {
            this.controller = new AbortController();
            this.isFetching = true;
            await openWeatherMapAPI.fetchGeolocationWithSearch(e.target.value, {signal: this.controller.signal})
                .then((data) => {
                    this.updateGeolocationListElement(data);
                    this.isFetching = false;
                });
        } catch(e) {
            this.isFetching = false;
            this.emptyGeolocationListElement();
        }
    }

    handleSubmit(e) {
        this.props.handleSubmit(e);
        this.emptyGeolocationListElement();
    }

    createGeolocationOptionListElement(geolocationOptionData) {
        const listElement = createElement('li', {}, 
            `${geolocationOptionData.name}, ${geolocationOptionData.country}`,
        );

        listElement.addEventListener('click', () => {
            this.props.handleGeolocationSelect(geolocationOptionData.lat, geolocationOptionData.lon);
        });

        return listElement;
    }

    emptyGeolocationListElement() {
        while (this.geolocationListElement.firstChild) {
            this.geolocationListElement.removeChild(this.geolocationListElement.firstChild);
        }
    }

    updateGeolocationListElement(geolocationOptionArr) {
        this.emptyGeolocationListElement();

        // Create list elements and append to unordered list
        this.geolocationListElement.append(
            ...geolocationOptionArr.map((geolocationOption) => this.createGeolocationOptionListElement(geolocationOption))
        );
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
        
        searchInput.addEventListener('input', this.handleChange.bind(this));

        const selectOptions = Object.entries(this.props.temperatureUnits)
            .map(([key, obj]) => {
                let str = `${capitalize(key)} (`;
                
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

        // Geolocation list element
        this.geolocationListElement = createElement('ul', {id: 'geolocation-options-list'});
        this.element.appendChild(
            createElement('div', {id: 'geolocation-options-list-container'}, 
                this.geolocationListElement
            )
        );

        return this.element;
    }
}

export default TopNavComponent;
