import pg from "pg";

const DATABASE_CONNECTION_STRING = "postgresql://expense_owner:hUTLf3YbGo1X@ep-frosty-meadow-a5dan0go.us-east-2.aws.neon.tech/expense?sslmode=require";


export const db = new pg.Pool({
    ssl: true,
    connectionString: DATABASE_CONNECTION_STRING
})