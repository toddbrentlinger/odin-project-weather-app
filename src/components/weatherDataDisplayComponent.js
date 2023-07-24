import { capitalize, createElement, getDateWithTimezoneOffet } from "../utilities";
import { convertUnit } from "../unitConverter";
import createDayNightDial from "../dayNightDial";
import createWindDial from "../windDial";
import createRainSnowComponent from "./rainSnowComponent";

const weatherDataDisplayComponent = (() => {
    const TemperatureUnits = {
        standard: {
            key: null,
            temperature: {
                name: 'Kelvin',
                abbreviation: 'K',
            },
            speed: {
                name: 'meters per second',
                abbreviation: 'm/s',
            },
        },
        metric: {
            key: 'metric',
            temperature: {
                name: 'Celsius',
                abbreviation: '\xB0C',
            },
            speed: {
                name: 'meters per second',
                abbreviation: 'm/s',
            },
        },
        imperial: {
            key: 'imperial',
            temperature: {
                name: 'Fahrenheit',
                abbreviation: '\xB0F',
            },
            speed: {
                name: 'miles per hour',
                abbreviation: 'mph',
            },
        },
    };

    const name = createElement('h2', {id: 'name'});
    const timezone = createElement('span', {id: 'timezone'});
    const iconImg = createElement('img', {
        src: 'http://openweathermap.org/img/wn/02d@2x.png',
        alt: 'weather icon',
        id: 'weather-icon',
        width: 100,
        height: 100,
    });
    const mainTemp = createElement('span', {id: 'main-temp'});
    const mainTempMin = createElement('span', {id: 'main-temp-min'});
    const mainTempMax = createElement('span', {id: 'main-temp-max'});
    const description = createElement('div', {id: 'weather-description'});
    const pressure = createElement('span', {id: 'main-pressure'});
    const humidity = createElement('span', {id: 'main-humidity'});
    const seaLevelPressure = createElement('span', {id: 'main-sea-level'});
    const groundLevelPressure = createElement('span', {id: 'main-grnd-level'});
    const visibility = createElement('span', {id: 'visibility'});
    const clouds = createElement('span', {id: 'clouds'});
    const dt = createElement('span', {id: 'dt'});

    const rainSection = createRainSnowComponent('rain');
    const snowSection = createRainSnowComponent('snow');

    const dayNightDial = createDayNightDial();
    const windDial = createWindDial();

    let temperatureUnit = TemperatureUnits.imperial;

    function setTemperatureUnit(newTemperatureUnitKey) {
        // Check if valid temperature unit
        const bIsValid = Object.keys(TemperatureUnits).some(
            (key) => key === newTemperatureUnitKey
        );

        if (!bIsValid) { return; }

        const newTemperatureUnit = TemperatureUnits[newTemperatureUnitKey];

        // Check if the same temperature unit
        if (temperatureUnit === newTemperatureUnit) {
            return;
        }

        // Assign new valid temperature unit
        temperatureUnit = newTemperatureUnit;
    }

    function setTextContentOnElement(element, value, postfix) {
        if (!element) {
            return;
        }

        if (value === undefined) {
            element.textContent = '-';
        } else { // Else value !== undefined
            let textContent = value;
            if (postfix) {
                textContent += `${postfix}`;
            }
            element.textContent = textContent;
        }
    }

    /**
     * Get description of wind speed according to https://www.weather.gov/pqr/wind
     * @param {Number} windSpeed 
     * @returns {String}
     */
    function getWindSpeedDescription(windSpeed) {
        // Convert to imperial mph if in metric/kelvin m/s
        if (temperatureUnit.key !== 'imperial') {
            windSpeed *= 2.23694;
        }

        if (windSpeed < 1) { return 'calm'; }
        else if (windSpeed < 4) { return 'light air'; }
        else if (windSpeed < 8) { return 'light breeze'; }
        else if (windSpeed < 13) { return 'gentle breeze'; }
        else if (windSpeed < 19) { return 'moderate breeze'; }
        else if (windSpeed < 25) { return 'fresh breeze'; }
        else if (windSpeed < 32) { return 'strong breeze'; }
        else if (windSpeed < 39) { return 'near gale'; }
        else if (windSpeed < 47) { return 'gale'; }
        else if (windSpeed < 55) { return 'strong gale'; }
        else if (windSpeed < 64) { return 'whole gale'; }
        else if (windSpeed < 76) { return 'storm force'; }
        else { return 'hurricane force'; }
    }

    function createWeatherConditionDescription(weatherData) {
        let strArr = [];
        let strTemp;

        // Feels like
        if ('main' in weatherData) {
            strArr.push(
                `Feels like ${Math.round(weatherData.main.feels_like) + temperatureUnit.temperature.abbreviation}.`
            );
        }

        // Description
        if ('weather' in weatherData && weatherData.weather.length) {
            // Capitialize first letter of description
            strTemp = capitalize(weatherData.weather[0].description + '.');
            strArr.push(strTemp);
        }

        // Wind
        if ('wind' in weatherData && 'speed' in weatherData.wind) {
            strTemp = capitalize(getWindSpeedDescription(weatherData.wind.speed)) + ' wind.';
            strArr.push(strTemp);
        }

        return strArr.join(' ');
    }

    function update(weatherData) {
        // Name

        let cityName = weatherData.name;
        if ('sys' in weatherData && 'country' in weatherData.sys) {
            cityName += `, ${weatherData.sys.country}`;
        }
        setTextContentOnElement(name, cityName);

        // Weather icon image

        try {
            const iconId = weatherData.weather[0].icon;
            iconImg.src = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
            iconImg.classList.remove('hide');
        } catch (e) {
            iconImg.classList.add('hide');
        }

        // Main temp, min temp, and max temp

        setTextContentOnElement(
            mainTemp,
            Math.round(weatherData.main.temp),
            temperatureUnit.temperature.abbreviation
        );
        setTextContentOnElement(
            mainTempMin,
            Math.round(weatherData.main.temp_min),
            temperatureUnit.temperature.abbreviation
        );
        setTextContentOnElement(
            mainTempMax,
            Math.round(weatherData.main.temp_max),
            temperatureUnit.temperature.abbreviation
        );

        // Details

        setTextContentOnElement(
            description, 
            createWeatherConditionDescription(weatherData)
        );
        setTextContentOnElement(
            pressure,
            weatherData.main.pressure,
            'hPa'
        );
        setTextContentOnElement(
            humidity,
            weatherData.main.humidity,
            '%'
        )
        setTextContentOnElement(
            seaLevelPressure, 
            weatherData.main.sea_level,
            'hPa'
        );
        setTextContentOnElement(
            groundLevelPressure,
            weatherData.main.grnd_level,
            'hPa'
        );
        setTextContentOnElement(
            visibility,
            temperatureUnit.key == 'imperial' ? convertUnit(weatherData.visibility, 'm', 'miles').toFixed(2) : weatherData.visibility,
            temperatureUnit.key == 'imperial' ? 'miles' : 'm'
        );
        setTextContentOnElement(
            clouds,
            weatherData.clouds.all,
            '%'
        );

        // Datetime - Last updated

        // dt is in seconds. Must be multiplied by 1000 to get milliseconds.
        const datetimeLocal = new Date(weatherData.dt * 1000);
        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        setTextContentOnElement(
            dt, 
            datetimeLocal.toLocaleString('en-us', options)
        );

        // Timezone

        // dt and timezone are in seconds. Must be multiplied by 1000 to get milliseconds.
        // Method getTimezoneOffset() returns minutes. Must be multiplied by 60,000 to get milliseconds.
        //const datetime = new Date((weatherData.dt + weatherData.timezone + datetimeLocal.getTimezoneOffset()*60) * 1000);
        const datetime = getDateWithTimezoneOffet(weatherData.dt, weatherData.timezone, datetimeLocal.getTimezoneOffset());
        setTextContentOnElement(
            timezone, 
            datetime.toLocaleString('en-us', options)
        );

        // Sunrise/Sunset

        dayNightDial.update(weatherData.dt, weatherData.sys.sunrise, weatherData.sys.sunset, weatherData.timezone, datetimeLocal.getTimezoneOffset());

        // Wind

        windDial.update(weatherData.wind, temperatureUnit.speed.abbreviation);

        // Rain
        rainSection.update(weatherData.rain || undefined, temperatureUnit.key);

        // Snow
        snowSection.update(weatherData.snow || undefined, temperatureUnit.key);
    }

    function render() {
        const element = createElement('article', {id: 'current-weather'});

        // Main temperature Section

        const weatherMainSection = createElement('section', {id: 'weather-main'}, 
            createElement('div', {'class': 'weather-card-img-container'}, 
                iconImg
            ),
            createElement('div', {id: 'temp-container'}, 
                mainTemp,
                createElement('div', {id: 'hi-low-temp-container'}, 
                    createElement('div', {title: 'Low Temperature'}, 
                        createElement('span', {}, 'Min: '),
                        mainTempMin
                    ),
                    createElement('div', {title: 'High Temperature'}, 
                        createElement('span', {}, 'Max: '),
                        mainTempMax
                    ),
                )
            )
        );

        // Weather details

        const weatherDetailSection = createElement('section', {id: 'weather-detail'}, 
            description,
            createElement('div', {}, 
                createElement('span', {}, 'Pressure: '),
                pressure
            ),
            createElement('div', {}, 
                createElement('span', {}, 'Humidity: '),
                humidity
            ),
            createElement('div', {}, 
                createElement('span', {}, 'Atmospheric pressure on the sea level: '),
                seaLevelPressure
            ),
            createElement('div', {}, 
                createElement('span', {}, 'Atmospheric pressure on the ground level: '),
                groundLevelPressure
            ),
            createElement('div', {}, 
                createElement('span', {}, 'Visibility: '),
                visibility
            ),
            createElement('div', {}, 
                createElement('span', {}, 'Clouds: '),
                clouds
            ),
        );

        // Last Updated

        const lastUpdatedSection = createElement('section', {id: 'last-updated'}, 
            createElement('span', {}, 'Last Updated: '),
            dt
        );

        element.append(
            name,
            timezone,
            createElement('hr'),
            weatherMainSection,
            weatherDetailSection, 
            dayNightDial.render(), 
            windDial.render(),
            rainSection.render(),
            snowSection.render(),
            createElement('hr'),
            lastUpdatedSection,
        );

        return element;
    }

    return {
        update,
        render,
        get temperatureUnit() { return temperatureUnit; },
        setTemperatureUnit,
        getAllTemperatureUnits: () => TemperatureUnits,
    };
})();

export default weatherDataDisplayComponent;
