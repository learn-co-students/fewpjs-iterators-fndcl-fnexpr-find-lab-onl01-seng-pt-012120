const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(x) {
  let a = x.find(function(e) {if (e['result'] === "W") return e});
  if (a !== undefined) {return a['year']};
}