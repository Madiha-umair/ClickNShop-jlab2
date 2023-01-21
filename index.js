//IMPORT REQUIRED MODULES
const { response } = require("express");
const express = require("express");
const path = require("path");

//Set up Express app and port number
const app = express();
const port = process.env.PORT || 8888;

//Set up template engine
app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "pug");

//Set up static file paths
app.use(express.static(path.join(__dirname, "public")));

var links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Clothes",
        path: "/clothes"
    },
    {
        name: "Shoes",
        path: "/shoes"
    },
    {
        name: "Handbags",
        path: "/handbags"
    }
];

//Page routes
app.get("/", (request, response) => {
    //response.status(200).send("Test page 3");
    response.render("index", { title: "Home", menu: links });
});
app.get("/clothes", (request, response) => {
    response.render("clothes", { title: "Clothes", menu: links });
});
app.get("/shoes", (request, response) => {
    response.render("shoes", { title: "Shoes", menu: links });
});
app.get("/handbags", (request, response) => {
    response.render("handbags", { title: "Handbags", menu: links });
});

//Set up server listening
app.listen(port, ()=> {
    console.log(`Listening on http://localhost:${port}`);
});