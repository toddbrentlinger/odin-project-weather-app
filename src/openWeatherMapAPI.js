const openWeatherMapAPI = (() => {
    const openWeatherMapKey = '4e7cceafee56ebb58f598a6cdad1a909';

    function createFetchURLWithSearch(searchInputValue, type = 'weather', temperatureUnitKey = null) {
        let url = `https://api.openweathermap.org/data/2.5/${type}?q=${searchInputValue}&APPID=${openWeatherMapKey}`;

        if (temperatureUnitKey) {
            url += `&units=${temperatureUnitKey}`;
        }

        return url;
    }

    /**
     * 
     * @param {String} searchInputValue 
     * @param {String|null} temperatureUnitKey 
     * @returns {String}
     */
    function createFetchCurrentURL(searchInputValue, temperatureUnitKey = null) {
        return createFetchURLWithSearch(searchInputValue, 'weather', temperatureUnitKey);
    }

    /**
     * 
     * @param {String} searchInputValue 
     * @param {String|null} temperatureUnitKey 
     * @returns {String}
     */
    function createFetch5DayForecastURL(searchInputValue, temperatureUnitKey = null) {
        return createFetchURLWithSearch(searchInputValue, 'forecast', temperatureUnitKey);
    }

    /**
     * 
     * @param {String} searchInputValue 
     * @returns {String}
     * @todo
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

    function createFetch5DayForecastURLWithGeolocationPosition(geolocationPositon, temperatureUnitKey = null) {
        let url = `https://api.openweathermap.org/data/2.5/forecast?`;

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
    async function fetchGeolocationWithSearch(searchInputValue, init = {}) {
        init.mode = 'cors';
        return fetch(createFetchGeolocationURL(searchInputValue), init)
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