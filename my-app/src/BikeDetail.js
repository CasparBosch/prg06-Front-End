import {Link, Outlet, useParams } from "react-router";
import { useEffect, useState } from "react";
import { EditBike } from "./EditBike"

const URI_COLLECTION = "http://145.24.222.193:8000"


const loadJson = () => {
    fetch(URI_COLLECTION, {
        method: 'GET',
        headers: {
            'Accept':'application/json'
        }
    })
        .then((response) => response.json())
        .then(result => setBikes(result.items))
        
}

export function BikeDetail(){

    const params = useParams()
    
    const [bike, setBikes] = useState(null)

    const loadBike = () => {
        fetch(URI_COLLECTION + "/" + params.id, {
            method: 'GET',
            headers: {
                'Accept':'application/json'
            }
        })
            .then((response) => response.json())
            .then(result => setBikes(result))
            
    }

    
    useEffect(loadBike, loadJson, [])
    

    return <div>
        <h1>{bike && bike.title}</h1>
        <h3>Written by: {bike && bike.author}</h3>
        <p>{bike && bike.body}</p>
        <EditBike bikesRefreshHandler={loadBike} />
</div>
}
        

        