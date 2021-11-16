function ucFirst(str) {
  if (str !== '') {
    let firstLetter = str[0].toUpperCase();
    let slicedWord = str.slice(1);
    let newWord = firstLetter + slicedWord;
    return newWord;
  } else {
    return str;
  }
}

