import React from 'react';

const ItemArmor = (props:any) => {

    if (props.activePlayer) {
        return <div className="robot-armor__item">
                    <span className="robot-armor__item-name">{props.name}</span>
                    <span className="robot-weapon__item-value">защита {props.armor * 100}</span>
                    <span
                        className="action-btn --active"
                        onClick={props.removeArmor}>убрать</span>
                </div>
    }
    else{
        return <div className="robot-armor__item">
            <span className="robot-armor__item-name">{props.name}</span>
            <span className="robot-armor__item-value">защита {props.armor * 100}</span>
            <span className="action-btn --disabled">убрать</span>
        </div>
    }

};

export default ItemArmor