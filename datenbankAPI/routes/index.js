import { Router } from 'express';
import { creatProduct, deleteProduct, getAllUser,  getUser, getUserUrlaub, updateProduct } from '../handlers/index.js';

const appRouter = Router();

appRouter.get("/",getAllUser);
appRouter.get("/:id",getUser);
appRouter.post("/create",creatProduct);
appRouter.put("/update/:id",updateProduct);
appRouter.delete("/delete/:id",deleteProduct);
appRouter.get("/urlaub/:id",getUserUrlaub);

export default appRouter;