import { useState } from 'react';
import FormData from 'form-data';
// import axios from 'axios';
import S3 from "aws-sdk/clients/s3";

function App() {

  const [file, setFile] = useState()
  const [srcUrl, setSrcUrl] = useState('')

  const handleFile=async (fileToHandle) =>{

    console.log('starting')

    // initialize the form data
    const formData = new FormData()

    // append the file form data to 
    formData.append("file", fileToHandle)

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
        Bucket: "cakes",
        Key: accessKeyId,
        Body: fileToHandle
      };
    
      await s3.upload(params, {
        partSize: 64 * 1024 * 1024
      }).promise();
      
      }
    )();

    const params = {
      Bucket: "cakes",
      Key: accessKeyId
    }

    // get the url
    const s3_url = s3.getSignedUrl("getObject", params);
    setSrcUrl(s3_url)
  
  }

  return (

    <div className="App">
      <h1>
        Post a photo or video!
      </h1>
      <div>
        <input type="file" onChange={(event)=>setFile(event.target.files[0])}/>
        <button onClick={()=>handleFile(file)}>
        Upload!
        </button>
      </div>
      
    {
      srcUrl.length > 0 && 
    
      <div>
        <h2>Post URL:</h2>
         {srcUrl}
        <div>
          <h3>Image:</h3>
          <img height='300' src={srcUrl} alt='not loading'/>
        </div>
      </div>

    }
    </div>
  );

}

export default App;


      /*
      If you wanted to display the image or video:
      <div>
        <h2>Image:</h2>
        <img height='200' src={`https://gateway.pinata.cloud/ipfs/${myipfsHash}`} alt='not loading'/>
      </div>
    
      <div>
        <h2>Video:</h2>
        <video width="750" height="500" controls >
        <source src={`https://gateway.pinata.cloud/ipfs/${myipfsHash}`} type="video/mp4" alt='not loading'/>
        </video>
      </div>
      */
