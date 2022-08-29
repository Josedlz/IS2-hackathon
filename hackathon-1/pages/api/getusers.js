// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from  '../../lib/db.js'

export default async(req, res) =>{
  try{
    console.log('a');
    const query = `SELECT * FROM users`;
    const result = await conn.query(query)
    res.status(200).json(result); 
    
  }
  catch(error){
    console.log('error', error)
  }
}