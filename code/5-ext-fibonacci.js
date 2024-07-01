// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  // write your code here
  let num = prompt('What number do you want the Fibonacci Sequence up to')
  let first = 0
  let second = 1
  let fibNum = 0
  let sequence = ''
  let left = 0

  while (fibNum < num){
   fibNum = first + second
   first = second
   second = fibNum
   sequence = (sequence + fibNum +', ')
   
  }
  left = fibNum -num
  alert('0, 1, ' + sequence)
 

}
