function camelize(str) {
  let splitedArr = str.split('-');

  let newArr = splitedArr.map((elem, i) =>
    i === 0 ? elem : elem[0].toUpperCase() + elem.slice(1))
    .join('');

  return newArr;
}


