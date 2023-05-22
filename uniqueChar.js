const uniqueChar = (str) => {
  let unique = "";
  const temp = Array.from(new Set(str));
  for (i = 0; i < str.length; i++) {
    if (unique.includes(str[i]) === false) {
      unique += str[i];
    }
  }
  return unique;
};

console.log(uniqueChar("Hello"));

const uniqueCharTwo = (str) => {
  const temp = Array.from(new Set(str));
  console.log(temp);
};

uniqueCharTwo("Hello");
