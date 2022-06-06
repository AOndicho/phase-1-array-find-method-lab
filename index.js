// code your solution here
function superbowlWin(Array) {
  for (let item of Array) {
    if(item.result === "W"){
        return item.year
    }
    
  }

}

Array.find(superbowlWin)