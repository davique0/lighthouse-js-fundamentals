function range(start, end, step) {
  let newArray = [];
  if ( start < end && step > 0 && start !== undefined && end !== undefined && step !== undefined) {
    for(let i = start; i <= end; i += step) {
      newArray.push(i);
    }
  }
  return newArray;
}