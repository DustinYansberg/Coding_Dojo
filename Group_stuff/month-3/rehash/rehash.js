const rehash = (str) => {
  const hash = {};
  let result = "";
  let tmpLtr = str[0];
  let tmpNum = "";

  for (let i = 1; i <= str.length; i++) {
    if (isNaN(str[i]) || i == str.length) {
      hash[tmpLtr]
        ? (hash[tmpLtr] += parseInt(tmpNum))
        : (hash[tmpLtr] = parseInt(tmpNum));
      tmpLtr = str[i];
      tmpNum = "";
    } else {
      tmpNum += str[i];
    }
  }

  for (char of Object.keys(hash).sort()) {
    result += char;
    result += hash[char];
  }

  return result;
};

str = "b70a164c32a20c10";
console.log(rehash(str));
