// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  // write your code here
  let factorNum = prompt('What number do you want the factorial for')
  factorNum = Number(factorNum)
  let factor = 1
  while (factorNum > 0) {
    factor = factor * factorNum
    factorNum = factorNum - 1
  }
    alert('The factorial is ' + factor)
}
