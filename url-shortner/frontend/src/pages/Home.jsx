import Navbar from '../components/Navbar';
import UrlForm from '../components/UrlForm';
import Footer from "../components/Footer";
import { useState } from "react";
import ResultCard from "../components/ResultCard";

function Home(){

  const [shortUrl,setShortUrl] = useState("");

  return(
    <>
      <Navbar/>

     <main className="container text-center mt-5 flex-grow-1">

        <h1>
          Shorten your URL
        </h1>

        <p>
          Create short links quickly and easily.
        </p>

        <UrlForm setShortUrl={setShortUrl}/>

        <ResultCard shortUrl={shortUrl}/>

      </main>

      <Footer/>

    </>
  );
}

export default Home;