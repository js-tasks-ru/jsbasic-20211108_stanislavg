function getMinMax(str) {
  let newArr = str.split(' ');
  let changedArr = newArr.map(elem => +elem);

  let filteredArr = changedArr.filter(elem => !(isNaN(elem)));

  let sortedArr = filteredArr.sort((a, b) => a - b);

  return newObj = {
    min: sortedArr[0],
    max: sortedArr[sortedArr.length - 1]
  };
}
