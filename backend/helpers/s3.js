const aws = require('aws-sdk');

const uploadObject = async(fileData, fileName, fileType) => {
    const s3 = new aws.S3();
    var url;

    const params = {
        Bucket: process.env.S3_BUCKET,
        Key: fileName,
        Body: fileData,
        ContentType: fileType,
        Expires: 60,
        ACL: 'public-read'
    };
    await s3.putObject(params).promise()
        .then(data => {
            url = `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${fileName}`;
        }).catch(err => {
            throw new Error('An error ocurred while signing url for S3: ' + err);
        });

    return url;
};

const deleteObject = async(fileName) => {
    const s3 = new aws.S3();
    const params = {
        Bucket: process.env.S3_BUCKET, 
        Key: fileName
    };
    await s3.deleteObject(params).promise()
        .catch(err => {
            throw new Error('An error ocurred while deleting a file from S3: ' + err);
        });
};

module.exports = {
    uploadObject,
    deleteObject
}