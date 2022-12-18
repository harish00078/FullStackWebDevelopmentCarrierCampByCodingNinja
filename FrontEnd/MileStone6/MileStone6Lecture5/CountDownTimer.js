// here we are creating a countdown-timer:using timing-event methods:

// here we create variable that took the value for the countDown:
var count = 10;

// here we create a timer function:
function timer(){
// 1 = under timer function: we create a if statement: when count becomes zero:
  if(count == 0){
    console.log("Time up!!");

    // 2 = then we have to stop executing the function:for that we use the (clearInterval) method::
    clearInterval(id);
    // and we also have to retunr the value after completing this statement:so we did not get jump on this function again:
    return;
  }

  // here we are printing the countDown values:
  console.log(count);
  // and minimizig from that values oen by one:
  count--;
}

// here we are using the serInterval function:for printing the countDown values agian and again:   
var id = setInterval(timer,1000);

