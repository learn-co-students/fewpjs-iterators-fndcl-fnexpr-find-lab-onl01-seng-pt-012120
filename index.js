const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(e)
{
  let answer = undefined;
  e.find(function(s){ if (s.result === "W"){ answer = s.year}});
  return answer
}
