const AWS = require('aws-sdk');
require('dotenv').config({path: __dirname + '/.env'});

const bucketName = process.env.AWS_S3_BUCKET
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey= process.env.AWS_SECRET_KEY

const s3 = new AWS.S3({
    region,
    accessKeyId,
    secretAccessKey
})

function uploadFile(file){

  const uploadParams = {
    Bucket:bucketName,
    Body:file.buffer,
    Key:file.originalname,
    ContentType: 'image/'+(file.mimetype).slice(6)
  }

  return s3.upload(uploadParams).promise()
}

module.exports = {
  uploadFile
}