import { createElement } from "./utilities";
import ArrowRightSVG from "./img/arrow-right.svg";

function createWindDial() {
    // Wind direction and gust elements
    const _windDegElement = createElement('span', {id: 'wind-deg'});
    const _windGustElement = createElement('span', {id: 'wind-gust'});
    
    // Wind direction arrow image element
    const _arrowImageElement = new Image();
    _arrowImageElement.src = ArrowRightSVG;
    _arrowImageElement.alt = 'wind direction arrow';

    /**
     * Converts number as degrees of circle to cardinal direction.
     * @param {Number} degrees 
     * @returns {String} Cardinal direction of wind.
     */
    const convertDegreesToDirection = (degrees) => {
        const directionDegrees = {
            'NNE': 11.25,
            'NE': 33.75,
            'ENE': 56.25,
            'E': 78.75,
            'ESE': 101.25,
            'SE': 123.75,
            'SSE': 146.25,
            'S': 168.75,
            'SSW': 191.25,
            'SW': 213.75,
            'WSW': 236.25,
            'W': 258.75,
            'WNW': 281.25,
            'NW': 303.75,
            'NNW': 326.25,
            'N': 348.75,
        };

        // Clamp degrees parameter between 0-360, considering wrap-around
        // EX. -60 = (-60)+360 = 300
        // EX. 400 = 400-360 = 40
        while (degrees < 0 || degrees > 360) {
            if (degrees < 0) {
                degrees += 360;
            } else { // Else degrees > 360 (from while loop condition)
                degrees -= 360;
            }
        }

        // Find matching direction
        let prevDirection = 'N';
        for (const [direction, maxDegrees] of Object.entries(directionDegrees)) {
            if (degrees <= maxDegrees) {
                return prevDirection;
            }
            prevDirection = direction;
        }
        // If reach here, degrees is more than 348.75. Return 'N'.
        return 'N';
    };

    /**
     * 
     * @param {Object} windObj
     * @param {Number} windObj.speed
     * @param {Number} windObj.deg
     * @param {Number} windObj.gust 
     * @param {String} speedAbbreviation 
     */
    const update = (windObj, speedAbbreviation) => {
        // Set transform rotation angle of arrow image

        _arrowImageElement.style.transform = `rotate(${windObj.deg - 90}deg)`;

        // Wind speed/orientation

        _windDegElement.textContent = `${convertDegreesToDirection(windObj.deg)} ${windObj.speed} ${speedAbbreviation}`;

        // Wind gust

        if ('gust' in windObj) {
            _windGustElement.textContent = `(Gusts ${windObj.gust} ${speedAbbreviation})`;
            _windGustElement.classList.remove('hide');
        } else {
            _windGustElement.textContent = '';
            _windGustElement.classList.add('hide');
        }
    };

    /**
     * Creates and returns wind dial element.
     * @returns {HTMLElement}
     */
    const render = () => {
        const element = createElement('section', {id: 'wind-section'});

        element.append(
            createElement('h3', {}, 'Wind'),
            _windDegElement,
            _windGustElement,
            createElement('div', {'class': 'weather-card-img-container', id: 'wind-deg-img'}, 
                _arrowImageElement
            ),
        );

        return element;
    };

    return {
        render,
        update,
    };
}

export default createWindDial;
