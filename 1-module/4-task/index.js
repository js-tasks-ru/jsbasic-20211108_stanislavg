function checkSpam(str) {
  let lowercaseStr = str.toLowerCase();
  return lowercaseStr.includes('1xBet'.toLowerCase()) || (lowercaseStr.includes('XXX'.toLowerCase()));
}

