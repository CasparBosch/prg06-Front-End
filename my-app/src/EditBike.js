import { useState } from "react";
import {Link, Outlet, useParams } from "react-router";

const URI_COLLECTION = "http://145.24.222.193:8000"

export function EditBike(props){
    console.log(props)

    const params = useParams()

    const [bike, setBike]= useState({
        title:"",
        body:"",
        author:""
    })

    const saveBike = (event) => {
        event.preventDefault()

        fetch(URI_COLLECTION + "/" + params.id, {
            method: 'PUT',
            headers: {
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(bike)
        })
            .then((response) => props.bikelistRefreshHandler())
            
    }

    const onChangeHandler = (event) =>{
        setBike({
            ...bike,
            [event.target.name]:event.target.value,
        })
    }

    return <section>
        <h2>Edit Bike</h2>
        <form>
            <p></p>
        <input type="text" value ={bike.title} name = "title" onChange={onChangeHandler}/><br/>
        <input type="text" value ={bike.body} name = "body" onChange={onChangeHandler}/><br/>
        <input type="text" value ={bike.author} name = "author" onChange={onChangeHandler}/><br/>
        <button onClick={saveBike}>SAVE</button>
        </form>
        
    </section>
}