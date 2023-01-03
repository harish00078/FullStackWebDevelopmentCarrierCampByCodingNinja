// here we are creating [our first server]:

// using one of the (modules) of the javascript.named as (http):

// HTTP: web server is a program that uses (HTTP = hyper text transfer protocol) to serve the files that forms web-pages to the users. In response to their requests.

// (request) means like we are writing the (url) of any website on our browser.and In the reponse we are getting that website or the files those  forms that webpage  from the server.

// 1 = first thing we have to do for creating a server in our local machine.we have to put the (npm = Node Package Manager) in the file or folder.that we want to use as (server).
// a => for that we have to open that (folder) in the terminal.
// b => and put the (npm) in it. using (npm init) command.
// c => after that we have to provide some information in the terminal for creating a server.

//  2 =>  here we are getting the (HTTP) modules  by  using the (require) property of the javascript:
const http = require("http");

// 3 =  here we are creating (ports) for our server:
// (ports):A port in computer networking is how a computer can use a single physical network connection to handle many incoming and outgoing requests by assigning a port number to each. The numbers go from 0 to 65535, which is a 16-bit number.
//Some of these port numbers are specifically defined and always associated with a specific type of service :-- for example, File Transfer Protocol (FTP) is always port number 21 and Hypertext Transfer Protocol web traffic is always port 80. These are called well-known ports and go from 0 to 1023.

const port = 8000;

// IMP = there is a module that is build in a (node-js).the name of that module is ('fs').which is used to (read) and (write) from the (files):
const fs = require('fs');



// here we are creating some (response) in our server:
// this is what the server does:it will get (request) from the (user) and gave him some (reponse).acc to its request:

// 1 = for that we have to create the (request-Handler) function:
// 2 = the request-handler function uses a two arguments:
// first = request(req):
// second = response(res):

function requestHandler(req, res) {
  // here (req.url) will gave us a output of our server's (urL).
  // if we write something in our server's (url):that will we printed in our console:because we are printing the (url).or we can say the (request of the url).that we are getting from the user basically.

  // IMP = here we do this so we can learn that here we are getting the (request) from the users in the (form) of (url's) or it may be in any other form also.
  console.log(req.url);

  // => response-code (200).means that our server is working fine.there are different-2 response-codes as per acc to the server's working.like if server have some error that we have some different  response-code: for example (404) we see this many time:

  // [header] => we have to define the things to the (header) in the server.that what kind of content we gaving to the browser.
  //  1 = if we want to send some hidden information from the server to the browser.we have to put that into the (header)
  // 2 = we also have to define the (content-type) to browser.that what kind of content is coming in the response of user (request): we can do that through the (header):

  // here we are writing header for the (browser):
  //  and here we defining the (content-type) for our (response):
  // here we are using the (text/html) type-content:
  res.writeHead(200, { "content-type": "text/html" });



  // here we are creating a (filePath) variable because we want to use  a multiple file-paths:
  let filePath;

  // here we are using a (switch) function on the (url) request that we get from the user:
  switch(req.url){
    // and under the (switch) function we are providing a  different-different cases to files.acc to the (url) that is given from the user or requested from the user: iwith the help of (case)function:

    case '/':
      filePath = './index.html';
      break; // we also have to use the (break) function.after giving a (file) to the one-case: if we did not do that then system will automatically jump on the other (file) by itself:  

    case '/profile':
      filePath = 'profile.html';
      break;

    // if we have  default (url) request from the user: for that we can use the (default) function:
    default:
      filePath = './404.html';

  }

  // and after checking a (url) through (case) function.and getting a (file) for that the user is (requested).
  // know we have to read that file: and gave to the user in the (response):
  fs.readFile(filePath, function(err,data){
    if(err){
      console.log('error',err);

      return res.end('<h1> Error </h1>')
    }

    return res.end(data);
  })

  



  // here we are using the (fs-modules).for readind our files.like (html-files) etc:
  // we have to gave him a path of the file that we want to be read:
  // we are aslo creating a (function0 with in the (readfile-module).which as a two arguments:
  // first = one will gave the error.
  // second = will provide the (data).after reading a file:

  // fs.readFile('./index.html', function(err, data){

  //   // If  there is error in the file:
  //   if(err){
  //     // here we are printing the error in (terminal):
  //     console.log('error',err);
  //     // and here we are giving the error in the response also to the user:
  //     return res.end('<h1> Error!</h1>')
  //   }

  //   // If file  does not have the any error:then we gave the data or the file in the response to the browser or the user:
  //   return res.end(data); 
  // })


  // and here we are providing some (response) to that (request):
  // here we are using that (content-type): In our response: so we can gave  our response in the form of (content-type) that we have use:

  // res.end("<h1> Gotcha! </h1>");

}




// 4 = here we are created (our) own server. by using the (createServer) property of the javascript.

// under our server or (createServer) property of the javascript. we are using  our (requestHandler) function.
const server = http.createServer(requestHandler);

// 5 = here we are using (listen) property of the javascript.for starting a server to getting or listening the connections or the requests from the user. we are using (listen) property:
// listen = Start a server listening for connections. A net.Server can be a TCP or an IPC server depending on what it listens to.

// and we are also creating a (error) function with in it.so that if the server does not work then we have to gave this error to the (user):
server.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server is running on port: ", port);
});

// for using our own created server in our (local-machine) browser:

// IMP = first we have to run the server file in the terminal.by using the command (node file-name with js extension).

// then we have two ways to use our own created server in the (browser) of our local machine:
// first is that we can simple write (localhost).
// second is that we can use the (127.0.0.1): this is same as the (localhost):
