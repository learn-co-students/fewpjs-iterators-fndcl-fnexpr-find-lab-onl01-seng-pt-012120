function superbowlWin(o){
  let toReturn = (o.find( ({ result }) => result === "W"));
  if(toReturn){
  return toReturn["year"];
}
}
