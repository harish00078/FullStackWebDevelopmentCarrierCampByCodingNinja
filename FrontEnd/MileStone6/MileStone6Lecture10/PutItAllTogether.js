// here we use all the four rules:

var person = {
  name: 'John',
  ask: function(){
    console.log(this);
  }
}

new (person.ask.bind(person))();
