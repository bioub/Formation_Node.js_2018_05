const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, '.editorconfig'), (err, buffer) => {
  console.log(buffer.toString());
});
