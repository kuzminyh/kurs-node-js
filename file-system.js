const fs = require("fs");
fs.writeFileSync("test.txt", "works", "utf8"); //синхронный метод
console.log(fs.readFileSync("test.txt", "utf8"));

////////////////////
fs.writeFile("test.txt", "works", "utf8", (err) => {
  //колбэк будет вызван когда операция завершится
  //
  if (err) {
    console.error(err);
    process.exit(1);
  }
}); //асинхронный метод
console.log(fs.readFileSync("test.txt", "utf8"));
