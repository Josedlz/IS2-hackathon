
// import { NextApiRequest, NextApiResponse } from "next";

// import sql from '../../lib/db.js'

// export default async (req, res) => {
//   // res.send("Hello worlsd!");
//   //  const query = "insert into users(name) VALUES('pepote')"
//   const name = "pepote"
//   const users = await sql`
//     insert into users
//       (name)
//     values
//       (${ name })
//     returning name
//   `
//   // users = Result [{ name: "Murray", age: 68 }]
//   return users

// //   // try{
// //   //   const query = 'INSERT INTO users(name) VALUES($1)'
// //   //   const values = 'pepito'
// //   //   const result = await conn.query(
// //   //         query,
// //   //         values
// //   //   );
// //   //   console.log("ttt",result)
// //   // } catch(error){
// //   //   console.log(error);
// //   // }

// // };