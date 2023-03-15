// here we are setting-up the (socket.io) for the (client)side as well:
// or we can say setting-up the (socket) for the (clients):

//  for the (client)side:we create the socket function:with the help of the (class) objects:
// here we create (chatEngine) for the (clients):
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

    // here we are creating the (chat-room):
    // whenever the connection has been established between the both of them:we have to create  the (chat-room) for them:

    let self = this;




    // this socket or socket connection handler:will have two function in it:
    // first (function) is the (on):this basically tells that we are getting the (messsage):
    // second (function) is the (amit):this basically tells that we are sending the (message):

    // when socket  (on) function get triggered:then we will first connect with the (client):who trying to  sending us the (message): with the help of the (connect) Event:
    this.socket.on('connect', function(){

      console.log('connection established using sockets...!');


      // here we are creating (join_room) event:with the help of the (emit) function of the (socket):
      // here we are basically creating the chat-room:and sending the chat (request) to the other person for join the chat-room:
      // while sending the chat-room (request) to the (other person):we can also send some data with that:
      // like what is the name of the (chat-room):and who's the (user) is:

      self.socket.emit('join_room',{

        user_email:self.userEmail,
        chatroom:'codeial'
        

      });

      // here we are checking that  (user) joins the chat room or not:to which we have send the join (chat-room) request:
      self.socket.on('user_joined',function(data){

        console.log('a user joined the chat room',data);

      });

    });

    

    // here we create the (Event) on sending messages:

    // 1 = firstly that (message)  will go to the (server):with the (chat-box)ID:
    // 2 = and after that (server) will create another (Event):through which (server) will send that particular (user) message to the  Other (user):those were in that same (chat-room):
    // server will send that (message) in the same (chat-room):

    $('#send-message').click(function(){

      let msg = $('#chat-message-input').val();

      if(msg != ''){
        self.socket.emit('send_message',{
          message:msg,
          user_email:self.userEmail,
          chatroom:'codeial'
        })
      }

    });




  }


}
