const openWeatherMapAPI = (() => {
    const openWeatherMapKey = '4e7cceafee56ebb58f598a6cdad1a909';

    /**
     * Base URL creation for weather
     * @param {String} path Weather path of url (ex. 'weather' for current weather and 'forecast' for 5-day/3-hour forecast)
     * @param {Object} searchParams key/value pairs of URL search paramaters 
     * @returns 
     */
    function createFetchWeatherURL(path, searchParams = {}) {
        // Initial url with path followed by '?' for search params
        let url = `https://api.openweathermap.org/data/2.5/${path}?`;

        // Add each search param followed by '&'
        for (const [key, value] of Object.entries(searchParams)) {
            url += key + '=' + value + '&';
        }
        
        // Add api key to end of url
        url += 'appid=' + openWeatherMapKey;

        return url;
    }

    /**
     * Base URL creation for geolocation
     * @param {String} searchInputValue 
     * @returns {String}
     * @todo
     */
    function createFetchGeolocationURL(searchInputValue) {
        let url = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInputValue}&limit=5&APPID=${openWeatherMapKey}`;

        return url;
    }

    /**
     * URL creation for current weather using search query
     * @param {String} searchInputValue 
     * @param {String|null} temperatureUnitKey 
     * @returns {String}
     */
    function createFetchCurrentURLWithSearch(searchInputValue, temperatureUnitKey = null) {
        const searchParams = { q: searchInputValue, };
        if (temperatureUnitKey) {
            searchParams.units = temperatureUnitKey;
        }
        return createFetchWeatherURL('weather', searchParams);
    }

    /**
     * URL creation for 5-day/3-hour forecast weather using search query
     * @param {String} searchInputValue 
     * @param {String|null} temperatureUnitKey 
     * @returns {String}
     */
    function createFetch5DayForecastURLWithSearch(searchInputValue, temperatureUnitKey = null) {
        const searchParams = { q: searchInputValue, };
        if (temperatureUnitKey) {
            searchParams.units = temperatureUnitKey;
        }
        return createFetchWeatherURL('forecast', searchParams);
    }

    /**
     * URL creation for current weather using latitude/longitude coordinates
     * @param {Number} lat Latitude coordinate number
     * @param {Number} lon Longitude coordinate number
     * @param {String|null} temperatureUnitKey 
     * @returns {String}
     */
    function createFetchCurrentURLWithGeolocation(lat, lon, temperatureUnitKey = null) {
        const searchParams = { lat, lon, };
        if (temperatureUnitKey) {
            searchParams.units = temperatureUnitKey;
        }
        return createFetchWeatherURL('weather', searchParams);
    }

    /**
     * URL creation for 5-day/3-hour weather using latitude/longitude coordinates
     * @param {Number} lat Latitude coordinate number
     * @param {Number} lon Longitude coordinate number
     * @param {String|null} temperatureUnitKey 
     * @returns {String}
     */
    function createFetch5DayForecastURLWithGeolocation(lat, lon, temperatureUnitKey = null) {
        const searchParams = { lat, lon, };
        if (temperatureUnitKey) {
            searchParams.units = temperatureUnitKey;
        }
        return createFetchWeatherURL('forecast', searchParams);
    }

    /**
     * 
     * @param {String} searchInputValue 
     * @param {String|null} temperatureUnitKey 
     * @returns {Promise}
     */
    async function fetchCurrentWithSearch(searchInputValue, temperatureUnitKey = null) {
        return fetch(createFetchCurrentURLWithSearch(searchInputValue, temperatureUnitKey), { mode: 'cors', })
            .then((response) => response.json());
    }

    /**
     * 
     * @param {Number} lat Latitude coordinate number
     * @param {Number} lon Longitude coordinate number
     * @param {String|null} temperatureUnitKey 
     * @returns {Promise}
     */
    async function fetchCurrentWithGeolocation(lat, lon, temperatureUnitKey = null) {
        return fetch(createFetchCurrentURLWithGeolocation(lat, lon, temperatureUnitKey), { mode: 'cors', })
            .then((response) => response.json());
    }

    async function fetch5DayForecastWithSearch(searchInputValue, temperatureUnitKey = null) {
        return fetch(createFetch5DayForecastURLWithSearch(searchInputValue, temperatureUnitKey), { mode: 'cors'})
            .then((response) => response.json());
    }

    async function fetch5DayForecastWithGeolocation(lat, lon, temperatureUnitKey = null) {
        return fetch(createFetch5DayForecastURLWithGeolocation(lat, lon, temperatureUnitKey), { mode: 'cors', })
            .then((response) => response.json());
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

    return {
        fetchCurrentWithSearch,
        fetchCurrentWithGeolocation,
        fetch5DayForecastWithSearch,
        fetch5DayForecastWithGeolocation,
        fetchGeolocationWithSearch,
    };
})();

export default openWeatherMapAPI;
