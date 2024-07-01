// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let numOfAttendees = prompt('How many people will you invite')
  let attendeeList = ''
  
  while (count < numOfAttendees) {
    let attendee = prompt('Enter the name of someone you will invite')
    attendeeList = attendeeList + attendee + ', '
    count = count + 1
  }
  
  alert(attendeeList) 
}

function make2() {
  // copy and paste your code here when you get to the Make step
  let count = 0
  let numOfNum = prompt ('How many numbers do you want to add together')
  let oldNum = 0
  oldNum = Number(oldNum)

  while (count < numOfNum) {
    let newNum = prompt('Give me a number') 
    newNum = Number(newNum)
    oldNum =  oldNum + newNum
    oldNum = Number(oldNum)
    count = count + 1
  }

   alert(oldNum)
    let average = (oldNum / numOfNum)
   alert('The avarage is ' + average)
}