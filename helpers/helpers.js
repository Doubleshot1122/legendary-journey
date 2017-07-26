function calculateXPfromEstimate(estimate) {
  if(estimate === 3){
    return 150
  }else if (estimate === 2) {
    return 100
  }else if (estimate === 1) {
    return 50
  }else {
    return 0
  }
}

function calculateProjectStatus(status) {
  if (status === 'finished') {
    return true
  }else {
    return false
  }
}

module.exports = {calculateXPfromEstimate, calculateProjectStatus}
