// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  // write your code here
  let seriesNum = prompt('What number do you want the Square Series for?')
  seriesNum = Number(seriesNum)
  let squareSer =''

  while (seriesNum > 0) {
  square = seriesNum * seriesNum 
  squareSer = (squareSer + square + ' ')
  seriesNum = seriesNum - 1
  }

alert('The square series is ' + squareSer + '')

}