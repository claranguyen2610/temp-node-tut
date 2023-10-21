
const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log('1' + filePath);

const base = path.basename(filePath);
console.log('2' + base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
