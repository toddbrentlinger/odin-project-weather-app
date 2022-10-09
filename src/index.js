import './meyerReset.scss';
import './styles.scss';
import FooterComponent from './footerComponent';

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
                abbreviation: 'C',
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
                abbreviation: 'F',
            },
            speed: {
                name: 'miles per hour',
                abbreviation: 'mph',
            },
        },
    };

    let temperatureUnit = TemperatureUnits.imperial;

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
        debugger;
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

    function displayWeatherData(weatherData) {
        // Name
        setTextContentOnElement(document.getElementById('name'), weatherData.name);

        // Coords
        if ('coord' in weatherData) {
            setTextContentOnElement(document.getElementById('coord-lon'), weatherData.coord.lon);
            setTextContentOnElement(document.getElementById('coord-lat'), weatherData.coord.lat);
        }

        // Weather
        if ('weather' in weatherData) {
            setTextContentOnElement(document.getElementById('weather-id'), weatherData.weather[0].id);
            setTextContentOnElement(document.getElementById('weather-main'), weatherData.weather[0].main);
            setTextContentOnElement(document.getElementById('weather-description'), weatherData.weather[0].description);
            setTextContentOnElement(document.getElementById('weather-icon'), weatherData.weather[0].icon);
        }

        // Main
        if ('main' in weatherData) {
            setTextContentOnElement(document.getElementById('main-temp'), weatherData.main.temp);
            setTextContentOnElement(document.getElementById('main-feels-like'), weatherData.main.feels_like);
            setTextContentOnElement(document.getElementById('main-pressure'), weatherData.main.pressure);
            setTextContentOnElement(document.getElementById('main-humidity'), weatherData.main.humidity);
            setTextContentOnElement(document.getElementById('main-temp-min'), weatherData.main.temp_min);
            setTextContentOnElement(document.getElementById('main-temp-max'), weatherData.main.temp_max);
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
        setTextContentOnElement(document.getElementById('dt'), weatherData.dt);

        // Timezone
        setTextContentOnElement(document.getElementById('timezone'), weatherData.timezone);

        // Sys
        if ('sys' in weatherData) {
            setTextContentOnElement(document.getElementById('sys-type'), weatherData.sys.type);
            setTextContentOnElement(document.getElementById('sys-id'), weatherData.sys.id);
            setTextContentOnElement(document.getElementById('sys-message'), weatherData.sys.message);
            setTextContentOnElement(document.getElementById('sys-country'), weatherData.sys.country);
            setTextContentOnElement(document.getElementById('sys-sunrise'), weatherData.sys.sunrise);
            setTextContentOnElement(document.getElementById('sys-sunset'), weatherData.sys.sunset);
        }
    }
    
    function init() {
        // Search form submit handler
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
    
                const searchInput = e.target.querySelector('[name="search"]');
                if (searchInput) {
                    fetch(createFetchURL(searchInput.value), {mode: 'cors',})
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                            displayWeatherData(data);
                        });
                }
            }, false);
        }
    
        // Footer Component
        mainElement.appendChild(
            new FooterComponent(2022).render()
        );
    }

    return {
        init,
    };
})();

weatherApp.init();
