import React from "react";
import './App.css';
import RobotTemplate from "./robots/robot-template"
import ActivePlayer from "./interface/active-player"
import ArmorShop from "./interface/armor-shop"
import WeaponShop from "./interface/weapon-shop"
import {RESTART} from './redux/actions';

const App: React.FC = (store:any) => {
    let player      :number     = store.state.player;
    let isWin       :boolean    = store.state.isWin;
    let whoWin      :number     = store.state.whoWin;
    let winModal    :any        = '';

    function restart():void{
        store.dispatch({type:RESTART});
    }
    if (isWin){
        winModal = <div className="win">
                        <span className="win__title">Победил игрок {whoWin}</span>
                        <span className="win__btn" onClick={()=>{restart()}}>Начать заново</span>
                  </div>
    }
    return (
        <div className="App">
            <ActivePlayer player = {player}/>
            <div className="players">
                <div className="players__player --first-player">
                     <RobotTemplate robots = {store.state.robots[0]} player = {player}/>
                </div>
                <div className="players__player --second-player">
                    <RobotTemplate robots = {store.state.robots[1]} player = {player}/>
                </div>
            </div>
            <div className="shop">
                <ArmorShop armor = {store.state.armor} player = {player}/>
                <WeaponShop weapons = {store.state.weapons} player = {player}/>
            </div>
            {winModal}
        </div>
    );
};
export default App;
