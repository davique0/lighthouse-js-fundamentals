function chooseStation(stations) {
  let result = [];
  for (const locations of stations) {
    if (locations[1]>=20 && (locations[2] === 'school' || locations[2] === 'community centre')) {
      result.push(locations[0])
    }
  }
  return result
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStation(stations));


