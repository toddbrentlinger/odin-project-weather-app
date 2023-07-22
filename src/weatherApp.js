import HeaderComponent from './components/headerComponent';
import TopNavComponent from './components/topNavComponent';
import FooterComponent from './components/footerComponent';
import weatherDataDisplayComponent from './components/weatherDataDisplayComponent';
import openWeatherMapAPI from './openWeatherMapAPI';

const weatherApp = (() => {
    function init() {
        // Use Geolocation API to get User's current position if available
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                openWeatherMapAPI.fetchWithGeolocation(position, weatherDataDisplayComponent.temperatureUnit.key)
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

        openWeatherMapAPI.fetchWithSearch(e.target.elements.search.value, weatherDataDisplayComponent.temperatureUnit.key)
            .then((data) => {
                console.log(data);
                // Display weather data if response is valid
                if ('cod' in data && data.cod === 200) {
                    weatherDataDisplayComponent.update(data);
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
            }).render(),
            weatherDataDisplayComponent.render(),
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
