function calculateXPfromEstimate(estimate) {
  if(estimate === 3){
    return 4500
  }else if (estimate === 2) {
    return 2000
  }else if (estimate === 1) {
    return 650
  }else {
    return 0
  }
}

module.exports = {calculateXPfromEstimate}
