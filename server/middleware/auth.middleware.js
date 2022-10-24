import  jwt  from 'jsonwebtoken';
import config from 'config';

export const authMW = (req, res, next) => {
    if (req.method === 'OPTIONS'){
        return next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token){
            return res.status(401).json({message: 'authorization required'});
        }

        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: 'couldn t verify user using token'});
    }
};