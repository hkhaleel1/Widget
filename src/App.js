import React, { useState, useEffect } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'

import './App.css';
import axios from 'axios';

export default function App ({ domElement }) {
  
  const endPoint = domElement.getAttribute("data-src");
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true)

     // Retrieve information 
    axios.get(endPoint)
    .then( ({ data }) => { 
      setLoading(false);
      setData(data);
    })
    .catch((e) => {
      console.log(e)
      setLoading(false);
      setError('error fetching from data-src');
    });
  },[ endPoint ]);

  const  { headerText,footerText, url, imageUrl } = data

  return (
    <div className="widgetApp">
      <div>
          {loading ? "Loading..." :
          error ? error : 
          <>
            <Header text={headerText}/>
            <a href={url}>
              <img src={imageUrl} alt="widgetImage" style={imgStyle}/>
              <Footer text={footerText} /> 
            </a>
          </>} 
      </div>           
    </div>
  );
}

const imgStyle = {
  width: '100%',
  height: 'auto'
}

