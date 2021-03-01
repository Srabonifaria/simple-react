import { useEffect, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Player from './Component/Player/Player';
import Select from './Component/Select/Select';
import playerData from './fakeData/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [player,setPlayer] =useState([]);
  const [select,setSelect] =useState([]);
useEffect(() => {
  setPlayer(playerData);
  //  console.log(playerData);
   }, [])

   const handleAddPlayer = (player) => {
    const newSelect = [...select, player];
    setSelect(newSelect)
    }

  return (
    <div >
      <Header></Header>
      <div className="Player-Container">
      <div className="Player">
    {
          player.map(player => <Player handleAddPlayer={handleAddPlayer} player={player} key={player.name}></Player>)
        }
    </div>
      <div className="Player-info">
        <h1>Added Player</h1>
      <h4>Player loaded: {player.length}</h4>
    <h4>Player Added: {select.length}</h4>
    <Select select={select}></Select>
    <button className="btn btn-dark">Done</button>
       
      </div>
    </div>
    </div>
  );
}

export default App;
