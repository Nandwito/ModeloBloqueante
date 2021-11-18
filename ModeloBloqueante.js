var fs = require("fs");
fs.readfile('elquijote.txt', 'utf8', (error, content) =>
            console.log(content));
console.log("Abriendo el archivo...");
console.log("haciendo otra cosa");
console.log(process.uptime());
