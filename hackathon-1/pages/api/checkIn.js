// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { databaseServiceFactory } from "../../services/databaseService";

import { HttpMethods } from './helpers/httpMethods.ts' 
const dbService = databaseServiceFactory();

const postCheckIn = async (req, res) => {
    try{
        const body = req.body;
        const checkIfCheckId = await dbService.checkIfUserCheckedIn(body.user_id);
        if(checkIfCheckId) res.status(400).json({ data: 'user already checked in' }) 
        const attendanceCheckin = await dbService.checkInUser(body.user_id);
        const dateTime = attendanceCheckin[0].datetime
        const responsestring = `Sucessful check in at:  ${dateTime}`;
        res.status(200).json(responsestring); 
    }
    catch(error){
        console.log('error', error)
    }
}


export default async(req, res) =>{
    switch (req.method) {
        case HttpMethods.POST:
            postCheckIn(req, res)
            break;
        case HttpMethods.GET:
        case HttpMethods.PUT:
        case HttpMethods.DELETE:
        default:
            return res.status(400).json({ data: 'request must be POST' })
    }
}
