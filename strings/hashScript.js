var stringHash = require('string-hash');

var words = ["Judentum/Juden", "Islam/Muslime"];
var hashedWords = words.map(word => stringHash(word));
console.log(hashedWords);

//node hashScript.js
//3884831142, 1452120566
//3884831142, 1452120566