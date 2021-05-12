import React from 'react'
import Stars from './Stars';

export default function Movie(props) {
    return (
        <li className="list-group-item d-flex justify-content-between" data-grade={props.item.grade} data-title={props.item.title} >
            <div className="justify-content-start">{props.item.title}</div> 
            <div className="justify-content-end d-flex">
            <Stars item={props.item}/>
            <button className="btn btn-sm mx-auto" onClick={() => props.deleteItem(props.item.id)}><img src="/delete.png" alt="Star" className="float-end" width="30px"></img></button>
            </div>
        </li>
    )
}
