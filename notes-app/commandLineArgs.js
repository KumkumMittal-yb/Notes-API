// Command line arguments are strings of text used to pass additional information to a program when an application is run through the command line interface (CLI) of an operating system. 
// Command line arguments typically include information used to set configuration or property values for an application.
// You can pass information to an application before it starts. 
// Command line arguments are passed as strings to your program. String data types can easily be converted to other data types within an application, making the arguments very flexible.
// We can easily read these arguments by the global object in node i.e. process object.

// console.log(process.argv);

// Each Node.js process has a set of built-in functionality, accessible through the global process module. The process module doesn't need to be required -
//  it is somewhat literally a wrapper around the currently executing process, and many of the methods it exposes are actually wrappers around calls into core C libraries.

// The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched. 
// The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. T
// he second element will be the path to the JavaScript file being executed. 
// The remaining elements will be any additional command-line arguments.
// The process.argv contains an array where the 0th index contains the node executable path, 1st index contains the path to your current file and then the rest index contains the passed arguments.
// if we give command as process.argv[2], it gives the command-line arguement at that position

// console.log(process.argv[2]);

const command =process.argv[2];
process.argv.forEach((val,index)=>{console.log(val)})


if(command==='add'){
    console.log("Adding note");
}
else if(command==='remove'){
    console.log("Removing note");
}


// = in JavaScript is used for assigning values to a variable
// == in JavaScript is used for comparing two variables, but it ignores the datatype of variable.
// === is used for comparing two variables, but this operator also checks datatype and compares two values.
