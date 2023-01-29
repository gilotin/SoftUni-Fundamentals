function triangleArea(sideA, sideB, sideC) {
  let s = (sideA + sideB + sideC) * 0.5;
  area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
  console.log(area);
}
triangleArea(2, 3.5, 4);
