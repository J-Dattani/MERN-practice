import { useState } from "react";
import { shortenUrl } from "../services/urlservices";


function UrlForm({setShortUrl}){

  const [url,setUrl] = useState("");


  async function handleSubmit(){

    const result = await shortenUrl(url);

    setShortUrl(result.shortUrl);

  }


  return(

    <div className="container mt-5">

      <div className="card shadow-sm p-4 mx-auto" style={{maxWidth:"600px"}}>

        <input
          type="text"
          className="form-control"
          placeholder="Paste your long URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />


        <button 
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
        >
          Shorten URL
        </button>

      </div>

    </div>

  );

}


export default UrlForm;