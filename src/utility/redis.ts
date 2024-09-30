import { Request, Response, NextFunction } from 'express';
import { createClient, RedisClientType } from 'redis';

const client: RedisClientType = createClient()

client.connect().then(() => {
    console.log("connected to redis");
}).catch((err) => {
    console.log("redis connection error:", err);
})


const cachee = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
        const data = await client.get(id);
        if (data !== null) {
            res.send(JSON.parse(data));
        } else {
            next();
        }
    } catch (err) {
        console.error('Redis error:', err);
        next();
    }
};


export default client;