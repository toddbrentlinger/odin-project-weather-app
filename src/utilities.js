/**
 * @param {String} type - Element type
 * @param {Object} props - Element attribute names and their corresponding value
 * @param  {...Node} children - Variable number of child nodes
 */
 export function createElement(type, props = {}, ...children) {
    const element = document.createElement(type);

    // Props
    for (const [key, value] of Object.entries(props)) {
        element.setAttribute(key, value);
    }

    // Children Nodes
    children.forEach((child) => element.append(child));

    return element;
}

/**
 * Creates string of number with commas if necessary
 * @param {Number} num 
 * @returns {String}
 */
export function addCommasToNumber(num) {
    // If num is NOT a number, try first converting to num
    // Ex. String '1.2' can be converted to a number
    if (typeof num !== 'number') {
        num = Number(num);
    }

    // If num is still NOT a number, return unchanged
    if (typeof num !== 'number') {
        return num;
    }

    // If reach this point, num is confirmed to be of type 'number'

    // Convert num to string
    num = num.toString();

    // Find first index to start, either at the end or a decimal
    let i = num.search(/\.|e/); // Index of '.', 'e', -1 if not present

    // If '.' or 'e' NOT present, set to end of num string
    if (i < 0) {
        i = num.length;
    }

    let counter = 0;
    while (i > 0) {
        if (counter < 3) {
            counter++;
        } else {
            // Add comma (cannot be first index from while loop condition)
            num = num.slice(0, i) + ',' + num.slice(i);

            counter = 1;
        }
        i--;
    }

    return num;
}

/**
 * Capitalizes first letter of string.
 * @param {String} str 
 * @returns {String}
 */
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Creates datetime from UTC unix time accounting for timezone
 * @param {*} timeUnix Time, unix, UTC
 * @param {*} timezoneShiftUnix Shift in seconds from UTC
 * @param {*} timezoneOffset Difference, in minutes, between date as evaluated in the UTC time zone, and the same date as evaluated in the local time zone
 * @returns {Date}
 */
export function getDateWithTimezoneOffet(timeUnix, timezoneShiftUnix, timezoneOffset) {
    // dt and timezone are in seconds. Must be multiplied by 1000 to get milliseconds.
    // Method getTimezoneOffset() returns minutes. Must be multiplied by 60,000 to get milliseconds.
    return new Date((timeUnix + timezoneShiftUnix + timezoneOffset * 60) * 1000);
}
