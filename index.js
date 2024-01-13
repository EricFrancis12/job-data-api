import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import { router as apiRouter } from './routes/api/api.js';



app.get('/', (req, res) => {
    res.status(200).sendFile('./views/index.html', { root: './' });
});

app.use('/api', apiRouter);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at port ${port}`));
