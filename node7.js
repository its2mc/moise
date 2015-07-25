/* 
* This work has been done by Phillip Ochola Makanyengo
* Email: its2uraps@gmail.com
*
* This code uses the morphbridge module to stress test
* the messaging platform by implementing a mesh network in
* which messages increase at the rate of N^2. The rate at
* which the messages increase depends on the time lag that is 
* given to reply to a message a node recieves. The aim is that
* per every message cycle the max number of messages will 
* increase by N^2..
* 
* Please refer to the author when using the code.
*
*/

//Nodejs implementation of a http server

// Import required Modules
var comms = require('morphbridge').comms,
	logger = require('morphbridge').logger;

//Handle internode messages
/*
Place your own function to handle messages recieved by the node.
*/ 
var handle = function(msg){
  logger.logStat(" Node 7 log - ");
  setTimeout(function(){ 
    comms.transmit(msg);
  }, 3000);
};

//Socket Initialisation
comms.init(handle); //Pass message handling function to sub_socket

console.log("Started Node 7");