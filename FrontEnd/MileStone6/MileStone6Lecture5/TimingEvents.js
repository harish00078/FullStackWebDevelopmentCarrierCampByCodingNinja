// here we learn about timing Events:
// Timing-Events: the timing events allow us to execute a peace of code at a specific time interval:

// the time interval happens here in the miliseconds.so we have to  provide the value to the time-event method by keeping this thing in the mind:

//we have to provide the two things to the time-event method:
// 1 = first is the function-name;
// 2 = second is the time-interval:

// like we create a function here:
// here we create vairable so we can count on the seconds.that hwo many times our  code get executed:and how much seconds it gets:
var sec = 1;
function sayHello() {
  console.log("Hello", sec);
  sec++;
  // we also have a another type of the (set-interval) is for (stoping) the set-interval:
  // means using this type we can stop the setInterval repeadily-sqeunece at some particular time.if we want: that methods name is (clear-Interval):
  if (sec == 6) {
    // means stop repeadily sequence of the set-Interval:
    // In this method we also have to provide the  function or variable as a argument to the clearINterval method:
    clearInterval(id);
  }
}

// 1 = here we are using the time-event method named as (setTimeout):
// this method will only print the output (one-time):

// we have to provide two things to this method:
// 1 = functionL:
// 2 = time-interval acc to the miliseconds:
// so we want that our acc code will we execute after the one-second:
// then the one-second will we in the milisecond is (1000):means 1sec = 1000mm:
// setTimeout(sayHello,2000);

// here we have other method of time-event:that will print the output:(repedialy):
// name of that method is (setInterval):
var id = setInterval(sayHello, 1000);
