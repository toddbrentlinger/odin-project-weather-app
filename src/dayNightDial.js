import { createElement, getDateWithTimezoneOffet } from "./utilities";
import DayNightDialPNG from "./img/imgbin-day-night-alpha.png";

/**
 * Factory function to create rotating day-night dial element.
 * @returns {Object}
 */
function createDayNightDial() {
    let _containerElement, _imgElement, _sunriseElement, _sunsetElement;

    /**
     * Sets transform rotation angle of day-night dial image.
     * @param {Number} time Time, unix, UTC
     * @param {Number} sunrise Sunrise time, unix, UTC
     * @param {Number} sunset Sunset time, unix, UTC
     */
    const setAngle = (time, sunrise, sunset) => {
        const angle = getAngle(time, sunrise, sunset);

        _imgElement.style.transform = `rotate(${angle}deg)`;
    };

    /**
     * Updates day-night dial rotation and displayed times for sunrise/sunset accounting for timezone
     * @param {Number} time Time, unix, UTC
     * @param {Number} sunrise Sunrise time, unix, UTC
     * @param {Number} sunset Sunset time, unix, UTC
     * @param {Number} timezoneShiftUnix Shift in seconds from UTC
     * @param {Number} timezoneOffset Difference, in minutes, between date as evaluated in the UTC time zone, and the same date as evaluated in the local time zone
     */
    const update = (time, sunrise, sunset, timezoneShiftUnix, timezoneOffset) => {
        // Set transform rotate angle of dial
        setAngle(time, sunrise, sunset);

        // Convert sunrise to time accounting for timezone
        const sunriseDatetime = getDateWithTimezoneOffet(sunrise, timezoneShiftUnix, timezoneOffset)
            .toLocaleTimeString('en-us', {
                hour: 'numeric',
                minute: 'numeric',
            });

        // Convert sunset to time accounting for timezone
        const sunsetDatetime = getDateWithTimezoneOffet(sunset, timezoneShiftUnix, timezoneOffset)
            .toLocaleTimeString('en-us', {
                hour: 'numeric',
                minute: 'numeric',
            });

        // Add sunrise/sunset time to DOM elements
        _sunriseElement.textContent = sunriseDatetime;
        _sunsetElement.textContent = sunsetDatetime;
    };

    /**
     * Adds day-night dial elements to parent element.
     * @param {HTMLElement} element 
     */
    const init = (element) => {
        _containerElement = element;
        _containerElement.id = 'sunrise-sunset-container';

        // Image
        _imgElement = createElement('img', {src: DayNightDialPNG, alt: 'Time of day dial'});

        // Image container
        _containerElement.appendChild(
            createElement('div', {id: 'day-night-img-container'}, 
                _imgElement
            )
        );

        _sunriseElement = createElement('span', {id: 'sys-sunrise'});
        _sunsetElement = createElement('span', {id: 'sys-sunset'});

        _containerElement.appendChild(
            createElement('div', {id: 'sunrise-sunset-time-container'}, 
                createElement('div', {}, 
                    createElement('span', {}, 'Sunrise'),
                    _sunriseElement
                ),
                createElement('div', {}, 
                    createElement('span', {}, 'Sunset'),
                    _sunsetElement
                )
            )
        );
    };

    return {
        init,
        update,
    };
}

/**
 * 
 * @param {Number} time 
 * @param {Number} sunrise 
 * @param {Number} sunset 
 * @returns 
 */
function getAngle(time, sunrise, sunset) {
    let fraction;
    let isNight = false;

    // If time is before sunrise or after sunset
    if (time <= sunrise || time >= sunset) {
        // Degree will be [90, 270]
        isNight = true;
        // If time is before sunrise
        if (time < sunrise) {
            // Subtract day from sunset to ensure time is between sunrise and sunset
            sunset -= 86400;
        } else if (time > sunset) { // Else time is afer sunset to ensure time is between sunrise and sunset
            // Add day to sunrise
            sunrise += 86400;
        }
    }

    fraction = (time - sunrise) / (sunset - sunrise);
    
    if (isNight) {
        return 270 - fraction * (270 - 90);
    } else {
        return 270 + fraction * (450 - 270);
    }
}

function getAngleUnitTestSingle(input, expectedOutput) {
    const actualOutput = getAngle(...input);

    console.assert(
        actualOutput === expectedOutput, 
        `TEST FAILED!\nInput: ${input}\nExpected Output: ${expectedOutput}\nActual Output: ${actualOutput}`
    );
}

function getAngleUnitTestAll() {
    const secondsInDay = 86400;
    const sunrise = 1689685277;
    const sunset = 1689737107;
    const prevDaySunset = sunset - secondsInDay;
    const nextDaySunrise = sunrise + secondsInDay;
    let time;

    // Time equal to sunrise (270)
    console.log('TEST: Time equal to sunrise (270)');
    getAngleUnitTestSingle([sunrise, sunrise, sunset], 270);

    // Time equal to sunset (90)
    console.log('TEST: Time equal to sunset (90)');
    getAngleUnitTestSingle([sunset, sunrise, sunset], 90);

    // Time exactly halfway between sunrise and sunset during day (0) - day-half
    console.log('TEST: Time exactly halfway between sunrise and sunset during day (0) - day-half');
    time = sunrise + 0.5 * (sunset - sunrise);
    getAngleUnitTestSingle([time, sunrise, sunset], 360);

    // Time after sunrise and before midday - day-half
    console.log('TEST: Time after sunrise and before midday - day-half');
    time = sunrise + 0.25 * (sunset - sunrise);
    getAngleUnitTestSingle([time, sunrise, sunset], 315);

    // Time before sunset and after midday - day-half
    console.log('TEST: Time before sunset and after midday - day-half');
    time = sunset - 0.25 * (sunset - sunrise);
    getAngleUnitTestSingle([time, sunrise, sunset], 405);

    // Time exactly halfway between sunrise and sunset during night (180) - night-half
    console.log('TEST: Time exactly halfway between sunrise and sunset during night (180) - night-half');
    time = prevDaySunset + 0.5 * (sunrise - prevDaySunset);
    getAngleUnitTestSingle([time, sunrise, sunset], 180);

    // Time before sunrise but after midnight (new day) - night-half
    console.log('TEST: Time before sunrise but after midnight (new day) - night-half');
    time = sunrise - 0.25 * (sunrise - prevDaySunset);
    getAngleUnitTestSingle([time, sunrise, sunset], 225);

    // Time after sunset but before midnight (new day) - night-half
    console.log('TEST: Time after sunset but before midnight (new day) - night-half');
    time = sunset + 0.25 * (nextDaySunrise - sunset);
    getAngleUnitTestSingle([time, sunrise, sunset], 135);
}

//getAngleUnitTestAll();

export default createDayNightDial;

/**
 * time, sunrise, sunset all unix UTC time format
 * 
 * Degrees = 0 for miday (exactly half between sunset and sunrise) day-half
 * Degrees = 90 sunset
 * Degrees = 270 sunrise
 * Degrees = 180 middle of night (exactly half between sunset and sunrise) night-half
 * 
 * 86400 seconds per day
 * 
 * day-half: (270, 360), (0, 90) -> (270, 450)
 * night-half: (90, 270)
 * 
 * getAngle()
 * - if time between sunrise and sunset (midday)
 *   - degree will be 270-365 or 0-90
 * - else time before or after sunset
 *   - degree will be 90-270
 *   - if time less than sunrise (early morning after midnight)
 *   - else time more than sunset (late night before midnight)
 */
