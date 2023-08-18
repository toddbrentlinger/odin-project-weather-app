import HeaderComponent from './components/headerComponent';
import TopNavComponent from './components/topNavComponent';
import FooterComponent from './components/footerComponent';
import weatherDataDisplayComponent from './components/weatherDataDisplayComponent';
import openWeatherMapAPI from './openWeatherMapAPI';
import { createElement, getDateWithTimezoneOffet } from './utilities';

const weatherApp = (() => {
    function init() {
        // Use Geolocation API to get User's current position if available
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                openWeatherMapAPI.fetchCurrentWithGeolocation(position.coords.latitude, position.coords.longitude, weatherDataDisplayComponent.temperatureUnit.key)
                    .then((data) => {
                        console.log(data);
                        // Display weather data if response is valid
                        if ('cod' in data && data.cod === 200) {
                            weatherDataDisplayComponent.update(data);
                        } else {
                            // Response not valid
                        }
                    });
            });
        }
    }

    function handleSearchFormSubmit(e) {
        e.preventDefault();

        weatherDataDisplayComponent.setTemperatureUnit(e.target.elements.units.value);

        // Current Weather
        openWeatherMapAPI.fetchCurrentWithSearch(e.target.elements.search.value, weatherDataDisplayComponent.temperatureUnit.key)
            .then((data) => {
                console.log(data);
                // Display weather data if response is valid
                if ('cod' in data && data.cod === 200) {
                    weatherDataDisplayComponent.update(data);
                } else {
                    // Response not valid
                }
            });

        // Geolocation
        // openWeatherMapAPI.fetchGeolocationWithSearch(e.target.elements.search.value)
        //     .then((data) => {
        //         console.log(data);
        //     });

        // 5-Day/3-Hour forecast
        openWeatherMapAPI.fetch5DayForecastWithSearch(e.target.elements.search.value, weatherDataDisplayComponent.temperatureUnit.key)
            .then((data) => {
                if ('cod' in data && data.cod === '200') {
                    data.list = data.list.map((item) => {
                        const datetime = new Date(item.dt * 1000);
                        item.dt2 = getDateWithTimezoneOffet(item.dt, data.city.timezone, datetime.getTimezoneOffset());
                        item.dt = datetime;
                        return item;
                    });
                    console.log(data);
                } else {
                    // Response not valid
                }
            });
    }

    /**
     * 
     * @param {HTMLElement} containerElement 
     */
    function render(containerElement) {
        containerElement.append(
            new HeaderComponent({
                title: 'Weather App',
            }).render(),
            new TopNavComponent({
                temperatureUnits: weatherDataDisplayComponent.getAllTemperatureUnits(),
                handleSubmit: handleSearchFormSubmit,
                handleGeolocationSelect: (lat, lon) => {
                    console.log(`Select Geolocation: \nlat: ${lat}\nlon: ${lon}`);
                },
            }).render(),
            createElement('main', {}, 
                weatherDataDisplayComponent.render(),
            ),
            new FooterComponent({
                copyrightYear: 2022, 
                sourceCodeURL: 'https://github.com/toddbrentlinger/odin-project-weather-app',
            }).render()
        );
    }

    return {
        init,
        render,
    };
})();

export default weatherApp;
