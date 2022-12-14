var weekdays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

function returnDay(x){
  // one way to do it:

  // if(x < 1){
  //   return null;
  // }
  // if(x > 7){
  //   return null;
  // }else{
  //   return  weekdays[x];
  // }

  // other way is : (OR) operator:
  if(x < 1 || x > 7 ){
    return null;
  }else{
    return weekdays[x];
  }
}

console.log(returnDay(3));