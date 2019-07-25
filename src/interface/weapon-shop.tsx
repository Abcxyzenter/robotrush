import React from 'react';
import {store} from '../redux/store'
import {SET_ROBOT_WEAPONS} from '../redux/actions';

const WeaponShop = (props:any) => {

    let robotId:number = props.player;

    return <div className="shop__list">
        <div className="shop__list-title">Магазин оружия</div>
            <div className="shop__list-wrapper">
                {
                    props.weapons.map((item:any, index:number)=>{
                        return <div className="shop__list-item"
                                    onClick={()=>{store.dispatch({type:SET_ROBOT_WEAPONS, id:robotId, weapon:item.id})}}
                                    key={index}>

                            <span className="shop__list-item--title">{item.name} </span>
                            <span className="shop__list-item--value"> урон: {item.damage} </span>
                            <span className="shop__list-item--cost">цена: {item.score}</span>

                        </div>
                    })
                }
            </div>
        </div>

};

export default WeaponShop