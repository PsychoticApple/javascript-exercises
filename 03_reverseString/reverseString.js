const reverseString = function (string) {
  const arr_Str = string.split();
  let length = arr_Str[0].length;
  let str = "";

  for (let i = length - 1; i >= 0; i--) {
    str += arr_Str[0][i];
  }

  return str;
};

// Do not edit below this line
module.exports = reverseString;

/* turn string in array
get array length
for loop that goes in reverse from array length - 1
every loop add one letter from the last of the array
to the first
send back reversed str */
