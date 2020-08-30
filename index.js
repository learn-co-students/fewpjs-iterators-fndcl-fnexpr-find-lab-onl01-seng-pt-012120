function superbowlWin(array) {
  let winningYear = array.find(arg => arg.result === 'W')
  return winningYear ? winningYear.year : undefined
};