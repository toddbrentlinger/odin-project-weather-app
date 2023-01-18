/**
 * NOTES:
 * - Each conversion factor (n) is how much larger the current unit is
 * than the previous unit in the list.
 * - Base unit has factor of 1 and is used to convert from one unit type
 * to another.
 */
const unitConversions = {
    imperial: {
        units: [
            {
                keys: ['in', 'inch', 'inches',],
                factor: 1,
            },
            {
                keys: ['ft', 'feet',],
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
    debugger;
    // Test argument types
    if (isNaN(value))
        throw new TypeError('value to be converted must be a number.');
    if (typeof startUnitStr !== 'string' && !(startUnitStr instanceof String))
        throw new TypeError('startUnitStr must be a String type.')
    if (typeof endUnitStr !== 'string' && !(endUnitStr instanceof String))
        throw new TypeError('endUnitStr must be a String type.')
    
    // Ensure unit names are lowercase before comparing
    startUnitStr = startUnitStr.toLowerCase();
    endUnitStr = endUnitStr.toLowerCase();

    // Find start and end units
    let startUnit, endUnit, startUnitType, endUnitType;
    outerloop:
    for (const unitType of Object.values(unitConversions)) {
        for (const unit of unitType.units) {
            if (!startUnit && unit.keys.includes(startUnitStr)) {
                startUnit = unit;
                startUnitType = unitType;
            }
            if (!endUnit && unit.keys.includes(endUnitStr)) {
                endUnit = unit;
                endUnitType = unitType;
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
        console.log('Same unit types');
    }
}

export function convertMillimeterToInches(nMillimeters) {
    // If argument is NOT a number, return that argument unchanged
    if (isNaN(nMillimeters))
        return nMillimeters;

    return nMillimeters / 25.4;
}

export function convertMetersToMiles(nMeters) {
    // If argument is NOT a number, return that argument unchanged
    if (isNaN(nMeters))
        return nMeters;

    return nMeters / 1609.34;
}
