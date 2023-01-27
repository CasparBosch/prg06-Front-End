import React from "react";
import { useState } from 'react';
import "./style.css";

const URI_COLLECTION = "http://145.24.222.193:8000"

export function NewBike(props) {
    console.log(props)

    const [bike, setBike] = useState({
        title:"",
        body:"",
        author:""
    })

    const saveBike = (event) => {
        event.preventDefault()

        fetch(URI_COLLECTION, {
            method: 'POST', 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(bike)
        })
            .then((response) => props.bikelistRefreshHandler())

    }

    const onChangeHandler = (event) => {
        setBike({
            ...bike,
            [event.target.name]: event.target.value,
            
        })
    }

    return(
        <section className="Bikes">
            <h2>New Bike</h2>
            <form>
                <input type="text" value={bike.title} name="title" onChange={onChangeHandler}/><br/>
                <input type="text" value={bike.body} name="body" onChange={onChangeHandler}/><br/>
                <input type="text" value={bike.author} name="author" onChange={onChangeHandler}/><br/>

            <button onClick={saveBike}>SAVE</button>
            </form>
        </section>
        
    );
}