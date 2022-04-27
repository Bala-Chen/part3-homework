const { insertData } = require('../model/db')
const { uploadFile } = require('../controller/indexFunc/s3test');

const indexView = (req,res)=>{
    res.render('index')
}

const imagesApi = async(req,res)=>{
    if(req.fileValidationError){
        return res.json({error:true})
    }
    const file = req.file
    const inputText = req.body.simpletext
    const result = await uploadFile(file)
    await insertData(inputText,"https://d1s7jhsvusqsti.cloudfront.net/"+result.Key)
    res.json({textP:inputText,imgUrl:"https://d1s7jhsvusqsti.cloudfront.net/"+result.Key})
}

module.exports = {
    indexView,
    imagesApi
}