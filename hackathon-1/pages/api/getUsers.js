import conn from "../../lib/db.js";
import { databaseServiceFactory } from "../../services/databaseService";
const dbService = databaseServiceFactory();


export default async(req, res) =>{
// session route for authentication purposes xd

  const method = req.method.toLowerCase();

  if (method !== "get") {
		return res.status(405).end(`Method ${req.method} Not allowed`);
	}

  try{
		const users = await dbService.getAllUsers();

    console.log('getting users');
    // const query = `SELECT * FROM users`;
    // const result = await conn.query(query)  

    
    res.status(200).json({ users });
    return;
  }
  catch(error){
		console.log(error);
  }
}

