let testVar = {}

function testFunc(obj) {
  return obj.result === 'W';
};

function superbowlWin(array) {
  testVar = array.find(testFunc);
  if (testVar) {
    return testVar.year;
  };
  
}
