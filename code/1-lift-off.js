// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  let count = prompt('Pick a number between 1 and 100')
 
  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }
   
  alert('Lift Off!')
}

function make1() {  
let max = prompt('Enter the maximum')
let inc = prompt('Enter the increment')
let count = 0
max =Number(max)
inc =Number(inc)

while (count <= max) {
  alert(count)
  left = max - count
  count = count + inc
}
alert('Done! With ' + left + ' left over.')
}

