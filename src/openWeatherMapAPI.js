const openWeatherMapAPI = (() => {
    const openWeatherMapKey = '4e7cceafee56ebb58f598a6cdad1a909';

    /**
     * 
     * @param {String} searchInputValue 
     * @returns {String}
     */
    function createFetchURL(searchInputValue, temperatureUnitKey = null) {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&APPID=${openWeatherMapKey}`;

        if (temperatureUnitKey) {
            url += `&units=${temperatureUnitKey}`;
        }

        return url;
    }

    /**
     * 
     * @param {GeolocationPosition} geolocationPositon 
     * @returns {String}
     */
    function createFetchURLWithGeolocationPosition(geolocationPositon, temperatureUnitKey = null) {
        let url = `http://api.openweathermap.org/data/2.5/weather?`;

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

    async function fetchWithSearch(searchInputValue, temperatureUnitKey = null) {
        return fetch(createFetchURL(searchInputValue, temperatureUnitKey), { mode: 'cors', })
            .then((response) => response.json());
    }

    async function fetchWithGeolocation(geolocationPositon, temperatureUnitKey = null) {
        return fetch(createFetchURLWithGeolocationPosition(geolocationPositon, temperatureUnitKey), { mode: 'cors', })
            .then((response) => response.json());
    }

    return {
        fetchWithSearch,
        fetchWithGeolocation,
    };
})();

export default openWeatherMapAPI;
