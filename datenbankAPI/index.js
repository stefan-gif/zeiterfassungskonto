import express from 'express';
import appRouter from './routes/index.js';
import "./db/index.js";
import { connectToDatabase } from './db/index.js';
import cors from 'cors';


const app = express();

//#region middlewares

app.use(cors({ origin: process.env.FRONTEND_URL }));

app.use(express.json());

app.use("/api/v1/zeiterfassungsDB", appRouter);
//#endregion

const PORT = 5000;

connectToDatabase().then( () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch( (err) => {
  console.error("Error connecting to database: ", err);
  process.exit(0);
});