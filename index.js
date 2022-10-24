const object = require("./information");
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm a ${object.lastname} i'm studying at ${object.campus}`,
    e : "-O",
    T : "U "
}));
