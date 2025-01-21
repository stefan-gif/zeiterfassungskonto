import { Router } from 'express';
import { creatProduct, deletetask, getAllUser,  getAufgaben,  getAufgabenDaten,  getUser, getUserUrlaub, updateProduct } from '../handlers/index.js';

const appRouter = Router();

appRouter.get("/",getAllUser);
appRouter.get("/:id",getUser);
appRouter.post("/create",creatProduct);
appRouter.put("/update/:id",updateProduct);
appRouter.delete("/delete/:id",deletetask);
appRouter.get("/urlaub/:id",getUserUrlaub);
appRouter.get("/aufgaben/:id",getAufgaben);
appRouter.get("/aufgabendaten/:id",getAufgabenDaten)

export default appRouter;