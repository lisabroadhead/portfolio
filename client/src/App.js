import './App.scss';
import axios from 'axios'
import React, {useState, useEffect} from 'react'

import Index from './components/Index';
import Blog from './components/Blog';

function App() {
  const [data,setData] = useState([{}])

  useEffect(() => {
    axios.get('/tags')
      .then(response => {
        setData(response.data)
      })
  }, [])

  return (
    <div>
      <h1>React + Python here we come!</h1>
    </div>
  );
}

export default App;
