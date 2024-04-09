import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
// import styled from 'styled-components';

// const styledSection = styled.section`
  
// `

const api_key = "dDIldQ1892ViE5bf7mdMmk0YxFV0NktPXVP6tn8R";
const baseUrl = "https://api.nasa.gov/planetary/apod";

export default function App() {
  const [photoOtd, setPhotoOtd] = useState();

  useEffect(() => {
    function getPhoto() {
      axios
        .get(`${baseUrl}?api_key=${api_key}`) // DEMO_KEY - 30 requests per hour.
        .then((res) => {
          console.log(res.data);
          if (res.data.media_type === "image") {
            setPhotoOtd(res.data);
          }
        })
        .catch((err) => console.log(err));
    }
    getPhoto();
  }, []);
  if (!photoOtd) return <h3>Loading...</h3>;

  return (
    <section>
      <PhotoCard
        title={photoOtd.title}
        description={photoOtd.explanation}
        imageHdurl={photoOtd.hdurl}
        date={photoOtd.date}
      />
    </section>
  )
}