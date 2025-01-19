/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocityKMH = 10000; // velocity (km/h)
const accelerationKMH = 3 * 12960; // acceleration (coverted from m/s^2 to km/h^2)
const timeHours = 3600 / 3600 // seconds (1 hour)
const initialDistanceKM = 0; // distance (km)
const fuelKG = 5000; // remaining fuel (kg)
const fuelBurnRateKG = 0.5 * 3600; // fuel burn rate converted from (kg/s) to (kg/h)



const newDistance = initialDistanceKM + (initialVelocityKMH * timeHours) //calcultes new distance
const remainingFuel = fuelKG - (fuelBurnRateKG * timeHours) //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVelocity = (initialVelocityKMH, accelerationKMH, timeHours) => { 
  if (initialVelocityKMH < 0 || accelerationKMH < 0 || timeHours < 0) {
    throw new Error('Invalid entry: Entry fields can not be negative values')
  }
  return initialVelocityKMH + (accelerationKMH * timeHours)
}

const newVelocity = calcNewVelocity(initialVelocityKMH, accelerationKMH, timeHours) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);