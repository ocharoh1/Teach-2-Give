// validators/userValidators.ts
import Joi from 'joi';

export const registerSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'Please provide a valid email address.',
        'string.empty': 'Email is required.',
    }),
    password: Joi.string().min(8).required().messages({
        'string.min': 'Password should be at least 8 characters long.',
        'string.empty': 'Password is required.',
    }),
    name: Joi.string().min(3).required().messages({
        'string.min': 'Name should be at least 3 characters long.',
        'string.empty': 'Name is required.',
    })
});
