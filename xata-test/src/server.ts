// server.ts
import express, { Express } from 'express';
import dotenv from 'dotenv';
import userRoutes from '../routes/userRoutes';
import { errorHandler } from '../middlewares/errorHandler';

dotenv.config();

const app: Express = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Register routes
app.use('/api/users', userRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
