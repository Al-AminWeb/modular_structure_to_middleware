import {userRoute} from "../modular/user/user.route";
import {Pool} from "pg";

export const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_XbaVFYH2ALs9@ep-red-cloud-a8itfva4-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
})
// language=TEXT

   export const initDB = async () => {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password TEXT NOT NULL,
        AGE INT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW() 
    );
    `)
    console.log("data connected")
}
