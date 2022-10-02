const finalPosition = function (moves) {
  let xAndY = [0, 0];
  for (const direccion of moves) {
    direccion === 'north' ? xAndY[1] += 1 : direccion === 'south' ? xAndY[1] -= 1 : direccion === 'east' ? xAndY[0] += 1 : xAndY[0] -= 1;
  }
  return xAndY;
}

const otherthing = ['north', 'north', 'west', 'west', 'north', 'east','north'];

console.log(finalPosition(otherthing));
