const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
 let yearWin;
 arr.find( function(obj) {
   if (obj.result === "W") {
     return yearWin = obj.year
   }
 })
  return yearWin
}