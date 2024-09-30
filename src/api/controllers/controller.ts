import { Request, Response } from 'express';
import profileData from "../../models/linkedInProfileSchema";
import client from '../../utility/redis';


export const postData = async (req: Request, res: Response) => {
    try {
        const { name, number, work, position, address, nickname, website, birthday, relationship, note } = req.body;

        const newData = new profileData({
            name,
            number,
            work,
            position,
            address,
            nickname,
            website,
            birthday,
            relationship,
            note
        });
        await newData.save();
        return res.status(201).json(newData);
    } catch (error) {
        console.log("error when posting data", error);
        return res.status(500).send("server error");
    }
}


export const getData = async (req: Request, res: Response) => {
    try {

        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ message: "enter the valid ID" });
        }



        const data = await profileData.find({ _id: id });

        if (!data) {
            return res.status(400).json({ message: "Data not found" });
        }

        return res.status(200).json({ message: "Data found", data: data });

    } catch (error) {
        console.log("error when getting data", error);
        return res.status(500).send("server error");

    }
}


export const all = async (req: Request, res: Response) => {
    const { id } = req.params;

    // Simulate fetching data from a database
    const data = {
        id,
        name: 'Example Name',
        info: 'Some information about this data.',
    };

    try {
        // Save the response in Redis with an expiration of 60 seconds
        await client.set(id, JSON.stringify(data), { EX: 60 });
        res.json(data);
    } catch (err) {
        console.error('Redis error while setting data:', err);
        res.status(500).json({ error: 'Server error' });
    }
};