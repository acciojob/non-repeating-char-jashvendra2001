function firstNonRepeatedChar(str) {
  let freq = {};

  // Step 1: Count frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Step 2: Find first non-repeating character
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  // Step 3: If no unique character exists
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
