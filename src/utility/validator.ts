// Import the userSchema from the Joi validation schema file
import { Schema } from 'joi';

import { Request, Response, NextFunction } from 'express';

// Validator middleware function
export default (schema: Schema, params: keyof Request = "body") => async (req: Request, res: Response, next: NextFunction) => {

    const { error } = await schema.validate(req[params], { abortEarly: false });

    try {
        if (error) {
            // Extract all validation error messages
            const errorMessages = error.details.map(err => err.message);

            return res.status(400).json({
                status: 'error',
                message: 'Validation failed',
                errors: errorMessages
            });
        }

        // If validation succeeds, move to the next middleware or route handler
        next();

    } catch (error) {

        return res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }

};
