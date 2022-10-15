import express from 'express';
import config from 'config';
import mongoose from 'mongoose';
import connectDb from './services/dbConnect.js';
import router from './routes/auth.routes.js';
import cors from 'cors'
import settingsRouter from './routes/settings.routes.js';
import async_hooks from 'node:async_hooks';
import orderRouter from './routes/order.routes.js';



const app = express();
const PORT = config.get('port') || 5000;

const corsOptions = {
    origin: `${config.get('client.originUrl')}:${config.get('client.originPort')}`,
    optionsSuccessStatus: 200
} 

app.use(cors(corsOptions));
app.use(express.json({extended: true}));
app.use('/api/auth', router);
app.use('/api/user', settingsRouter);
app.use('/api/order', orderRouter); 



const mongoConnection  = async () => {
   await mongoose.connect(config.get('mongoUri'));
    console.log(async_hooks.executionAsyncId());


    app.listen(PORT, () => {
        console.log('App has been started on port ' + PORT)
    });
}

connectDb(mongoConnection);








