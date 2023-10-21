//CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)
const names = require('./4-firstModule');
const sayHi = require('./5-secondModule');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

sayHi('Clara');
sayHi(names.hani);
sayHi(names.loraNguyen);
