console.log("another.js");

const name='Kumkum';

const add = function(a,b){
    return a+b;
}

module.exports = add;
// whatever you assign to module,exports, that is the return value from when you require the file
// whatever we assign to module.exports is what other files can get access to
