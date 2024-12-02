const palindrome = (str) => {
  let len = str.length;

  for (i = 0; i < len / 2; i++) {
    if (str[i] == str[len - 1 - i]) {
      return console.log("Its a Palindrome");
    } else {
      return console.log("It's not a palindrome");
    }
  }
};

// USING RECURSION
function isPalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false