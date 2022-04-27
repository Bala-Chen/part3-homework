const multer = require('multer');

const profileUpload = multer({
    limit:{
        fileSize:1000000
    },
    fileFilter(req, file, cb){
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            cb(null,false);
        }
        cb(null,true);
    }
})

module.exports = {
    profileUpload
}