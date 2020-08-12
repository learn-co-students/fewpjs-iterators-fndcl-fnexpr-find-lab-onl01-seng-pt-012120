const testVar = {};

function testFunc() {
  return "hi"
};

let superbowlWin = (a) => {
  a.find(function(season){
    debugger;
    if(season.result === 'W'){
      return season
    } 
  })
};