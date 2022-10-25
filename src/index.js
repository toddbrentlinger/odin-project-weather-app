import './styles/meyerReset.scss';
import './styles/styles.scss';
import FooterComponent from './components/footerComponent';
import { createElement } from './utilities';
import WeatherPropertyComponent from './components/weatherPropertyComponent';
import ArrowRightSVG from './img/arrow-right.svg';

const weatherApp = (() => {
    const openWeatherMapKey = '4e7cceafee56ebb58f598a6cdad1a909';
    const mainElement = document.querySelector('main');
    const searchForm = document.querySelector('#topnav form');
    const arrowRightImageElement = document.getElementById('wind-deg-img');
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

    let temperatureUnit = TemperatureUnits.imperial;
    
    let weatherPropertyComponents = {
        name: new WeatherPropertyComponent(null, 'name'),
        'coord-lon': new WeatherPropertyComponent('Long', 'coord-lon'),
        'coord-lat': new WeatherPropertyComponent('Lat', 'coord-lat'),
        'weather-id': new WeatherPropertyComponent('ID', 'weather-id'),
        'weather-main': new WeatherPropertyComponent('Main', 'weather-main'),
        'weather-description': new WeatherPropertyComponent('Description', 'weather-description'),
        'weather-icon': new WeatherPropertyComponent('Icon', 'weather-icon'),
        // TODO: Add remaining
    };

    /**
     * 
     * @param {String} key 
     * @param {WeatherPropertyComponent} newWeatherPropertyComponent 
     */
    function addWeatherPropertyComponent(key, newWeatherPropertyComponent) {
        // Check argument types

        // Check if key already exists
        // ISSUE: Could use to replace existing key with new component

        // Add to weatherPropertyComponents object
        weatherPropertyComponents[key] = newWeatherPropertyComponent;

        return newWeatherPropertyComponent;
    }

    function createWeatherUnitsSelect() {
        const formSelectId = 'weather-units-select';
        const labelElement = createElement(
            'label', 
            {'for': formSelectId},
            createElement('span', {}, 'Units: ')
        );

        const selectElement = labelElement.appendChild(
            createElement('select', {name: 'units', id: formSelectId, required: true})
        );

        selectElement.append(
            Object.entries(TemperatureUnits).map((key, tempObj) => {
                createElement(
                    'input', 
                    {value: key}, 
                    `${tempObj.key.toUpperCase()} (${tempObj.temperature.abbreviation}, ${tempObj.speed.abbreviation})`
                )
            })
        );

        return labelElement;
    }

    function setTemperatureUnit(newTemperatureUnit) {
        // Check if valid temperature unit
        const bIsValid = Object.values(TemperatureUnits).some(
            item => item === newTemperatureUnit
        );
        // Check if the same temperature unit
        if (!bIsValid || temperatureUnit === newTemperatureUnit) {
            return;
        }

        temperatureUnit = newTemperatureUnit;
    }

    /**
     * 
     * @param {String} searchInputValue 
     * @returns {String}
     */
    function createFetchURL(searchInputValue) {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&APPID=${openWeatherMapKey}`;

        if (temperatureUnit.key) {
            url += `&units=${temperatureUnit.key}`;
        }

        return url;
    }

    /**
     * 
     * @param {GeolocationPosition} geolocationPositon 
     * @returns {String}
     */
    function createFetchURLWithGeolocationPosition(geolocationPositon) {
        let url = `http://api.openweathermap.org/data/2.5/weather?`;

        // Lat
        url += `&lat=${geolocationPositon.coords.latitude}`;

        // Lon
        url += `&lon=${geolocationPositon.coords.longitude}`;

        // App ID
        url += `&APPID=${openWeatherMapKey}`;

        // Units
        if (temperatureUnit.key) {
            url += `&units=${temperatureUnit.key}`;
        }

        return url;
    }

    function setTextContentOnElement(element, value, postfix) {
        if (element) {
            if (value === undefined) {
                element.textContent = '-';
            } else { // Else value !== undefined
                let textContent = value;
                if (postfix) {
                    textContent += ` ${postfix}`;
                }
                element.textContent = textContent;
            }
           
        }
    }

    function convertUnixTimestampToDate(unixTimestamp) {
        return new Date(unixTimestamp * 1000)
            .toLocaleTimeString('en-us', {
                hour: 'numeric',
                minute: 'numeric',
            });
    }

    /**
     * Converts number as degrees of circle to cardinal direction.
     * @param {Number} degrees 
     * @returns {String} Cardinal direction of wind.
     */
    function convertDegreesToDirection(degrees) {
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

        // Clamp degrees parameter between 0-360

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
    }

    function displayWeatherData(weatherData) {
        // Name
        let cityName = weatherData.name;
        if ('sys' in weatherData && 'country' in weatherData.sys) {
            cityName += `, ${weatherData.sys.country}`;
        }
        setTextContentOnElement(document.getElementById('name'), cityName);

        // Coords
        if ('coord' in weatherData) {
            setTextContentOnElement(document.getElementById('coord-lon'), weatherData.coord.lon);
            setTextContentOnElement(document.getElementById('coord-lat'), weatherData.coord.lat);
        }

        // Weather
        if ('weather' in weatherData && weatherData.weather.length) {
            setTextContentOnElement(document.getElementById('weather-id'), weatherData.weather[0].id);
            setTextContentOnElement(document.getElementById('weather-main'), weatherData.weather[0].main);
            setTextContentOnElement(document.getElementById('weather-description'), weatherData.weather[0].description);
        }

        // Weather Icon
        const weatherIconElement = document.getElementById('weather-icon');
        try {
            const iconId = weatherData.weather[0].icon;
            weatherIconElement.src = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
            weatherIconElement.classList.remove('hide');
        } catch (e) {
            if (weatherIconElement) {
                weatherIconElement.classList.add('hide');
            }
        }

        // Main
        if ('main' in weatherData) {
            // Main Temperature
            setTextContentOnElement(
                document.getElementById('main-temp'),
                Math.round(weatherData.main.temp),
                temperatureUnit.temperature.abbreviation
            );

            // Feels Like Temperature
            setTextContentOnElement(
                document.getElementById('main-feels-like'),
                Math.round(weatherData.main.feels_like),
                temperatureUnit.temperature.abbreviation
            );

            // Low Temperature
            setTextContentOnElement(
                document.getElementById('main-temp-min'),
                Math.round(weatherData.main.temp_min),
                temperatureUnit.temperature.abbreviation
            );

            // High Temperature
            setTextContentOnElement(
                document.getElementById('main-temp-max'),
                Math.round(weatherData.main.temp_max),
                temperatureUnit.temperature.abbreviation
            );

            setTextContentOnElement(
                document.getElementById('main-pressure'),
                weatherData.main.pressure,
                'hPa'
            );

            setTextContentOnElement(
                document.getElementById('main-humidity'),
                weatherData.main.humidity,
                '%'
            );

            setTextContentOnElement(
                document.getElementById('main-sea-level'), 
                weatherData.main.sea_level,
                'hPa'
            );

            setTextContentOnElement(
                document.getElementById('main-grnd-level'),
                weatherData.main.grnd_level,
                'hPa'
            );
        }

        // Visibility
        setTextContentOnElement(
            document.getElementById('visibility'),
            weatherData.visibility,
            'm'
        );

        // Wind
        if ('wind' in weatherData) {
            setTextContentOnElement(
                document.getElementById('wind-speed'),
                weatherData.wind.speed,
                temperatureUnit.speed.abbreviation
            );
            setTextContentOnElement(
                document.getElementById('wind-deg'),
                convertDegreesToDirection(weatherData.wind.deg)
            );
            setTextContentOnElement(
                document.getElementById('wind-gust'), 
                weatherData.wind.gust,
                temperatureUnit.speed.abbreviation
            );
        }

        // Orientation of wind direction arrow icon
        try {
            const arrowImg = arrowRightImageElement.querySelector('img');
            arrowImg.style.transform = `rotate(${weatherData.wind.deg - 90}deg)`;
            arrowRightImageElement.classList.remove('hide');
        } catch (e) {
            if (arrowRightImageElement) {
                arrowRightImageElement.classList.add('hide');
            }
        }

        // Clouds
        if ('clouds' in weatherData) {
            setTextContentOnElement(
                document.getElementById('clouds'),
                weatherData.clouds.all,
                '%'
            );
        }

        // Rain
        if ('rain' in weatherData) {
            setTextContentOnElement(
                document.getElementById('rain-1h'),
                weatherData.rain['1h'],
                'mm'
            );
            setTextContentOnElement(
                document.getElementById('rain-3h'),
                weatherData.rain['3h'],
                'mm'
            );
        }

        // Snow
        if ('snow' in weatherData) {
            setTextContentOnElement(
                document.getElementById('snow-1h'),
                weatherData.snow['1h'],
                'mm'
            );
            setTextContentOnElement(
                document.getElementById('snow-3h'),
                weatherData.snow['3h'],
                'mm'
            );
        }

        // Datetime
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
            document.getElementById('dt'), 
            datetimeLocal.toLocaleString('en-us', options)
        );

        // Timezone
        // dt and timezone are in seconds. Must be multiplied by 1000 to get milliseconds.
        // Method getTimezoneOffset() returns minutes. Must be multiplied by 60,000 to get milliseconds.
        const datetime = new Date((weatherData.dt + weatherData.timezone + datetimeLocal.getTimezoneOffset()*60)* 1000);
        setTextContentOnElement(
            document.getElementById('timezone'), 
            datetime.toLocaleString('en-us', options)
        );

        // Sys
        if ('sys' in weatherData) {
            setTextContentOnElement(document.getElementById('sys-type'), weatherData.sys.type);
            setTextContentOnElement(document.getElementById('sys-id'), weatherData.sys.id);
            setTextContentOnElement(document.getElementById('sys-message'), weatherData.sys.message);

            setTextContentOnElement(
                document.getElementById('sys-sunrise'), 
                convertUnixTimestampToDate(weatherData.sys.sunrise)
            );
            setTextContentOnElement(
                document.getElementById('sys-sunset'), 
                convertUnixTimestampToDate(weatherData.sys.sunset)
            );
        }
    }
    
    function init() {
        // Use Geolocation API to get User's current position if available
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const unitsSelect = searchForm.querySelector('[name="units"]');

                if (unitsSelect) {
                    setTemperatureUnit(TemperatureUnits[unitsSelect.value]);
                }

                fetch(createFetchURLWithGeolocationPosition(position), {mode: 'cors',})
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        // Display weather data if response is valid
                        if ('cod' in data && data.cod === 200) {
                            displayWeatherData(data);
                        } else {
                            // Response not valid
                        }
                    });
            });
        }

        // Search form submit handler
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
    
                const searchInput = searchForm.querySelector('[name="search"]');
                const unitsSelect = searchForm.querySelector('[name="units"]');

                if (unitsSelect) {
                    setTemperatureUnit(TemperatureUnits[unitsSelect.value]);
                }

                if (searchInput) {
                    fetch(createFetchURL(searchInput.value), {mode: 'cors',})
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                            // Display weather data if response is valid
                            if ('cod' in data && data.cod === 200) {
                                displayWeatherData(data);
                            } else {
                                // Response not valid
                            }
                        });
                }
            }, false);
        }

        // Image - Wind Direction Arrow
        if (arrowRightImageElement) {
            const arrowRightImage = new Image();
            arrowRightImage.src = ArrowRightSVG;
            arrowRightImage.alt = 'wind direction arrow';
            arrowRightImageElement.appendChild(arrowRightImage);
        }
    
        // Footer Component
        mainElement.appendChild(
            new FooterComponent(2022, 'https://github.com/toddbrentlinger/odin-project-weather-app')
                .render()
        );
    }

    return {
        init,
    };
})();

weatherApp.init();
