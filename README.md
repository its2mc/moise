# moise
n^t load test for morphbridge... 

<h1>Info</h1>
<p>Making noise with morphbridge so moise. Thought it might be an interesting experiment to try out. 
Each node rebroadcasts the message resulting in an increasing message load. If N is the number of nodes.. then
the message load will increase by N^t where t is the number of cycles beginning with the first message. As you
can tell the messages increase more or less exponentially so you should be carefull about your ram running out.
An extension of this project would be to use each node to modify a global message sent to try and create music
from the cacophany of messages getting sent here and there. Maybe each node can contribute an equation to 
recieved messages and rebroadcast the contribution, increasing the length of the messages to be sent. 
Another node can then read the message stream as music data to be played.
</p>
