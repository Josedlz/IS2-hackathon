// import React from 'react'

// function checkIn() {
//     const current = new Date();
//     const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
//     const userid, setUseriD = useState();

//     return (
//         <div>
//             <h1>Current date is {date}</h1>
//             <form> 
//                 <input type="text" placeholder="User ID" value={userid}></input>
//             </form>
            
//         </div>
//   )
// }

// export default checkIn

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from  '../../lib/db.js'

export default async(req, res) =>{
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    if (req.method === 'POST') {
        try{
            // post validate
            const body = req.body
            console.log('body: ', body)
            if(!body.userid || !body.token){
                return res.status(400).json({ data: 'missing form values' })
            }
            
            console.log('a');
            // validate token someway
            const query = `insert into attendance(userid, date, checktype ) values(${ userid, date, 0})`
            console.log("query ready");
            const result = await conn.query(query)
            console.log("query ready");

            res.status(200).json(result); 
        
        }
        catch(error){
            // console.log('error', error)
            return res.status(400).json({ data: 'rip!' })
        }
    }
    else{
        return res.status(400).json({ data: 'request must be POST' })
    }
}