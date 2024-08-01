const repeatString = function (string, num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += string;
  }
  return num < 0 ? "ERROR" : str;
};

// Do not edit below this line
module.exports = repeatString;
