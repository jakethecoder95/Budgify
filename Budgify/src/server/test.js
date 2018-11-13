require('babel-register'); 
/************************************************ 
*  Here is the problem line. It throws a syntax
*  error because 'import' is not recognized. So 
*  node does not recognize 'import'.  You cant do 
*  require() either because it doesnt recognize
*  the 'export' in the index file. I eventually need 
*  the data obj from inside the Budget Controller
*  (in index.js). This is just me testing things.
*/
import { data } from '../client/index';
/////////////////////////////////////////////////

const fs = require('fs');

let dataJson = JSON.stringify(data);

const writeData = (d) => {
    fs.appendFile('./es6/test-data.json', d, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

writeData(dataJson);


/***********************************************************
*  MY GOAL:
*  I already have the login created and stored in 
*  the default sql DB that Visual Studio provides. I   
*  can get the unique user email as a js variable on the  
*  client side when they are logged in. I just need to 
*  store/get their budget info from the client side and 
*  store it... somehow.  I tried just sending it strait  
*  to a json file from index.js but npm's 'fs' wasnt 
*  working on the js files that communicates w/ the client,
*  just on the node.js files like this this one. So if
*  if I coulf just get access to variables in index.js
*  I feel like I could do something with that data...
*  
*  Hope this make sense... is there a better way??? I 
*  feel like it shouldnt be this difficult. 
*
*  (Alot of the dependencies in package.json are me trying
*  to get this to work lol)
*/