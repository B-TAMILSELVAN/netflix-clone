import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Request";
import Row from "../Row";
import Footer from "../Footer";

function HomeScreen() {
  
  return (
    <div className="homeScreen">
      <Nav />
      <Banner/>
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}   />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies}   />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies}   />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}  />
      <Footer/>
    </div>
  );
}

export default HomeScreen;
