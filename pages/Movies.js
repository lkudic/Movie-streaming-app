import React, { useState, useEffect } from 'react';
import axios from 'axios';

const titelUrl = "https://unogs-unogs-v1.p.rapidapi.com/search/titles";
const [titles, setTitles] = useState([]);

const fetchTitle = () => {
  return axios.get(titleUrl).then((res) => setTitle(res.data));
};

useEffect(() => {
  fetchTitle();
}, []);




const About = () => {
  return <h1>About us</h1>;
};

export default About;