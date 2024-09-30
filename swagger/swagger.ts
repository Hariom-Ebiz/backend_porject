import swaggerSchema from '../swagger/swagger.schema';
import swaggerRoutes from '../swagger/swagger.routes';
import { SwaggerOptions } from 'swagger-ui-express';


const swaggerSpec: SwaggerOptions = {
    openapi: '3.0.0',
    info: {
        title: 'LinkedIn Profile Scrapper API Documentation',
        version: '1.0.0',
        description: 'API documentation',
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: 'Local server',
        },
    ],
    components: {
        schemas: { ...swaggerSchema }
    },
    paths: {
        ...swaggerRoutes
    },
};

export default swaggerSpec;


