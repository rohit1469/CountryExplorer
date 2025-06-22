import axios from "axios";
import { useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const NationalAnthemPlayer = () => {
  //   const [data, setData] = useState([]);
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [anthemUrl, setAnthemUrl] = useState();

  useEffect(() => {
    const api_key = "AIzaSyDS-CIvntBVEu3a4RWQhc2SBAIeNVeQvcA";
    const fetchData = async () => {
      try {
        if (name) {
          const url = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet&q=${encodeURIComponent(
            name
          )}+national+anthem+official&type=video&maxResults=1&autoplay=off`;
          let response = await axios.get(url);
          let data = response.data;
          let array = data.items;

          let videoId = array?.map((el) => el.id.videoId);

          // console.log("videoId", videoId);
          setAnthemUrl(
            `https://www.youtube.com/embed/${videoId}?autoplay=0`
          );
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(anthemUrl);
  // }, [ anthemUrl]);

  return (
    <div className="anthem-container">
      <h2>{name} National Anthem</h2>
      <div className="video-wrapper">
        <iframe
          width="560"
          height="315"
          src={anthemUrl}
          title={`${name} National Anthem`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default NationalAnthemPlayer;
