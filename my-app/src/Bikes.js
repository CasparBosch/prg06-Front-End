import React from "react";
import { useState } from 'react';
import {Link} from "react-router-dom";
import "./style.css";

export function Bike(props) {
    console.log(props)

    const deleteBike = () => {
        fetch(props.bike._links.self.href, {
            method: 'DELETE', 
            headers: {
              'Accept': 'application/json'
            }})
            .then((response) => props.bikelistRefreshHandler())

    }

    const [likes, setLikes] = useState(0)

    const addLike = () => {
    setLikes((value) => value + 1)
    };

    const [name, setName] = useState(props.name)

    const inputHandler = (event) => {
    setName(event.target.value)
    }

    return(
        <section className="Bikes">
            <h2>{props.bike.title}</h2>
            <p>Likes: {likes}</p>
            <button onClick={addLike}>Like</button>
            <button><Link to = {"bikes/" + props.bike.id}>Read More</Link></button>
            <button onClick={deleteBike}>DELETE</button>
        </section>
        
    );
}