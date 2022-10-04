import './styles.scss';

(() => {
    const openWeatherMapKey = '4e7cceafee56ebb58f598a6cdad1a909';
    const city = '95076';

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${openWeatherMapKey}`, {mode: 'cors',})
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });

    function component() {
        const element = document.createElement('div');

        element.innerHTML = 'Hello World!';

        return element;
    }

    document.body.appendChild(component());
})();
