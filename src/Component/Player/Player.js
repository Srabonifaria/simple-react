import React from 'react';
import './Player.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {name,Born,ODIdebut,img,Testdebut,salary} = props.player
    const imgStyle = {height:'200px'}
    const playerStyle ={borderBottom:'2px solid lightgray',margin:'10px',padding:'10px'}
   const handleAddPlayer = props.handleAddPlayer
    return (
            <div style={playerStyle}>
            <img style={imgStyle} src={img} alt=""/>
            <h2>Name: {name}</h2>
            <h4>Born: {Born}</h4>
            <h5>Salary:{salary}</h5>
           <p><small>ODI debut: {ODIdebut}</small></p>
           <p>Testdebut: {Testdebut}</p>
            <button className="btn btn-info" onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon  icon ={faCheck}/>Add Players</button>
            </div>
        
    );
};

export default Player;