//import 'fs' module for working with the file system
const fs = require('fs').promises;

// read 'package.json' file in UTF-8 encoding
fs.readFile('package.json', 'utf-8')
  .then((string_content) => {
    //parse contents of 'package.json' into JavaScript object, store as 'object_content'.
    const object_content = JSON.parse(string_content);
    const size = Buffer.from(string_content).length;
    const info = {
      string_content,
      object_content,
      size,
    };

    // convert 'info' into JSON string
    const string_info = JSON.stringify(info, null, '\t');

    //write 'string_info' into 'textis/maptc.txt' in UTF-8 encoding
    return fs.writeFile('textis/maptc.txt', string_info, 'utf-8');
  })
  .then(() => {
    console.log('info.txt has been created successfully.');
  })
  .catch((error) => {
    //if error, log error message
    console.error('Error:', error);
  });