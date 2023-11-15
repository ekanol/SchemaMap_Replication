var stringHash = require('string-hash');

var words = ["Faul sein", "Geld verschwenden", "Untreu sein", "Alleinerziehend"];
var hashedWords = words.map(word => stringHash(word));
console.log(hashedWords);
