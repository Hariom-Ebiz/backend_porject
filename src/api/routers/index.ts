import { Router } from 'express';
import { postData, getData, all } from '../controllers/controller';

import { userSchema } from '../validationSchema/validatorSchema';
import validator from '../../utility/validator';
import { cache } from 'joi';
import cachee from '../../utility/redis';


const router = Router();

router.post('/user', validator(userSchema), postData);
router.get("/getUser", getData)
router.get("//data/:id", all)


export default router; 