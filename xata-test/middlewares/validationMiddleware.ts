import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi'; // or your validation library

export const validateRequest = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const { error } = schema.validate(req.body);
        if (error) {
             res.status(400).json({ error: error.details[0].message });
        }
        next(); // Call next() if validation passes
    };
};
