//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
const tempsInF = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];
const tempsInC = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];

let convertedTempsToC = [];
tempsInF.forEach(element => {
    convertedTempsToC.push((element - 32) * 5 / 9);
});

let convertedTempsToF = [];
tempsInC.forEach(element => {
    convertedTempsToF.push((element * 9 / 5) + 32);
});

function SumOfArray(passedArray){
    let totalSum = 0;
    passedArray.forEach(element => {
        totalSum += element;
    })
    return totalSum;
}

const tot_temperature_in_fahrenheit = SumOfArray(tempsInF) + SumOfArray(convertedTempsToF);
const tot_temperature_in_celsius = SumOfArray(tempsInC) + SumOfArray(convertedTempsToC);

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / (tempsInF.length + convertedTempsToF.length);
const avg_temperature_in_celsius = tot_temperature_in_celsius / (tempsInC.length + convertedTempsToC.length);

console.log(`${tot_temperature_in_fahrenheit} divided by ${tempsInF.length + convertedTempsToF.length} equals ${avg_temperature_in_fahrenheit}`);
console.log(`${tot_temperature_in_celsius} divided by ${tempsInC.length + convertedTempsToC.length} equals ${avg_temperature_in_celsius}`);

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};