const openWeatherMapAPI = (() => {
    const openWeatherMapKey = '4e7cceafee56ebb58f598a6cdad1a909';

    /**
     * 
     * @param {String} searchInputValue 
     * @param {String|null} temperatureUnitKey 
     * @returns {String}
     */
    function createFetchCurrentURL(searchInputValue, temperatureUnitKey = null) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&APPID=${openWeatherMapKey}`;

        if (temperatureUnitKey) {
            url += `&units=${temperatureUnitKey}`;
        }

        return url;
    }

    /**
     * 
     * @param {String} searchInputValue 
     * @returns {String}
     */
    function createFetchGeolocationURL(searchInputValue) {
        let url = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInputValue}&limit=5&APPID=${openWeatherMapKey}`;

        return url;
    }

    /**
     * 
     * @param {GeolocationPosition} geolocationPositon 
     * @param {String|null} temperatureUnitKey 
     * @returns {String}
     */
    function createFetchCurrentURLWithGeolocationPosition(geolocationPositon, temperatureUnitKey = null) {
        let url = `https://api.openweathermap.org/data/2.5/weather?`;

        // Lat
        url += `&lat=${geolocationPositon.coords.latitude}`;

        // Lon
        url += `&lon=${geolocationPositon.coords.longitude}`;

        // App ID
        url += `&APPID=${openWeatherMapKey}`;

        // Units
        if (temperatureUnitKey) {
            url += `&units=${temperatureUnitKey}`;
        }

        return url;
    }

    /**
     * 
     * @param {String} searchInputValue 
     * @returns {Promise}
     */
    async function fetchGeolocationWithSearch(searchInputValue) {
        return fetch(createFetchGeolocationURL(searchInputValue))
            .then((response) => response.json());
    }

    /**
     * 
     * @param {String} searchInputValue 
     * @param {String|null} temperatureUnitKey 
     * @returns {Promise}
     */
    async function fetchCurrentWithSearch(searchInputValue, temperatureUnitKey = null) {
        return fetch(createFetchCurrentURL(searchInputValue, temperatureUnitKey), { mode: 'cors', })
            .then((response) => response.json());
    }

    /**
     * 
     * @param {String} searchInputValue 
     * @param {String|null} temperatureUnitKey 
     * @returns {Promise}
     */
    async function fetchCurrentWithGeolocation(geolocationPositon, temperatureUnitKey = null) {
        return fetch(createFetchCurrentURLWithGeolocationPosition(geolocationPositon, temperatureUnitKey), { mode: 'cors', })
            .then((response) => response.json());
    }

    async function fetch5DayForecast(lat, lon) {
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherMapKey}`, { mode: 'cors'})
            .then((response) => response.json());
    }

    async function fetch5DayForecastWithSearch(searchInputValue) {
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInputValue}&appid=${openWeatherMapKey}`, { mode: 'cors'})
            .then((response) => response.json());
    }

    return {
        fetchGeolocationWithSearch,
        fetchCurrentWithSearch,
        fetchCurrentWithGeolocation,
        fetch5DayForecast,
        fetch5DayForecastWithSearch,
    };
})();

export default openWeatherMapAPI;
