const fs=require('fs');
// const book={
//     title:'The Enemy',
//     author:'Emily'
// }

// const task={
//     name:"Kumkum",
//     planrt:"Earth",
//     age:21
// }

// // JSON.parse() takes a JSON string and transforms it into a JavaScript object.
// //JSON.stringify() takes a JavaScript object and transforms it into a JSON string.
// // console.log(JSON.stringify(book));
// // console.log(JSON.parse(JSON.stringify(book)));

// const bookJson=JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJson);

// fs.writeFileSync('1-json.json',JSON.stringify(task));

const task=fs.readFileSync('1-json.json');
const data=task.toString();
const user=(JSON.parse(data));
user.name='piyush';
user.age=18;
const a=JSON.stringify(user);
fs.writeFileSync('1-json.json',a);
console.log(a);


// const buffer =fs.readFileSync('1-json.json');
// const dataBuffer=buffer.toString();
// const data=JSON.parse(dataBuffer)
// console.log(data.title);

// const buffer =fs.readFileSync('1-json.json','UTF-8');
// console.log(buffer);
