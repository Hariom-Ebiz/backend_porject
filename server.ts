import express from 'express';
import path from 'path';
import cors from 'cors';
import 'mongoose';
import router from './src/api/routers'; // Ensure this points to the correct file
import './src/connections/mongoConnection';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger';

dotenv.config();

const app = express();
const port: number = parseInt(process.env.PORT || '5000');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use the router with a base path
app.use('/api', router);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
