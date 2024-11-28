import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";

const configViewEngine = (app) => {
    //config static files
    const __dirname = dirname(fileURLToPath(import.meta.url));
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.static('public'))

    // config view engine
    app.set("views", path.join(__dirname, '../views'));
    app.set("view engine", "ejs");

    //req.body Config
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}
export { configViewEngine }