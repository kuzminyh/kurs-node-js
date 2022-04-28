const sqlite = require("sqlite3"); //возвр модуль привяз к переменной
const postgres = require("pg");
console.log("hello word  ");
const generateId = require("./id"); //точка это текущ папка
console.log("New id:", generateId());

require("dotenv").config();
console.log(process.env.NODE_ENV);
console.log(process.env.DB_HOST);
