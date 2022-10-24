import async_hooks from 'node:async_hooks';

import express from 'express';
import config from 'config';
import mongoose from 'mongoose';

import cors from 'cors';

import connectDb from './services/dbConnect.js';
import router from './routes/auth.routes.js';
import settingsRouter from './routes/settings.routes.js';
import orderRouter from './routes/order.routes.js';
import uploadRouter from './routes/upload.routes.js';



const app = express();
const PORT = config.get('port') || 5000;

const corsOptions = {
    origin: `${config.get('client.originUrl')}:${config.get('client.originPort')}`,
    optionsSuccessStatus: 200,
}; 

app.use(cors(corsOptions));
app.use(express.json({extended: true}));
app.use('/api/auth', router);
app.use('/api/user', settingsRouter);
app.use('/api/order', orderRouter); 
app.use('/api/upload', uploadRouter);



const mongoConnection  = async () => {
    await mongoose.connect(config.get('mongoUri'));
    console.log(async_hooks.executionAsyncId());

    process.on('unhandledRejection', error => {
        console.log('unhandledRejection', error.message);
    });

    app.listen(PORT, () => {
        console.log('App has been started on port ' + PORT);
        console.log(process.env.PORT);
    });
};

connectDb(mongoConnection);








