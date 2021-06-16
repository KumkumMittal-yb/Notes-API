// Arrow functions allow us to write shorter function syntax:
// hello = () => {
//     return "Hello World!";
//   } 
// If you have parameters, you pass them inside the parentheses:


// const square1 = function(x){
// return (x*x);
// }

// const square2 = (x)=>{
// return (x*x);
// }
// const square = (x)=>(x*x);

// console.log(square1(3));
// console.log(square2(3));
// console.log(square(3));


const event ={
    name:"Birthday",
    guestList:["Kumkum","piyush"],
    printGuestList: function(){
        // const that =this
        // can be used in function inside the function 

        console.log(" Guest list for " + this.name);

        this.guestList.forEach((guest)=>{
            console.log(guest+ " is attending "+ this.name);
            // to reference the parent, arrow function is used in case of this keyword
        })
    }
}


// const event ={
//     name:"Birthday",
//     printGuestList(){
//         console.log("Guest list for " + this.name);
//     }
// }
// can also b written in this manner



// const event ={
//     name:"Birthday",
//     printGuestList: ()=>{
//         console.log("Guest list for " + this.name);
//     }
// }
// this code wont work, cuz arrow functions dont bind their own this value
event.printGuestList();