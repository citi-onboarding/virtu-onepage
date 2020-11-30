
<p align="center">
  <a href="http://citi.org.br">
    <img src="https://raw.githubusercontent.com/jrmmendes/citi-doc-utils/master/citi_black.png" alt="CITi logo"/>
  </a>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/staging%20branch-develop-%23E35F61.svg" alt="staging">
  <img src="https://img.shields.io/badge/production%20branch-main-%23566573.svg" alt="production">
</p>


<h1>Virtù Consultoria Onepage</h1>
<hr width = “2” size = “100”> 
<h3>How to install and run the project:</h3> 

<h4>1. Install dependencies</h4>
Run yarn install or npm install on both client and server folders, this command will install the project's dependencies.

<h4>2. Create MongoDB cluster and get the url</h4>
To do this, create a Mongo DB account, then create a Mongo cluster for the project. Now on the Mongo DB screen, go to: <b> Database Access> Database Users> Add New Database User</b> and add a user, make sure you remember the username and password, we will need them. The next step is go to: <b> Network Access> Ip Whitelist> Add IP Adress> Current Ip Adress</b> to add your current ip address to the cluster's whitelist, you will need to do this with every source that will access your database or choose the option that allows any Ip to access.
</br>
<b>The mongo url will be:</b>

mongodb://[USER]:[PASSWORD]@[SHARD_URL]/[DB_NAME]?ssl=true&replicaSet=[SHARD_NAME]&authSource=admin&retryWrites=true&w=majority

<h4>3. Create cloudinary account</h4>
Go to cloudinary images website and create an account.
Under the Account Details section is a url named API environment variable this is your cloudinary url.

<h4>4. Create a env file</h4>

Create a file named .env and, inside of it, place this:

PORT=[PORT]</br>
MONGO_URI=[MONGO_URI]</br>
COOKIE_SECRET=[COOKIE_SECRET]</br>
CLOUDINARY_URL=[CLOUDINARY_URL]

Where:</br>
[PORT] is which port you want the server to run on (usually 3001).</br>
[MONGO_URI] is the uri you got in step 2.</br> 
[COOKIE_SECRET] is a random string used for authentication on the admin.</br>
[CLOUDINARY_URL] is the url you got in step 3.

<h4>5. running the servers</h4>
To run this project, we will need to run two servers, the react one on /client and keystone on /server. </br>
The command to run react is yarn start or npm start depending on which tool was used on installation, the react server will run on port 3000 by default.</br>
To run keystoneJS server, use the command node index.js, the server will run on whatever port is in the variale in the env file, you will find the admin interface in http://localhost:[PORT]/admin

<hr width = “2” size = “100”>
<h3>The development team - Squad Debs <3</h3>
  
<p align="left">
    <img width="250px" heigth="450px" src="https://img.quizur.com/f/img5df9868c46deb2.16698578.jpg?lastEdited=1576634007"/>
  <p align="right"><h4>Deborah :heartpulse:</h4> <h4>Arthur Brito :blue_heart:</h4> <h4>Lucas Melo :green_heart:</h4> <h4>Shellyda Barbosa :purple_heart:</h4></p> 
</p>

