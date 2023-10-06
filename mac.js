//import 'fs' module to work with the file system
const fs = require('fs');

// define func that takes callback func as parameter
function read_package_json(callback) {
  // read 'package.json' file in UTF-8 encoding
  fs.readFile('package.json', 'utf-8', (error, string_content) => {
    if (error) {
      //call the provided callback with error
      callback(error);
      return;
    }

    try {
      // parse contents of 'package.json' into JavaScript object
      const object_content = JSON.parse(string_content);      
      const size = Buffer.from(string_content).length;
      const info = {
        string_content,
        object_content,
        size,
      };
      // convert 'info' into JSON string
      const string_info = JSON.stringify(info, null, '\t');
      //write 'string_info' into 'textis/mac.txt' in UTF-8 encoding
      fs.writeFile('textis/mac.txt', string_info, 'utf-8', (error) => {
        if (error) {
          //call provided callback with error
          callback(error);
          return;
        }
        callback(null, 'info.txt has been created successfully.');
      });
    } catch (parseError) {
      callback(parseError);
    }
  });
}

read_package_json((error, res) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log(res);
    }
});