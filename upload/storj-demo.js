import S3 from "aws-sdk/clients/s3";

const accessKeyId = "jwk4qg377eklif6b4ka3n53qowsq";
const secretAccessKey = "j2pcviurnwp3ogut6xkoi6fhrmverhvpwy4sdigltzx4fe2kxirqu";
const endpoint = "https://gateway.storjshare.io";

const s3 = new S3({
  accessKeyId,
  secretAccessKey,
  endpoint,
  s3ForcePathStyle: true,
  signatureVersion: "v4",
  connectTimeout: 0,
  httpOptions: { timeout: 0 }
});

(async () => {

    const { Buckets } = await s3.listBuckets({}).promise();
    
    console.log(Buckets);
  
  }
)();

(async () => {

  // `file` can be a readable stream in node or a `Blob` in the browser

  const params = {
    Bucket: "my-bucket",
    Key: "my-object",
    Body: file
  };

  await s3.upload(params, {
    partSize: 64 * 1024 * 1024
  }).promise();
  
  }
)();

const params = {
    Bucket: "my-bucket",
    Key: "my-object"
}
  
const url = s3.getSignedUrl("getObject", params);
  
// e.g. create an <img> where src points to url
  