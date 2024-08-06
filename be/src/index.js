import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser';
import { userRouter } from './router/user.js';
import { db } from './database.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);


app.post('/createUserTable', async (req, res) => {
    const queryText = `
        CREATE TABLE IF NOT EXISTS users (
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE
        )
    `
    const result = await db.query(queryText);
    return res.json({ result })
})


app.listen(8000, () => {
    console.log('Server started');
})