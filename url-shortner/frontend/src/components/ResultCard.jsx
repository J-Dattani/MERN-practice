function ResultCard({shortUrl}){

  if(!shortUrl){
    return null;
  }


  return(

    <div className="card shadow-sm p-4 mt-4 mx-auto"
         style={{maxWidth:"600px"}}>

      <h5>
        Your shortened URL
      </h5>


      <a href={shortUrl} target="_blank">
        {shortUrl}
      </a>


      <button className="btn btn-success mt-3">
        Copy
      </button>


    </div>

  );

}


export default ResultCard;