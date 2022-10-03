/*Challenge
Instruction
Complete the logic in the function carPassing.

The function, carPassing(cars, speed), takes in an array of car objects, and the speed of a car as it passes the sensor.

This function should create a new object with a property called speed, and another property called time and add it to the cars array. We can retrieve the current time, for setting the time property, by using the Date.now() function, which is built into JavaScript!

Our function should return an array that includes all of the elements in cars as well as our new element. */

const carPassing = function (cars, speed) {
  cars.push({time: Date.now(), speed: speed,});
  return cars
}
