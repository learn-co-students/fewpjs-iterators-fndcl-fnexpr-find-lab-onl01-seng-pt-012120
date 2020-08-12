const testVar = {};

function testFunc() {
  return "hi"
};

let superbowlWin = (a) => {
  let result = a.find(function (season) {
    if(season.result === 'W'){
       season;
    }; 
  });
  if (result===undefined) {
    return result;
  } else {
    return result.year;
  };

};