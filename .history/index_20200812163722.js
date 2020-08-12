const testVar = {};

function testFunc() {
  return "hi"
};

let superbowlWin = (a) => {
  a.find(function(season){
    if(season.result === 'W'){
      debugger;
      return season.year;
    }; 
  });
};