
const sum =require('./another_file.js');
// using this command, we include files in this application.
// this is how we import files from our own pc

// const kum=require('./utils.js')
// now to import the variables or the scope along with the file, 
// we need to specify the return type of the require function, which is string in this case
// so we need to store the function require with the some value or variable along with the require function
// the variable in which the require function stores the value, is completely different

x=sum(4,5);
console.log(x);
// console.log(kum);
// the thing to remember is that, the scope of the file is limited to itself
// this means that u can execute a file but the variables or constants in other file will not be same for this file
// you may have two variables with same names in two different file, and even after importing that file, the scope of the variable will be limited to that single file itslef
// for this to be done, we need to explicitly export all of this stuff through module.exports