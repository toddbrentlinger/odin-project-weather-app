import { convertUnit } from "../unitConverter";
import { capitalize, createElement } from "../utilities";

function createRainSnowComponent(key) {
    const _containerElement = createElement('section', {id: `${key}-section`});
    const _oneHourElement = createElement('span', {id: `${key}-1h`});
    const _threeHourElement = createElement('span', {id: `${key}-3h`});

    const update = (dataObj, unitType) => {
        // Hide container if no data
        if (dataObj === undefined) {
            _containerElement.classList.add('hide');
            dataObj = {};
        } else {
            _containerElement.classList.remove('hide');
        }

        let str;
        // 1H
        if ('1h' in dataObj) {
            // Value
            str = unitType == 'imperial' ? convertUnit(dataObj['1h'], 'mm', 'in').toFixed(2) : dataObj['1h'];
            // Units
            str += unitType == 'imperial' ? 'in' : 'mm';
            _oneHourElement.textContent = str;
            _oneHourElement.parentElement.classList.remove('hide');
        } else {
            _oneHourElement.textContent = '-';
            _oneHourElement.parentElement.classList.add('hide');
        }

        // 3H
        if ('3h' in dataObj) {
            // Value
            str = unitType == 'imperial' ? convertUnit(dataObj['3h'], 'mm', 'in').toFixed(2) : dataObj['3h'];
            // Units
            str += unitType == 'imperial' ? 'in' : 'mm';
            _threeHourElement.textContent = str;
            _threeHourElement.parentElement.classList.remove('hide');
        } else {
            _threeHourElement.textContent = '-';
            _threeHourElement.parentElement.classList.add('hide');
        }
    };

    const render = () => {
        const keyCapitalized = capitalize(key);

        _containerElement.append(
            createElement('h2', {}, keyCapitalized),
            createElement('div', {}, 
                createElement('span', {}, `${keyCapitalized} 1H: `),
                _oneHourElement
            ),
            createElement('div', {}, 
                createElement('span', {}, `${keyCapitalized} 3H: `),
                _threeHourElement
            ),
        );

        return _containerElement;
    };

    return {
        update,
        render,
    };
}

export default createRainSnowComponent;
