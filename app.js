const express = require('express');
const { imagesApi, indexView } = require('./controller/indexcontroller')
const { profileUpload } = require('./controller/indexFunc/img')
const app = express();


app.set('view engine','ejs');
app.use('/public',express.static('public'));

app.get('/homework',indexView)

app.post('/images', profileUpload.single('avatar'), imagesApi)

app.listen(3500,()=>{
    console.log('server is listening on port 3500..')
})