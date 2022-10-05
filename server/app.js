import express from 'express';
import config from 'config';
import mongoose from 'mongoose';
import connectDb from './services/dbConnect.js';
import router from './routes/auth.routes.js';
import cors from 'cors'



const app = express();
const PORT = config.get('port') || 5000;

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
} 

app.use(cors(corsOptions));
app.use(express.json({extended: true}));
app.use('/api/auth', router);



const mongoConnection  = async () => {
   await mongoose.connect(config.get('mongoUri'));



    app.listen(PORT, () => {
        console.log('App has been started on port ' + PORT)
    });
}

connectDb(mongoConnection);








