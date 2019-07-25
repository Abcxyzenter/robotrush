import React from 'react';

const ItemWeapon = (props:any) => {

    if (props.activePlayer){
        return <div className="robot-weapon__item" >
            <span className="robot-weapon__item-name">{props.name}</span>
            <span className="robot-weapon__item-value">сила {props.damage}</span>
            <span
                className="action-btn --active"
                onClick={props.removeWeapon}>убрать</span>
            <span
                className="action-btn --active"
                onClick={props.kickRobot}>ударить</span>
        </div>
    }
    else{
        return <div className="robot-armor__item" >
            <span className="robot-weapon__item-name">{props.name}</span>
            <span className="robot-weapon__item-value">сила {props.damage}</span>
            <span className="action-btn --disabled">убрать</span>
            <span className="action-btn --disabled">ударить</span>
        </div>
    }
};

export default ItemWeapon