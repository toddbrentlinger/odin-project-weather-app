import './meyerReset.scss';
import './styles.scss';
import FooterComponent from './footerComponent';
import { createElement } from './utilities';

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

    function createFetchURL(searchInputValue) {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&APPID=${openWeatherMapKey}`;

        if (temperatureUnit.key) {
            url += `&units=${temperatureUnit.key}`;
        }

        return url;
    }

    function setTextContentOnElement(element, textContent) {
        if (element) {
            element.textContent = textContent;
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
                `${weatherData.main.temp} ${temperatureUnit.temperature.abbreviation}`
            );

            // Feels Like Temperature
            setTextContentOnElement(
                document.getElementById('main-feels-like'),
                `${weatherData.main.feels_like} ${temperatureUnit.temperature.abbreviation}`
            );

            // Low Temperature
            setTextContentOnElement(
                document.getElementById('main-temp-min'),
                `${weatherData.main.temp_min} ${temperatureUnit.temperature.abbreviation}`
            );

            // High Temperature
            setTextContentOnElement(
                document.getElementById('main-temp-max'),
                `${weatherData.main.temp_max} ${temperatureUnit.temperature.abbreviation}` 
            );

            setTextContentOnElement(document.getElementById('main-pressure'), weatherData.main.pressure);
            setTextContentOnElement(document.getElementById('main-humidity'), weatherData.main.humidity);

            setTextContentOnElement(document.getElementById('main-sea-level'), weatherData.main.sea_level);
            setTextContentOnElement(document.getElementById('main-grnd-level'), weatherData.main.grnd_level);
        }

        // Visibility
        setTextContentOnElement(document.getElementById('visibility'), weatherData.visibility);

        // Wind
        if ('wind' in weatherData) {
            setTextContentOnElement(document.getElementById('wind-speed'), weatherData.wind.speed);
            setTextContentOnElement(document.getElementById('wind-deg'), weatherData.wind.deg);
            setTextContentOnElement(document.getElementById('wind-gust'), weatherData.wind.gust);
        }

        // Clouds
        if ('clouds' in weatherData) {
            setTextContentOnElement(document.getElementById('clouds'), weatherData.clouds.all);
        }

        // Rain
        if ('rain' in weatherData) {
            setTextContentOnElement(document.getElementById('rain-1h'), weatherData.rain['1h']);
            setTextContentOnElement(document.getElementById('rain-3h'), weatherData.rain['3h']);
        }

        // Snow
        if ('snow' in weatherData) {
            setTextContentOnElement(document.getElementById('snow-1h'), weatherData.snow['1h']);
            setTextContentOnElement(document.getElementById('snow-3h'), weatherData.snow['3h']);
        }

        // Datetime
        setTextContentOnElement(document.getElementById('dt'), convertUnixTimestampToDate(weatherData.dt));

        // Timezone
        setTextContentOnElement(document.getElementById('timezone'), weatherData.timezone);

        // Sys
        if ('sys' in weatherData) {
            setTextContentOnElement(document.getElementById('sys-type'), weatherData.sys.type);
            setTextContentOnElement(document.getElementById('sys-id'), weatherData.sys.id);
            setTextContentOnElement(document.getElementById('sys-message'), weatherData.sys.message);

            setTextContentOnElement(document.getElementById('sys-sunrise'), convertUnixTimestampToDate(weatherData.sys.sunrise));
            setTextContentOnElement(document.getElementById('sys-sunset'), convertUnixTimestampToDate(weatherData.sys.sunset));
        }
    }
    
    function init() {
        // Search form submit handler
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
    
                const searchInput = e.target.querySelector('[name="search"]');
                const unitsSelect = e.target.querySelector('[name="units"]');

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
