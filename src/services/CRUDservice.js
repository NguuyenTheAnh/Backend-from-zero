import { db } from "../config/database.js";

const getAllUsers = async () => {
    try {
        const result = await db.query(
            `SELECT * FROM Users`
        );
        return result.rows;
    } catch (error) {
        console.log(error);
    }
}

export { getAllUsers };