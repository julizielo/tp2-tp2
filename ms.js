//import 'fs' module for working with the file system
const fs = require("fs");

try {
  // read 'package.json' file in UTF-8 encoding
  const string_content = fs.readFileSync("package.json", "utf-8");
  //parse contents of 'package.json' into JavaScript object, store as 'object_content'.
  const object_content = JSON.parse(string_content);
  const size = Buffer.from(string_content).length;
  const info = {
    string_content,
    object_content,
    size,
  };

  // convert 'info' into JSON string
  const ok = JSON.stringify(info, null, "\t");
  const not_ok = JSON.stringify(info);
  //log 'ok' JSON string
  console.log(ok);
  console.log("=========================");
  //log 'not_ok' JSON string
  console.log(not_ok);
  //write 'ok' JSON string into 'textis/ms.txt' in UTF-8 encoding
  fs.writeFileSync("textis/ms.txt", ok, "utf-8");
} catch (error) {
  //if error, log error message
  console.error("Error reading the file:", error);
}
