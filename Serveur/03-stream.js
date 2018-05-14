const fs = require('fs');

process.stdout.write('Hello');
process.stdout.write('!');

const rs = fs.createReadStream('.editorconfig');
rs.pipe(process.stdout);
// ls . | grep .js
