
// My solution
function superbowlWin(record){
    let answer = record.find( function(e) { return e.result === "W"})
    return !!answer ? answer.year : undefined
}

// Flatiron Solution
// superbowlWin = (record) => {
//   let result = record.find( record => record.result === "W" )
//   return !!result ? result.year : undefined
// }