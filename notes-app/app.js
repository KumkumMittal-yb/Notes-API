const chalk=require('chalk');
const { describe, demandOption, string, argv } = require('yargs');
const yargs=require('yargs');
// Yargs module is used for creating your own command-line commands in node.js and helps in generating an elegant user interface. 
// This module makes command-line arguments flexible and easy to use.
const notes = require('./getNotes.js');

// customize yargs version
yargs.version('17.0.1');

// add,remove,read, list

// add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder:{
        // title and body are properties for builder
        title:{
            describe:'Note title',
            demandOption: true,
            // setting demandOption to be true means, it needs to be provided
            type: 'string'
            // the type is set to string to make it easier to handle the title 
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type:'string'
        }
    },
    // Function for your command
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// remove command
yargs.command({
    command:'remove',
    describe: 'remove a new note',
    builder:{
        title:{
            describe:'title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
        
    }
})

// debugger

//read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//lsit command
yargs.command({
    command:'list',
    describe: 'listing the notes',
    handler(){
        notes.listnotes();
    }
})

// console.log(process.argv);
yargs.parse();
// To set above changes, yargs.parse() or this console statement is necessary, to pass out the arguements
// console.log(yargs.argv);



