import Joi, { number } from "joi";

export const userSchema = Joi.object({
    name: Joi.string().min(3).max(100).required()
        .messages({
            'string.empty': 'Name cannot be empty',
            'string.min': 'Name must be at least 3 characters long',
            'any.required': 'Name is required'
        }),

    number: Joi.number().integer().required()
        .messages({
            'number.empty': 'Number cannot be empty',
            'any.required': 'Number is required'
        }),

    work: Joi.string().min(3).max(200).optional(),

    position: Joi.string().min(3).max(100).optional(),

    address: Joi.string().min(5).max(200).optional(),
    nickname: Joi.string().min(3).max(100).optional(),

    website: Joi.string().optional(),

    birthday: Joi.date().optional(),

    relationship: Joi.string().optional(),
    note: Joi.string().max(500).optional()

});