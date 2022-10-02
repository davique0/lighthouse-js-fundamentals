function calculateRectangleArea(length, width) {
  let area = 0;
  if (length >= 0 && width >= 0 ) {
    area = length * width;
  } else {
    area = undefined;
  }
  return area;
}

function calculateTriangleArea(base, height) {
  let area = 0;
  if (base >= 0 && height >= 0 ) {
    area = base * height / 2;
  } else {
    area = undefined;
  }
  return area;
}

function calculateCircleArea(radius) {
  let area = 0;
  if (radius >= 0) {
    area = Math.PI * Math.pow(radius, 2);
  } else {
    area = undefined;
  }
  return area;
}

