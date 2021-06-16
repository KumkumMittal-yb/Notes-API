
const fs=require('fs');
const chalk=require('chalk');

const getnotes=()=>{
    return("Your notes...")
}
const addNote= (title,body)=>{
    const notes = loadNote();

    // The filter() method creates an array filled with all array elements that pass a test (provided as a function).
    // filter() does not execute the function for array elements without values.
    // filter() does not change the original array
    // Array filter method says, if thte value is true, return the value, else dont return it

    // array.filter(function(currentValue, index, arr), thisValue)

    // duplicateNotes will check out if the note with same title is added or not

    // const duplicateNotes = notes.filter((note)=> {
        //     return note.title === title
        // })
        // the problem with array.filter method is that if a duplicate note is found, it doesnt stop there, it keeps on searching the rest of the array
        // but this the function of duplicate notes not allow user to add duplicates
        


    // The find() method returns the value of the first element in an array that pass a test (provided as a function)
    const dupNotes=notes.find((note)=>{
        return note.title===title;
    })

    if (!dupNotes) {
        // The push() method adds new items to the end of an array, and returns the new length.
        // The new item(s) will be added at the end of the array.
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title already exists!'))
    }
}


const saveNotes =(notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNote=()=>{
    // The try...catch statement marks a block of statements to try and specifies a response should an exception be thrown.
    try{
        const databuffer=fs.readFileSync('notes.json');
        const dataJson= databuffer.toString();
    return JSON.parse(dataJson);
    }
    
    catch(e){
        return[];
    }

}

const listnotes=()=>{
    console.log(chalk.yellowBright.inverse('Your notes...'));
    const notes=loadNote();
    notes.forEach((note)=>{
    console.log(note.title);
        });
}

const removeNote= (title)=>{
    const notes = loadNote();
    const removeNotes = notes.filter( (note)=> {
        return note.title !== title
    })
    // this statement means, filter out everything that does not have the title given
    saveNotes(removeNotes);
    if(removeNotes.length==0){
        console.log(chalk.red.inverse("No note with title: "+title));
    }
    else{
        console.log(chalk.green.inverse("Note removed with title: "+title));
    }
}
// debugger
const readNote = (title) => {
    const notes = loadNote()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}



module.exports = {
    getnote:getnotes,
    addNote: addNote,
    removeNote: removeNote,
    listnotes:listnotes,
    readNote: readNote
}
// npm init command on terminal initializes itself
