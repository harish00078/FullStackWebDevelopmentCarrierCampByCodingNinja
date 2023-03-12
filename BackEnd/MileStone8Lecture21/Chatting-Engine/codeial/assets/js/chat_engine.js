// here we are setting-up the (socket.io) for the (client)side as well:

//  for the (client)side:we create the socket function:with the help of the (class) objects:

class ChatEngine{

  // class constructor will take two things as arguments:
  // In first argument it will have the (id) of the (chat-box):
  // In second argument it will have the (emial-ID) of the (user):to know that which (user) or we can say who initiated the socket connection:
  // and also to  knows that: who is sending the (message):
  constructor(chatBoxId, userEmail){

    this.chatBox = $(`#${chatBoxId}`);
    this.userEmail = userEmail;


    // here we connect the (client)side with the (socket) server:with the help of the inbuilt (io) function:which is provided by the (socket) CdnJs file:
    this.socket = io.connect('http://localhost:5000');


    // here we are connecting with the (client) side function:with the socket (connection-handler) that we have created:

    // we only connect the (client) side with the socket (connection-handler):if the (client) side (constructor) will have the (email) of the (user) with in it:
    if(this.userEmail){
      this.connectionHandler();
    }


  }

  // here we create the (socket) connection-handler for the (client) side:with the (server) side:
  connectionHandler(){
    // this socket or socket connection handler:will have two function in it:
    // first (function) is the (on):this basically tells that we are getting the (messsage):
    // second (function) is the (amit):this basically tells that we are sending the (message):

    // when socket  (on) function get triggered:then we will first connect with the (client):who trying to  sending us the (message): with the help of the (connect) Event:
    this.socket.on('connect', function(){

      console.log('connection established using sockets...!');

    });

  }


}
