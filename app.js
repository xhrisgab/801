const express = require("express");
const chalk = require("chalk");
const path = require("path");

//Usamos express
const app = express();
//definimos las carpetas publicas
app.use("/css", express.static(path.join(__dirname, "public", "css")));
app.use("/js", express.static(path.join(__dirname, "public", "js")));

//definimos el uso de ejs para plantillas y la carpeta de vistas 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/ubc", (req, res) => {
    res.render("ubc");
});

app.listen(3000, () => {
    console.log(chalk.bgHex("#ff69b4").white.bold(" 💥 EXPRESS SERVER STARTED 💥 "));
    console.log(chalk.green("Running at: ") + chalk.cyan("http://localhost:3000"));
    console.log(chalk.gray("Press Ctrl+C to stop the server."));
});