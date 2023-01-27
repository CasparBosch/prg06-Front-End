import {React, useEffect} from 'react';
import {useState} from 'react';
import {Bike} from './Bikes';
import {NewBike} from './NewBike';
import {BrowserRouter, Route} from "react-router-dom"
import {Routes} from "react-router-dom"
import {BikeDetail} from "./BikeDetail"
import { EditBike } from './EditBike';

import Layout from './Layout';
import './style.css';

const URI_COLLECTION = "http://145.24.222.193:8000"

export default function App() {

  const [bikes, setBikes] = useState([])

  const loadJson = () => {
  fetch(URI_COLLECTION, {
    method: 'GET', 
    headers: {
      'Accept': 'application/json'
    }})
    .then((response) => response.json())
    .then((result) => setBikes(result.items))
  }

  const showBikes = bikes.map((value, key) => (
    <Bike key={value.id} bike={value} bikelistRefreshHandler={loadJson}/>
  ))

  useEffect(loadJson, [])

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout bikelistRefreshHandler={loadJson}/>}>
        <Route index element={showBikes}/>
        <Route path="create" element={<NewBike bikelistRefreshHandler={loadJson}/>}/>
        <Route path = "bikes/:id" element = {<BikeDetail />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

