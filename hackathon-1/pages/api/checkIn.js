// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from  '../../lib/db.js'

export default async(req, res) =>{
    if (req.method === 'POST') {
        try{
            const body = req.body
            console.log('body: ', body)
            if(!body.user_id || !body.token){
                return res.status(400).json({ data: 'missing form values' })
            }
            const query = `insert into attendance(user_id, event) values(${body.user_id}, 'checkin') returning datetime`            
            const result = await conn.query(query)
            const responsestring = "Sucessful check in at: " + result.rows[0].datetime;
            res.status(200).json(responsestring); 
        }
        catch (error) {
            const DatabaseError = error.message
            console.log(DatabaseError);
            res.status(403).json({ DatabaseError });
        }
        res.status(403).json({ error: "there has been an unknown error", error});
    }
    else{
        return res.status(400).json({ data: 'request must be POST' })
    }
}
