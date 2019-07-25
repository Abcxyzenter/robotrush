import React from 'react';
import {store} from '../redux/store'
import {SET_ROBOT_ARMOR} from '../redux/actions';

const ArmorShop = (props:any) => {

    let robotId:number = props.player;

    return <div className="shop__list">
                <div className="shop__list-title">Магазин брони</div>
                <div className="shop__list-wrapper">
                    {
                        props.armor.map((item:any, index:number)=>{
                           return <div className="shop__list-item"
                                       onClick={()=>{store.dispatch({type:SET_ROBOT_ARMOR, id:robotId, armor:item.id})}}
                                       key={index}>

                                   <span className="shop__list-item--title">{item.name} </span>
                                   <span className="shop__list-item--value"> защита: {item.armor*100} </span>
                                   <span className="shop__list-item--cost">цена: {item.score}</span>

                            </div>
                        })
                    }
                </div>
          </div>

};

export default ArmorShop