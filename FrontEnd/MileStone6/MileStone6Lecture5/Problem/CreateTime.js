function timer(){
  for(let i = 1; i <= 5; i++){
    // here we are using the setTimeout method for setting the different times to the different values:
    setTimeout(function(){
      console.log(i);
    }, i*1000);
  }
  console.log("hello ninjas");
}

timer();