export const SET_ROBOT_HEALTH       = 'SET_ROBOT_HEALTH';
export const SET_ROBOT_WEAPONS      = 'SET_ROBOT_WEAPONS';
export const SET_ROBOT_ARMOR        = 'SET_ROBOT_ARMOR';
export const REMOVE_ARMOR           = 'REMOVE_ARMOR';
export const REMOVE_WEAPON          = 'REMOVE_WEAPON';
export const RESTART                = 'RESTART';

export const setRobotHealth  = (damage:number, id:number) => ({
    type: SET_ROBOT_HEALTH,
    id:id,
    damage:damage
});
export const addRobotWeapon = (weapon:number, id:number) => ({
    type: SET_ROBOT_WEAPONS,
    weapon:weapon,
    id:id
});
export const setRobotArmor = (armor:number, id:number) => ({
    type: SET_ROBOT_ARMOR,
    armor:armor,
    id:id
});
export const removeArmor = (armor:number, id:number) => ({
    type: REMOVE_ARMOR,
    armor:armor,
    id:id
});
export const removeWeapon = (weapon:number, id:number) => ({
    type: REMOVE_WEAPON,
    weapon:weapon,
    id:id
});
export const restart = () => ({
    type: RESTART,
    id:0
});