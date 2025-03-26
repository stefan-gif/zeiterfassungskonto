import {pool}  from './index.js'; 

export const find = async () => {
  const QUERY = "SELECT id,nachname,vorname,email,abteilung,telefon FROM user";
  let client;
  try {
    client = await pool.getConnection();
    const result = await client.query(QUERY);
    return result[0];
  } catch (error) {
    console.log("Error executing query: ", error);
    throw error;
  } finally {
    if (client) client.release();
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

export const createAufgabe = async (nutzer_id, aufgabe) => {
  const QUERY = "INSERT INTO aufgaben (nutzer_id, aufgabe) VALUES (?,?)";
  let client;
  try {
    client = await pool.getConnection();
    const result = await client.query(QUERY,[nutzer_id, aufgabe]);
    return result;
  } catch (error) {
    console.log("Error executing create querry: ", error);
    throw error;
  } finally {
    if (client) client.release();
  }
};

export const update = async (vorname,nachname,telefon,email,id) => {
  const QUERY = "UPDATE user SET vorname = ?, nachname = ?, telefon = ?, email = ? WHERE id = ?";
  let client;
  try {
    client = await pool.getConnection();
    const result = await client.query(QUERY,[vorname,nachname,telefon,email,id]);
    return result[0];
  } catch (error) {
    console.log("Error executing create querry: ", error);
    throw error;
  }finally {
    if (client) client.release();
  }
};

export const deleteAufgabe = async (id) => {
  const QUERY = "delete from aufgaben where id = ?";
  let client;
  try {
    client = await pool.getConnection();
    await client.query(QUERY,id);   
  } catch (error) {
    console.log("Error executing create querry: ", error);
    throw error;
  }finally {
    if (client) client.release();
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

export const createTagesZeitKonto = async (nutzer_id) => {
  const  QUERY = "INSERT INTO tageszeitkonto (nutzer_id,minuten) VALUES (?,0)";
  let client;
  try {
    client = await pool.getConnection();
    await client.query(QUERY, [nutzer_id]);
  }catch (error) {
    console.log("Error executing create querry: ", error);
    throw error;
  } finally {
    if (client) client.release();
  }
}

export const findTagesZeitKontoById = async (nutzer_id) => {
  const QUERY = "SELECT minuten FROM tageszeitkonto WHERE nutzer_id =? and timestamp = CURDATE()";
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

export const updateTagesZeitKonto = async (minuten, nutzer_id) => {
  const QUERY = "UPDATE tageszeitkonto SET minuten = minuten + ? WHERE nutzer_id = ? and timestamp = CURDATE()";
  let client;
  try {
    client = await pool.getConnection();
    const result = await client.query(QUERY,[minuten,nutzer_id]);
    return result[0];
  } catch (error) {
    console.log("Error executing create querry: ", error);
    throw error;
  }finally {
    if (client) client.release();
  }
};

export const findMonatsArbeitszeitenById = async (nutzer_id) => {
  const QUERY = "SELECT DATE_FORMAT(timestamp, '%Y-%m') as monat, sum(minuten) as minuten FROM tageszeitkonto WHERE nutzer_id = ? GROUP BY monat ORDER BY monat";
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