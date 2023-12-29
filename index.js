import express from 'express';
import cors from 'cors';
import mountRoutes from './src/routes/index.js'

const app = express();
app.use(cors());
mountRoutes(app)
app.listen(3002, () => {console.log('server listening on port 3002')});