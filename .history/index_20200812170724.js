const testVar = {};

function testFunc() {
  return "hi"
};

let superbowlWin = (a) => {
  return a.find(function(season){
    if(season.result === 'W'){
      return season; 
    }else{
      return undefined;
    }; 
  }).year;
};