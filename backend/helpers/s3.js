const aws = require('aws-sdk');

const uploadObject = async(fileData, fileName, bucket = null) => {
    const s3 = new aws.S3();
    var url;

    if (bucket == null)
        bucket = process.env.S3_BUCKET;

    const params = {
        Bucket: bucket,
        Key: fileName,
        Body: fileData,
        Expires: 60,
        ACL: 'public-read'
    };
    await s3.putObject(params).promise()
        .then(data => {
            url = `https://${bucket}.s3.amazonaws.com/${fileName}`;
        }).catch(err => {
            throw new Error('An error ocurred while signing url for S3: ' + err);
        });

    return url;
};

const deleteObject = async(fileName, bucket = null) => {
    const s3 = new aws.S3();
    if (bucket == null)
        bucket = process.env.S3_BUCKET;
    const params = {
        Bucket: bucket, 
        Key: fileName
    };
    await s3.deleteObject(params).promise()
        .catch(err => {
            throw new Error('An error ocurred while deleting a file from S3: ' + err);
        });
};

const deleteFolder = async(folderPath, bucket = null) => {
    const s3 = new aws.S3();
    if (bucket == null)
        bucket = process.env.S3_BUCKET;
    const listParams = {
        Bucket: bucket,
        Prefix: folderPath
    };

    const listedObjects = await s3.listObjectsV2(listParams).promise();

    if (listedObjects.Contents.length === 0) return;

    const deleteParams = {
        Bucket: bucket,
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