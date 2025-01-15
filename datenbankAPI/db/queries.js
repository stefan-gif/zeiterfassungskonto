import { pool } from "./index.js";

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
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY,[id]);
    return result[0];
  } catch (error) {
    console.log("Error executing query by id: ", error);
    throw error;
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

export const deleteProduct = async (id) => {
  const QUERY = "delete from products where id = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(QUERY,[title, description, price,id]);
    return result[0];
  } catch (error) {
    console.log("Error executing create querry: ", error);
    throw error;
  }
};
