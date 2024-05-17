//1.Write a JavaScript program to convert temperature from Celsius to Fahrenheit.The program should prompt the user to enter a temperature in Celsius.Then, it should convert the temperature to Fahrenheit using the formula: F=9/5c+32.Display the converted temperature in Fahrenheit on the console, rounded to two decimal places
const prompt= require('prompt-sync')();
const inputTemp = prompt(`enter the temperature in °C : `) 
const Fahrenheit_temp = ((9/5)*inputTemp)+32;
console.log(`-------------${inputTemp}°C is also ${Math.round(Fahrenheit_temp*100)/100}°F-------------`);

