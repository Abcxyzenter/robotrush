import React from 'react';
import {store} from '../redux/store'
import {SET_ROBOT_HEALTH, REMOVE_ARMOR, REMOVE_WEAPON} from '../redux/actions';


class Robot {

    id: number;
    name: string;
    health:number;
    weapons:[];
    armorList:[];
    armorValue:number;
    totalScore:number;

    constructor(robots:any) {

        this.id = robots.id;
        this.name = robots.name;
        this.health = robots.health;
        this.weapons = robots.weapons;
        this.armorList = robots.armorList;
        this.armorValue = robots.armorValue;
        this.totalScore = robots.totalScore;
    }

    kickRobot(id:number, damage:number):void{
        store.dispatch({type:SET_ROBOT_HEALTH, id:id, damage:damage});
    }
    removeWeapon(id:number, weapon:number):void{
        store.dispatch({type:REMOVE_WEAPON, id:id, weapon:weapon});
    }
    removeArmor(id:number, armor:number):void{
        store.dispatch({type:REMOVE_ARMOR, id:id, armor:armor});
    }

}

export default Robot