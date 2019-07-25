import React from 'react';
import Robot from "./robot"
import ItemArmor from '.././item/item-armor'
import ItemWeapon from '.././item/item-weapon'

const RobotTemplate = (props:any) => {

    let robot = new Robot(props.robots);
    let activePlayer = props.player === robot.id;
    let vsRobot:number = robot.id === 1 ? 2 : 1;
    let armor:any = <div className="robot-armor__item" >
                        <span className="robot-armor__item-name --redtext">нет брони</span>
                    </div>;
    if (robot.armorList.length>0){
        armor = robot.armorList.map((item:any, index:number)=>{
            return <ItemArmor
                key             = {index}
                name            = {item.name}
                armor           = {item.armor}
                removeArmor     = {()=>robot.removeArmor(robot.id, item.id)}
                activePlayer    = {activePlayer}
            />
        });
    }
    let activeBtnClass = activePlayer ? 'action-btn --active' : 'action-btn --disabled';
    let weapon:any = <div className="robot-weapon__item" >
                        <span className="robot-weapon__item-name">клешня</span>
                        <span className="robot-weapon__item-value">сила 5</span>
                        <span
                            className={activeBtnClass}
                            onClick= {()=>robot.kickRobot(vsRobot, 5)}>ударить</span>
                    </div>;
    if (robot.weapons.length>0){
        weapon = robot.weapons.map((item:any, index:number)=>{
            return <ItemWeapon
                key          = {index}
                name         = {item.name}
                damage       = {item.damage}
                kickRobot    = {()=>robot.kickRobot(vsRobot, item.damage)}
                removeWeapon = {()=>robot.removeWeapon(robot.id, item.id)}
                activePlayer = {activePlayer}
            />
        });
    }
    {
     return <div className="robot" >
                 <div className="robot-name">{robot.name}</div>
                    <div className="robot-money"><span>золото</span><span className="value">{robot.totalScore}</span></div>
                    <div className="robot-health"><span>электричество</span><span className="value">{robot.health}</span></div>
                    <div className="robot-armor--value"><span>рейтинг брони</span><span className="value">{robot.armorValue}</span></div>
                 <div className="robot-weapons">
                     <h3>Оружие</h3>
                     {weapon}
                 </div>
                 <div className="robot-armor">
                     <h3>Броня</h3>
                     {armor}
                 </div>
            </div>
     }

};
export default RobotTemplate