import dotenv from "dotenv";
import { createPool } from "mysql2/promise";

dotenv.config();

const pool = createPool({
  
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE_NAME,
  user: process.env.MYSQL_USER,
});

const connectToDatabase = async () => {
  try {
    await pool.getConnection();
    console.log("Connected to database Successfully");
  } catch (error) {
    console.error("Error connecting to database: ", error);
    throw error;
  }
};

export { pool, connectToDatabase };