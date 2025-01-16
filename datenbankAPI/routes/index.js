import { Router } from 'express';
import { creatProduct, deleteProduct, getAllUser,  getAufgaben,  getUser, getUserUrlaub, updateProduct } from '../handlers/index.js';

const appRouter = Router();

appRouter.get("/",getAllUser);
appRouter.get("/:id",getUser);
appRouter.post("/create",creatProduct);
appRouter.put("/update/:id",updateProduct);
appRouter.delete("/delete/:id",deleteProduct);
appRouter.get("/urlaub/:id",getUserUrlaub);
appRouter.get("/aufgaben/:id",getAufgaben);

export default appRouter;