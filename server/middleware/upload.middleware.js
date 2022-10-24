import multer from 'multer';


const fileStorageEng = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload');
    },
    filename: (req, file , cb) => {
        cb(null,Date.now()  + '--' + file.originalname);
    },
});

const uploadMW = multer({storage: fileStorageEng});

export default uploadMW;