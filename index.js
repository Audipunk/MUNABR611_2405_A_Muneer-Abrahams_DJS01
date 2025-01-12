/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


const calcNewDistance = initialDistanceKm + (velocityKmH*(timeInSeconds/3600)); //calcultes new distance
const calcRemainingFuelKg = initialFuelKg - (fuelBurnRateKgs * timeInSeconds); //calculates remaining fuel
const currentVelocityKmH = velocityKmH + (accelerationKmH2 * (timeInSeconds / 3600)) //calculates new velocity based on acceleration

// Calculate new velocity based on acceleration and time
const calculateNewVelocity = (initialVelocityKmH, accelerationMS2, timeSeconds) => {
  if (initialVelocityKmH == null || accelerationMS2 == null || timeSeconds == null) {
    throw new Error('calculateNewVelocity: received null pointer');
  }
  
  const timeHours = timeSeconds / 3600; // Convert time from seconds to hours
  const accelerationKmH2 = accelerationMS2 * 3.6; // Convert acceleration from m/s² to km/h²

  return initialVelocityKmH + (accelerationKmH2 * timeHours);
};

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






