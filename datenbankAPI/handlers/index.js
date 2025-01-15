import { find,create,findById, update } from "../db/queries.js";

export const getAllUser = async (req, res) => {
  try {
    const user = await find();
    return res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
    
  }
};
export const getUser = async (req, res) => {
    const id = req.params.id;
  try {
    const product = await findById(id);
    return res.status(200).json({ product });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const creatProduct = async (req, res) => {
  const { title, description, price } = req.body;

  if(!title || !description || !price){
    return res.status(400).json({ message: "All fields are required" });
  }

  try { 
    const product = await create(title, description, price);
    return res.status(201).json({ product });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
  
};
export const updateProduct = async (req, res) => {
  const { title, description, price } = req.body;
  const id = req.params.id;

  if(!title || !description || !price){
    return res.status(400).json({ message: "All fields are required" });
  }

  try { 
    const product = await update(title, description, price, id);
    return res.status(201).json({ product });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const deleteProduct = async (req, res) => {
};

