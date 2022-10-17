import './meyerReset.scss';
import './styles.scss';
import FooterComponent from './footerComponent';
import { createElement } from './utilities';
import WeatherPropertyComponent from './weatherPropertyComponent';

const weatherApp = (() => {
    const openWeatherMapKey = '4e7cceafee56ebb58f598a6cdad1a909';
    const mainElement = document.querySelector('main');
    const searchForm = document.querySelector('#topnav form');
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
        return new Date(unixTimestamp * 1000).toLocaleTimeString();
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

            // Icon
            const iconId = weatherData.weather[0].icon;
            const weatherIconElement = document.getElementById('weather-icon');
            if (iconId && weatherIconElement) {
                weatherIconElement.src = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
            }
        }

        // Main
        if ('main' in weatherData) {
            // Main Temperature
            setTextContentOnElement(
                document.getElementById('main-temp'),
                weatherData.main.temp,
                temperatureUnit.temperature.abbreviation
            );

            // Feels Like Temperature
            setTextContentOnElement(
                document.getElementById('main-feels-like'),
                weatherData.main.feels_like,
                temperatureUnit.temperature.abbreviation
            );

            // Low Temperature
            setTextContentOnElement(
                document.getElementById('main-temp-min'),
                weatherData.main.temp_min,
                temperatureUnit.temperature.abbreviation
            );

            // High Temperature
            setTextContentOnElement(
                document.getElementById('main-temp-max'),
                weatherData.main.temp_max,
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
                weatherData.wind.deg,
                'deg'
            );
            setTextContentOnElement(
                document.getElementById('wind-gust'), 
                weatherData.wind.gust,
                temperatureUnit.speed.abbreviation
            );
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
        let datetime = new Date(weatherData.dt * 1000);
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        setTextContentOnElement(
            document.getElementById('dt'), 
            datetime.toLocaleString('en-us', options)
        );

        // Timezone
        datetime = new Date((weatherData.dt + weatherData.timezone)* 1000);
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
                console.log(position);

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
