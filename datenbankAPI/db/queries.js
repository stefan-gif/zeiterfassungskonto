import {pool}  from './index.js'; 

export const find = async () => {
  const QUERY = "SELECT id,nachname,vorname FROM user";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY);
    return result[0];
  } catch (error) {
    console.log("Error executing query: ", error);
    throw error;
  }
};

export const findById = async (id) => {
  const QUERY = "SELECT * FROM user WHERE id = ?";
  let client;
  try {
    client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    return result[0];
  } catch (error) {
    console.log("Error executing query by id: ", error);
    throw error;
  } finally {
    if (client) client.release(); 
  }
};

export const findUrlaubById = async (id) => {
  const QUERY = "SELECT Urlaubsanspruch, Urlaubgenommen, Urlaubgeplant FROM user WHERE id = ?";
  let client;
  try {
    client = await pool.getConnection();
    const result = await client.query(QUERY, [id]);
    return result[0];
  } catch (error) {
    console.log("Error executing query by id: ", error);
    throw error;
  } finally {
    if (client) client.release(); 
  }
};

export const create = async (title, description, price) => {
  const QUERY = "INSERT INTO products (title, description, price) VALUES (?,?,?)";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY,[title, description, price]);
    return result;
  } catch (error) {
    console.log("Error executing create querry: ", error);
    throw error;
  }
};

export const update = async (title, description, price,id) => {
  const QUERY = "UPDATE products SET title = ?, description = ?, price = ? WHERE id = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY,[title, description, price,id]);
    return result[0];
  } catch (error) {
    console.log("Error executing create querry: ", error);
    throw error;
  }
};

export const deleteAufgabe = async (id) => {
  const QUERY = "delete from aufgaben where id = ?";
  try {
    const client = await pool.getConnection();
    await client.query(QUERY,id);   
  } catch (error) {
    console.log("Error executing create querry: ", error);
    throw error;
  }
};

export const findAufgabeById = async (nutzer_id) => {
  const QUERY = "SELECT aufgabe FROM aufgaben WHERE nutzer_id = ?";
  let client;
  try {
    client = await pool.getConnection();
    const result = await client.query(QUERY, [nutzer_id]);
    return result[0];
  } catch (error) {
    console.log("Error executing query by id: ", error);
    throw error;
  } finally {
    if (client) client.release(); 
  }
};

export const findAufgabenDatenById = async (nutzer_id) => {
  const QUERY = "SELECT id,aufgabe FROM aufgaben WHERE nutzer_id = ?";
  let client;
  try {
    client = await pool.getConnection();
    const result = await client.query(QUERY, [nutzer_id]);
    return result[0];
  } catch (error) {
    console.log("Error executing query by id: ", error);
    throw error;
  } finally {
    if (client) client.release(); 
  }
};
