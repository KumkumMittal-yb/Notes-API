// all modules are not global like console, they need to be declared first
// and loaded into the javascript fie
// require function helps us to load in the module

const fs= require('fs');
fs.writeFileSync('notes.txt','This file was created by node js. ');
// in the case of writeFileSync, it takes two arguements, that is:
// first is the file where the text is to be written
// second is the text to be written in the file so created

fs.appendFileSync('notes.txt','I am Kumkum');
//  to add text to the text already existing, and not overwriting it
// it takes arguements the same way as writeFileSync
