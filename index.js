const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let returnVal;
  arr.find( function(obj) {
    if (obj.result === "W") {
      returnVal = obj.year
    }
  })
  return returnVal
}