const aws = require('aws-sdk');

const uploadObject = async(fileData, fileName) => {
    const s3 = new aws.S3();
    var url;

    const params = {
        Bucket: process.env.S3_BUCKET,
        Key: fileName,
        Body: fileData,
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

const deleteFolder = async(folderPath) => {
    const s3 = new aws.S3();
    const listParams = {
        Bucket: process.env.S3_BUCKET,
        Prefix: folderPath
    };

    const listedObjects = await s3.listObjectsV2(listParams).promise();

    if (listedObjects.Contents.length === 0) return;

    const deleteParams = {
        Bucket: process.env.S3_BUCKET,
        Delete: { Objects: [] }
    };

    listedObjects.Contents.forEach(({ Key }) => {
        deleteParams.Delete.Objects.push({ Key });
    });

    await s3.deleteObjects(deleteParams).promise();

    if (listedObjects.IsTruncated) await deleteFolder(folderPath);
};

module.exports = {
    uploadObject,
    deleteObject,
    deleteFolder
}