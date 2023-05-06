var fs = require("fs");

fs.writeFile('write.txt', 'Hello Node', function(err) {
   if (err) {
      return console.error(err);
   }
      
   fs.readFile('write.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});

fs.readFile('hello.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});