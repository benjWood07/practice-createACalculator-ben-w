//Creating a Calculator

//Find the absolute value of -45.67
/*
FUNCTION getAbsoluteValue(number):
    RETURN Math.abs(number)
END FUNCTION
*/

//Raise 5 to the power of 3
/*
FUNCTION calculatePower(base, exponent):
    RETURN Math.pow(base, exponent)
END FUNCTION
*/

//Calculate the square root of 144
/*
FUNCTION getSquareRoot(number):
    IF number < 0:
        RETURN "Cannot calculate square root of negative number"
    ELSE:
        RETURN Math.sqrt(number)
    END IF
END FUNCTION
*/

//Determine the largest and smallest values from [3, 78, -12, 0.5, 27].
/*
FUNCTION findMaxAndMin(arrayOfNumbers):
    SET maximum = Math.max(...arrayOfNumbers)
    RETURN {max: maximum, min: minimum}
END FUNCTION
*/

//Generate a random number between 1 and 50
/*
FUNCTION generateRandomNumber(minValue, maxValue):
    SET randomNumber = Math.random() * (maxValue - minValue + 1) + minValue
    RETURN Math.floor(randomNumber)
END FUNCTION
*/

//Round 23.67891 to 2 decimal places
/*
FUNCTION roundToDecimals(number, decimalPlaces):
    SET multiplier = Math.pow(10, decimalPlaces)
    RETURN Math.round(number * multiplier) / multiplier
END FUNCTION
*/
