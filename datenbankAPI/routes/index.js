import { Router } from 'express';
import { creatAufgaben, creatTagesKonto, deletetask, getAllUser,  getAufgaben,  getAufgabenDaten,  getUser, getUserUrlaub, updateUser,getTagesKonto } from '../handlers/index.js';

const appRouter = Router();

appRouter.get("/",getAllUser);
appRouter.get("/:id",getUser);
appRouter.post("/create",creatAufgaben);
appRouter.put("/update/:id",updateUser);
appRouter.delete("/delete/:id",deletetask);
appRouter.get("/urlaub/:id",getUserUrlaub);
appRouter.get("/aufgaben/:id",getAufgaben);
appRouter.get("/aufgabendaten/:id",getAufgabenDaten)
appRouter.post("/zeitkonto/create", creatTagesKonto)
appRouter.get("/zeitkonto/:id", getTagesKonto)

export default appRouter;