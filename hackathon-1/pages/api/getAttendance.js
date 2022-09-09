import conn from "../../lib/db.js";

export default async(req, res) =>{

  try{
    console.log('a');
    const query = `SELECT * FROM attendance`;
    try{
      const result = await conn.query(query)  
      res.status(200).json(result.rows); 
    }
    catch(e){
      console.log(e);
    }
  }
  catch(error){
    console.log('error', error)
  }
}

