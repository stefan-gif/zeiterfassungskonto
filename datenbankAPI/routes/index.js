import { Router } from 'express';
import { creatProduct, deleteProduct, getAllUser,  getUser, updateProduct } from '../handlers/index.js';

const appRouter = Router();

appRouter.get("/",getAllUser);
appRouter.get("/:id",getUser);
appRouter.post("/create",creatProduct);
appRouter.put("/update/:id",updateProduct);
appRouter.delete("/delete/:id",deleteProduct);

export default appRouter;