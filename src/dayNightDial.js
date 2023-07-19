import { createElement } from "./utilities";
import DayNightDialPNG from "./img/imgbin-day-night-alpha.png";

function createDayNightDial() {
    let _containerElement, _imgElement;

    const setAngle = (time, sunrise, sunset) => {
        const angle = getAngle(time, sunrise, sunset);

        _imgElement.style.transform = `rotate(${angle})`;
    };

    const init = (element) => {
        _containerElement = element;

        _imgElement = createElement('img', {src: DayNightDialPNG, alt: 'Time of day dial'});

        _containerElement.id = 'sunrise-sunset-container';
        _containerElement.appendChild(
            createElement('div', {id: 'day-night-img-container'}, 
                _imgElement
            )
        );
    };

    return {
        init,
        setAngle,
    };
}

function getAngle(time, sunrise, sunset) {
    console.log(`time: ${time}\nsunrise: ${sunrise}\nsunset: ${sunset}`);
    let fraction;
    let isNight = false;

    // If time is before sunrise or after sunset
    if (time < sunrise || time > sunset) {
        // Degree will be (270, 360] or [0, 90) (simplified (270, 450))
        isNight = true;
        // If time is before sunrise
        if (time < sunrise) {
            console.log('Time less than sunrise');
            // Subtract day from sunset to ensure time is between sunrise and sunset
            sunset -= 86400;
        } else { // Else time is afer sunset to ensure time is between sunrise and sunset
            console.log('Time more than sunset');
            // Add day to sunrise
            sunrise += 86400;
        }
    } else { // Else time is midday
        console.log('Time is midday');
        // Degree will be [90, 270]
    }

    fraction = (time - sunrise) / (sunset - sunrise);
    
    return 270 - fraction * (270 - 90);
}

function getAngleUnitTestSingle(input, expectedOutput) {
    const actualOutput = getAngle(...input);

    console.assert(
        actualOutput === expectedOutput, 
        `TEST FAILED!\nInput: ${input}\nExpected Output: ${expectedOutput}\nActual Output: ${actualOutput}`
    );
}

function getAngleUnitTestAll() {
    const sunrise = 1689685277;
    const sunset = 1689737107;
    let time;

    // Time equal to sunrise (270)
    getAngleUnitTestSingle([sunrise, sunrise, sunset], 270);

    // Time equal to sunset (90)
    getAngleUnitTestSingle([sunset, sunrise, sunset], 90);

    // Time exactly halway between sunrise and sunset during day (0)
    time = sunrise + 0.5 * (sunset - sunrise);
    getAngleUnitTestSingle([time, sunrise, sunset], 0);

    // Time exactly halfway between sunrise and sunset during night (180)

    // Time before sunrise but after midnight (new day)

    // time after sunset but before midnight (new day)
}

getAngleUnitTestAll();

export default createDayNightDial;

/**
 * time, sunrise, sunset all unix UTC time format
 * 
 * Degrees = 0 for miday (exactly half between sunset and sunrise)
 * Degrees = 90 sunset
 * Degrees = 270 sunrise
 * Degrees = 180 middle of night (exactly half between sunset and sunrise)
 * 
 * 86400 seconds per day
 * 
 * getAngle()
 * - if time between sunrise and sunset (midday)
 *   - degree will be 270-365 or 0-90
 * - else time before or after sunset
 *   - degree will be 90-270
 *   - if time less than sunrise (early morning after midnight)
 *   - else time more than sunset (late night before midnight)
 */
