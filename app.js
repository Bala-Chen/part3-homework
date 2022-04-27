const express = require('express');
const { insertData } = require('./module/db')
const { uploadFile } = require('./controller/s3test');
const { profileUpload } = require('./controller/img.js')
const app = express();


app.set('view engine','ejs');
app.use('/public',express.static('public'));

app.get('/homework',(req,res)=>{
    res.render('index');
})

app.post('/images', profileUpload.single('avatar'), async(req,res)=>{
    if(req.fileValidationError){
        return res.json({error:true})
    }
    const file = req.file
    const inputText = req.body.simpletext
    const result = await uploadFile(file)
    await insertData(inputText,"https://d1s7jhsvusqsti.cloudfront.net/"+result.Key)
    res.json({textP:inputText,imgUrl:"https://d1s7jhsvusqsti.cloudfront.net/"+result.Key})
})


app.listen(3500,()=>{
    console.log('server is listening on port 3500..')
})