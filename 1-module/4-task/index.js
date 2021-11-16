function checkSpam(str) {
  let lowercaseStr = str.toLowerCase();
  console.log(lowercaseStr);
  if (lowercaseStr.includes('1xBet'.toLowerCase()) || (lowercaseStr.includes('XXX'.toLowerCase()))) {
    return true;
  } else {
    return false;
  }
}

