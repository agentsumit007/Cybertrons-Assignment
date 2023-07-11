import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import ListItem from './components/ListItem';
import dataFile from "./dataFile.json"

function App() {

  // const [data,setData] = useState([]);

  // const apiCall = async () => {
  //   const response = await axios.get("http://185.252.234.162:8000/api_v1/store/public/getServiceListByStoreId?storeId=1");
  //   setData(response.data.data);
  // }

  // useEffect(() => {
  //   apiCall();
  // },[])

  const data = dataFile.data;

  return (
    <div className="container">
      {
        data.map((item) => {
          return (
            <ListItem item={item}/>
          )
        })
      }
    </div>
  );
}

export default App;
