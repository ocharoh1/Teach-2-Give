import express, { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../middlewares/validationMiddleware';
import { registerSchema } from '../validators/userValidator';
import { getXataClient } from '../src/xata';
import bcrypt from 'bcrypt';

const router = express.Router();

// Registration route
router.post('/register', validateRequest(registerSchema), async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email, password, name } = req.body;
    const client = getXataClient();

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await client.db.register.create({
            email,
            password: hashedPassword,
            name
        });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        next(error); // Pass errors to the error handler
    }
});

export default router;
