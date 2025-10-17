import express from 'express';
import { json } from 'body-parser';
import { createServer } from 'http';
import { setupRoutes } from './routes';
import { setupMiddlewares } from './middlewares';
import { config } from './config';

const app = express();
const server = createServer(app);

// Middleware setup
setupMiddlewares(app);

// Body parser
app.use(json());

// Route setup
setupRoutes(app);

// Start the server
const PORT = config.port || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});