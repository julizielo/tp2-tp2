//import 'fs' module for working with the file system
const fs = require('fs').promises;
//define an asynchronous function 'read_package_json'
async function read_package_json() {
  try {
    //read 'package.json' file in UTF-8 encoding, store as 'contenidoStr'.
    const string_content = await fs.readFile('package.json', 'utf-8');

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

    //write 'string_info' into 'textis/mapaa.txt' in UTF-8 encoding
    await fs.writeFile('mapaa.txt', string_info, 'utf-8');
    console.log('info.txt has been created successfully.');

  } catch (error) {
    //if error, log error message
    console.error('Error:', error);
  }
}

read_package_json();
