import { db } from "../config/database.js";
import { getAllUsers } from "../services/CRUDservice.js";

const getHomePage = async (req, res) => {
    let listUsers = await getAllUsers();
    res.render("home.ejs", { listUsers: listUsers });
}

const getCreatePage = (req, res) => {
    res.render("create.ejs");
}
const postCreateUser = async (req, res) => {
    try {
        let email = req.body.email;
        let name = req.body.myName;
        let city = req.body.city;

        await db.query(
            `INSERT INTO Users(email,name,city)
            VALUES ($1,$2,$3)`,
            [email, name, city]
        );
        res.send("Create successful");
    } catch (error) {
        console.log(error);
    }
}
const getUpdatePage = async (req, res) => {
    const id = req.params.id;
    try {
        let email = req.body.email;
        let name = req.body.myName;
        let city = req.body.city;

        await db.query(
            `INSERT INTO Users(email,name,city)
            VALUES ($1,$2,$3)`,
            [email, name, city]
        );
        res.send("Create successful");
    } catch (error) {
        console.log(error);
    }
}

export { getHomePage, postCreateUser, getCreatePage, getUpdatePage };