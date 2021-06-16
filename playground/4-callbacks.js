setTimeout(()=>{
    console.log("Two seconds up");
},2000)

const names=['Kumkum','Piyush','JAi'];
const shortnames = names.filter((name)=>{
    return name.length<=4;
})

console.log(shortnames);
