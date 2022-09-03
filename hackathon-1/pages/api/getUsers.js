import conn from "../../lib/db.js";

export default async(req, res) =>{

  try{
    const query = `SELECT * FROM users`;
    const result = await conn.query(query)  
    res.status(200).json(result.rows); 
  }
  catch(error){
    console.log('error', error)
  }
}

