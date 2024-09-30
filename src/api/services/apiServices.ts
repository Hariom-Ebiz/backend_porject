import {Request, Response} from 'express';
import profileData from "../../models/linkedInProfileSchema";


interface   NumberData {
    name: string;
    number: number;
    work: string;
    position: string;
    address: string;
    nickname: string;
    website: string;
    birthday: string;
    relationship: string;
    note: string;
}

interface ServiceResponse {
    status: number;
    message: string;
    data: any;
}


export const getDataService = async (req: Request, res: Response) => {    
    try {
        const { name, number } = req.body;

        const checkData = await profileData.findOne({ $or: [{ name }, { number }] });
       
       if (!checkData) {
        res.status(400).json({ message: "Data not found" });
       } else {
        res.status(200).json({ message: "Data found", data: checkData });
       }

            
    } catch (error) {
        console.log("error when getting data", error);
        res.status(500).send("server error");
    }
}



