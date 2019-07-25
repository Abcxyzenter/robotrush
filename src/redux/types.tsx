
export const SET_ROBOT_HEALTH       = 'SET_ROBOT_HEALTH';
export const SET_ROBOT_WEAPONS      = 'SET_ROBOT_WEAPONS';
export const SET_ROBOT_ARMOR        = 'SET_ROBOT_ARMOR';
export const REMOVE_ARMOR           = 'REMOVE_ARMOR';
export const REMOVE_WEAPON          = 'REMOVE_WEAPON';
export const RESTART                = 'RESTART';
export const initialStateTypes      = 'initialStateTypes';
import { Action } from "redux"

export interface setRobotHealthType extends Action{
    type: typeof SET_ROBOT_HEALTH,
    id:number,
    damage:number
}
export interface addRobotWeaponType extends Action{
    type: typeof SET_ROBOT_WEAPONS,
    weapon:number,
    id:number
}
export interface setRobotArmorType extends Action{
    type: typeof SET_ROBOT_ARMOR,
    armor:number,
    id:number
}
export interface removeArmorType extends Action{
    type: typeof REMOVE_ARMOR,
    armor:number,
    id:number
}
export interface removeWeaponType extends Action{
    type: typeof REMOVE_WEAPON,
    weapon:number,
    id:number
}
export interface restart extends Action{
    type: typeof RESTART,
    id:number
}
export interface robotsTypes {
    id:number,
    name: string,
    health:number,
    weapons:any,
    armorList:any,
    armorValue:number,
    totalScore:number
}
export interface weaponsTypes{
    id:number,
    score:number,
    damage:number,
    name:string
}
export interface armorTypes{
    id:number,
    score:number,
    armor:number,
    name:string
}
export interface initialStateTypes{
    player:number,
    isWin:boolean,
    whoWin:number,
    robots:robotsTypes[],
    weapons:weaponsTypes[],
    armor:armorTypes[]
}
export type SystemActionTypes = setRobotHealthType | addRobotWeaponType | setRobotArmorType | removeArmorType | removeWeaponType | restart