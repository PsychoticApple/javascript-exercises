const sumAll = function (min, max) {
  if (typeof min != "number" || typeof max != "number") return "ERROR";
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";

  if (min > max) [min, max] = [max, min];

  let sum = 0;
  for (let i = max; i >= min; i--) {
    sum += i;
  }
  return sum;
};
console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
