import { db } from "../database.js"

export const getUsers = async (req, res) => {
    const queryText = `
    SELECT * FROM users
    `
    const result = await db.query(queryText);

    return res.json({ result: result.rows })
}

export const createUser = async (req, res) => {
    const queryText = `
        INSERT INTO users (name, email)
        VALUES ('${req.body.name}', '${req.body.email}');
    `

    const result = await db.query(queryText);
    return res.json(result)
}