import { find,createAufgabe,findById, update, findUrlaubById, findAufgabeById, findAufgabenDatenById,deleteAufgabe, createTagesZeitKonto, findTagesZeitKontoById } from "../db/queries.js";

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
export const creatAufgaben = async (req, res) => {
  const { nutzer_id,aufgabe } = req.body;

  if(!nutzer_id || !aufgabe){
    return res.status(400).json({ message: "All fields are required" });
  }

  try { 
    await createAufgabe(nutzer_id,aufgabe);
    return res.status(201).json({ aufgabe });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
  
};
export const updateUser = async (req, res) => {
  const { vorname,nachname,telefon,email } = req.body;
  const id = req.params.id;

  if(!vorname || !nachname || !telefon ||!email){
    return res.status(400).json({ message: "All fields are required" });
  }

  try { 
    const user = await update(vorname,nachname,telefon,email, id);
    return res.status(201).json({ user });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const deletetask = async (req, res) => {
  const id = req.params.id;
  try {
    const aufgaben = await deleteAufgabe(id);
    return res.status(200).json([aufgaben]);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserUrlaub = async (req, res) => {
  const id = req.params.id; 
  try {
    const urlaub = await findUrlaubById(id);
    return res.json({ urlaub });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
    
  }
};

export const getAufgaben = async (req, res) => {
  const id = req.params.id;
try {
  const aufgaben = await findAufgabeById(id);
  return res.status(200).json([aufgaben]);

} catch (error) {
  console.log(error);
  res.status(500).json({ message: "Internal server error" });
}
};

export const getAufgabenDaten = async (req, res) => {
  const id = req.params.id;
try {
  const aufgaben = await findAufgabenDatenById(id);
  return res.status(200).json([aufgaben]);

} catch (error) {
  console.log(error);
  res.status(500).json({ message: "Internal server error" });
}
};

export const creatTagesKonto = async (req, res) => {
  const { nutzer_id } = req.body;

  if(!nutzer_id ){
    return res.status(400).json({ message: "All fields are required" });
  }

  try { 
    await createTagesZeitKonto(nutzer_id); 
    return res.status(201).json({ tagesZeitKonto: "Erfolgreich erstellt" });   
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
  
};

export const getTagesKonto = async (req, res) => {
  const id = req.params.id;

  try {
    const tagesZeitKonto = await findTagesZeitKontoById(id);
    return res.status(200).json( tagesZeitKonto );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};