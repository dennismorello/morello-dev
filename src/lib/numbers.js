export const random = (lowerBound = 0, upperBound = 1) => {
  return lowerBound + Math.random() * (upperBound - lowerBound);
};
