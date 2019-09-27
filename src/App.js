import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import 'antd/dist/antd.js';
import { Result, Button } from 'antd';
import axios from 'axios';
import logo from './logo.svg';


function App() {

  const [phrase, getPhrase] = useState({});

  const callAPI = async () => {
    const result = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    getPhrase(result.data[0]);
  }

  useEffect(
    () => {
      callAPI()
    }, []
  );

  return (
    <Result
      icon={<img src={logo}/>}
      title={phrase.quote}
      subTitle={phrase.author}
      extra={<Button type="primary" onClick={callAPI}>Get another quote</Button>}
    />
  );
}

export default App;
