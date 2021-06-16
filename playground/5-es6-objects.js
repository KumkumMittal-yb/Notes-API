//Object property shorthand

const name="Kumkum";
const userAge=21;

const user={
    name,//shorthand for same variable names
    age:userAge,
    location:'Rajsamand'
}
console.log(user);

//object destructuring

const product={
    label:'red notebook',
    price:3,
    stock: 209,
    salePrice:undefined
}
// const label=product.label;
// const stock= product.stock;

// const {label:productLabel, stock, rating=5} = product;
// console.log(productLabel,stock,rating);

const transaction =(type,{label, stock=0}= {}) =>{
    console.log(type,label,stock);
}
transaction('order',product);