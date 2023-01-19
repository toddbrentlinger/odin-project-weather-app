/**
 * NOTES:
 * - Each conversion factor (n) is how much larger the current unit is
 * than the previous unit in the list.
 * - Base unit has factor of 1 and is used to convert from one unit type
 * to another.
 */
const unitConversions = {
    imperial: {
        key: 'imperial',
        units: [
            {
                keys: ['in', 'inch', 'inches',],
                factor: 1, // Relative to previous
            },
            {
                keys: ['ft', 'feet', 'foot',],
                factor: 12,
            },
            {
                keys: ['yd', 'yard', 'yards',],
                factor: 3,
            },
            {
                keys: ['mi', 'mile', 'miles',],
                factor: 1760,
            },
        ],
        typeConversions: {
            metric: 25.4, // 25.4 mm == 1 inch
        },
    },
    metric: {
        key: 'metric',
        units: [
            {
                keys: ['mm', 'millimeter', 'millimeters',],
                factor: 1,
            },
            {
                keys: ['cm', 'centimeter', 'centimeters',],
                factor: 10,
            },
            {
                keys: ['m', 'meter', 'meters',],
                factor: 100,
            },
            {
                keys: ['km', 'kilometer', 'kilometers',],
                factor: 1000,
            },
        ],
        typeConversions: {},
    }
};

/*
- If User wants to convert one unit to another within the same unit type 
(imperial, metric, etc.), use only the corresponding nameUnitConversion 
object to walk up or down the units.
- If User wants to convert between unit types, must go up starting type 
until reach factor=1. Then multiply or divide by unitTypeConversion value 
before stepping toward final unit type.
 */

/**
 * 
 * @param {Number} value Value to convert units
 * @param {String} startUnitStr Units of the value
 * @param {String} endUnitStr Units to convert the value to 
 */
function convertUnit(value, startUnitStr, endUnitStr) {
    // Test argument types
    if (typeof value !== 'number')
        throw new TypeError('value to be converted must be a number.');
    if (typeof startUnitStr !== 'string' && !(startUnitStr instanceof String))
        throw new TypeError('startUnitStr must be a String type.')
    if (typeof endUnitStr !== 'string' && !(endUnitStr instanceof String))
        throw new TypeError('endUnitStr must be a String type.')
    
    // Ensure unit names are lowercase before comparing
    startUnitStr = startUnitStr.toLowerCase();
    endUnitStr = endUnitStr.toLowerCase();

    // Find start and end units
    let startUnit, endUnit, startUnitType, endUnitType, startUnitIndex, endUnitIndex;
    outerloop:
    for (const unitType of Object.values(unitConversions)) {
        for (const [index, unit] of unitType.units.entries()) {
            if (!startUnit && unit.keys.includes(startUnitStr)) {
                startUnit = unit;
                startUnitType = unitType;
                startUnitIndex = index;
            }
            if (!endUnit && unit.keys.includes(endUnitStr)) {
                endUnit = unit;
                endUnitType = unitType;
                endUnitIndex = index;
            }

            // Break outer loop if both units have been found
            if (startUnit && endUnit)
                break outerloop;
        }
    }

    // Throw error if units are NOT valid
    if (!startUnit && !endUnit)
        throw new Error('Both startUnit AND endUnit NOT found.');
    if (!startUnit)
        throw new Error('startUnit NOT found.');
    if (!endUnit)
        throw new Error('endUnit NOT found.');

    // Same Unit Type
    if (startUnitType === endUnitType) {
        // End unit is larger
        if (startUnitIndex < endUnitIndex) {
            while (startUnitIndex < endUnitIndex) {
                value /= startUnitType.units[++startUnitIndex].factor;
            }
        } else if (startUnitIndex > endUnitIndex) {
            while (startUnitIndex > endUnitIndex) {
                value *= startUnitType.units[startUnitIndex--].factor;
            }
        }
        // Else same unit type, return value unchanged
    } else { // Different Unit Types
        // Step up start unit type
        while (startUnitIndex > 0) {
            value *= startUnitType.units[startUnitIndex--].factor;
        }

        // Convert to end unit type

        // Check unit type conversion in start unit type
        if (endUnitType.key in startUnitType.typeConversions) {
            value *= startUnitType.typeConversions[endUnitType.key];
        }
        // Check unit type conversion in end unit type 
        else if (startUnitType.key in endUnitType.typeConversions) {
            value /= endUnitType.typeConversions[startUnitType.key];
        }
        else {
            throw new Error('No conversion between unit types available.');
        }

        // Step down end unit type, using endUnitIndex as counter
        while (endUnitIndex > 0) {
            value /= endUnitType.units[endUnitIndex--].factor;
        }
    }

    return value;
}

function convertUnitUnitTestSingle(value, startUnitStr, endUnitStr, expectedOutput) {
    let actualOutput;
    try {
        actualOutput = convertUnit(value, startUnitStr, endUnitStr);
    } catch (e) {
        console.log(e);
        if (expectedOutput === undefined)
            console.log('Test Pass');
        else
            console.error('Test Fail! Error.')
        return false;
    }

    if (actualOutput == expectedOutput) {
        console.log(`Test Pass`);
        return true;
    } else {
        console.error(`Test Fail!\nvalue: ${value}\nstartUnitStr: ${startUnitStr}\nendUnitStr: ${endUnitStr}\nexpectedOutput: ${expectedOutput}\nactualOutput: ${actualOutput}`);
        return false;
    }
}

function convertUnitUnitTestAll() {
    [
        [1, 'ft', 'inches', 12],
        [12, 'in', 'feet', 1],
        [1, 'mile', 'ft', 5280],
        [10560, 'ft', 'mi', 2],
        [1, 'm', 'mm', 1000],
        [100, 'mm', 'm', 0.1],
        [1, 'km', 'm', 1000],
        [1, 'km', 'foot', 3280.84],
        ['', 'in', 'mm', undefined],
        [1, '', 'in', undefined],
        [1, 'in', '', undefined],
        [1, '', '', undefined],
    ].forEach((testArr) => convertUnitUnitTestSingle(...testArr));
}

window.convertUnit = convertUnit;
convertUnitUnitTestAll();

// export function convertMillimeterToInches(nMillimeters) {
//     // If argument is NOT a number, return that argument unchanged
//     if (isNaN(nMillimeters))
//         return nMillimeters;

//     return nMillimeters / 25.4;
// }

// export function convertMetersToMiles(nMeters) {
//     // If argument is NOT a number, return that argument unchanged
//     if (isNaN(nMeters))
//         return nMeters;

//     return nMeters / 1609.34;
// }
