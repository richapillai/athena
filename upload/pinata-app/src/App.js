import { useState } from 'react';
import FormData from 'form-data';
import axios from 'axios';

function App() {

  const [file, setFile] = useState()
  const [myipfsHash, setIPFSHASH] = useState('')

  const handleFile=async (fileToHandle) =>{

    console.log('starting')

    // initialize the form data
    const formData = new FormData()

    // append the file form data to 
    formData.append("file", fileToHandle)

    //change to call from env when public
    const API_KEY = 'f6af52b084dee1f82572'
    const API_SECRET = 'daf4e280fa256a538dfe174a8aac42e12ff05eb03ac9737c34474f407e7cac38'

    // the endpoint needed to upload the file
    const url =  `https://api.pinata.cloud/pinning/pinFileToIPFS`

    const response = await axios.post(
      url,
      formData,
      {
          maxContentLength: "Infinity",
          headers: {
              "Content-Type": `multipart/form-data;boundary=${formData._boundary}`, 
              'pinata_api_key': API_KEY,
              'pinata_secret_api_key': API_SECRET

          }
      }
  )

  console.log(response)
  // get the hash
  setIPFSHASH(response.data.IpfsHash)
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
      //  render the hash
      myipfsHash.length > 0 && 
    
      <div>
        <h2>Post URL:</h2>
         https://gateway.pinata.cloud/ipfs/{myipfsHash}
      </div>
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
    }
    </div>
  );

}

export default App;
