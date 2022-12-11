// here we are working on the problem  to calculate the BMI = (Body Mass Index) 
var yourWeight = 58;
var yourHeight = 1.60;

var bmi = yourWeight/(yourHeight ** 2);

console.log("Your Body Mass Index is: " + bmi + " and");

  if(bmi < 18.5)
  {
      console.log("You are Underweight.");
  }
  else if(bmi >= 18.6 && bmi <= 24.9)
  {
      console.log("You are Healthy.");
  }
  else if(bmi >= 25 && bmi <= 25.9)
  {
     console.log("You are Overweight.");
  }
  else if(bmi >= 30)
  {
      console.log("You are Obese.");
  }
  else
  {
      console.log("Invalid input.");
  }