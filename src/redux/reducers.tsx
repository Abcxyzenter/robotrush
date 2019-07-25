import { initialStateTypes, SystemActionTypes} from './types';
import {SET_ROBOT_HEALTH, SET_ROBOT_WEAPONS, SET_ROBOT_ARMOR, REMOVE_ARMOR, REMOVE_WEAPON, RESTART}   from './actions';

const initialState: initialStateTypes = {
    player:1,
    isWin:false,
    whoWin:0,
    robots:[
        {
            id:1,
            name: 'playerOne',
            health:100,
            weapons:[],
            armorList:[],
            armorValue:1,
            totalScore:100
        },
        {
            id:2,
            name: 'playerTwo',
            health:100,
            weapons:[],
            armorList:[],
            armorValue:1,
            totalScore:100
        }
    ],
    weapons:[
        {
            id:1,
            score:20,
            damage:10,
            name:'молоток'
        },
        {
            id:2,
            score:50,
            damage:20,
            name:'топор'
        },
        {
            id:3,
            score:80,
            damage:40,
            name:'электропила'
        }
    ],
    armor:[
        {
            id:1,
            score:20,
            armor:0.1,
            name:'подушка'
        },
        {
            id:2,
            score:50,
            armor:0.2,
            name:'сковорода'
        },
        {
            id:3,
            score:80,
            armor:0.4,
            name:'дверь'
        }
    ]
};



export const robotReducer = (state=initialState, action:SystemActionTypes) => {

    let robotIndex          :number   = action.id-1 > 0 ? action.id-1 : 0;
    let secondRobotIndex    :number   = robotIndex === 0 ? 1 : 0;
    let player              :number   = state.player === 1 ? 2 : 1;
    let isWin               :boolean  = state.isWin;
    let whoWin              :number   = state.whoWin;
    let robot               :any      = state.robots;
    let weapons             :any      = state.weapons;
    let armor               :any      = state.armor;
    let robotHealth         :number   = robot[robotIndex].health;
    let robotArmorValue     :number   = robot[robotIndex].armorValue;
    let robotTotalScore     :number   = robot[robotIndex].totalScore;
    let robotWeapons        :any      = robot[robotIndex].weapons;
    let robotArmorList      :any      = robot[robotIndex].armorList;
    let robotTotalScoreNew  :number   = robotTotalScore;
    let robotWeaponListNew  :any      = robotWeapons;
    let robotArmorValueNew  :any      = robotArmorValue;
    let robotArmorListNew   :any      = robotArmorList;

    switch (action.type){
        case SET_ROBOT_HEALTH:
             if (player === action.id){
                 let newHealth  :number = Math.round(robotHealth-(action.damage/robotArmorValue));
                 let newScore   :number = Math.round(robot[secondRobotIndex].totalScore + (action.damage/5));
                 newHealth = newHealth>0 ? newHealth : 0;
                 isWin = newHealth <= 0;
                 if (isWin){
                     whoWin = secondRobotIndex+1;
                 }
                 return {
                     ...state,
                     player:player,
                     isWin:isWin,
                     whoWin:whoWin,
                     robots:{...state.robots,
                         [robotIndex]:{
                             ...state.robots[robotIndex],
                             health: newHealth
                         },
                         [secondRobotIndex]:{
                             ...state.robots[secondRobotIndex],
                             totalScore: newScore
                         }
                     },
                 };
             }
             else{
                 return {...state}
             }
        case SET_ROBOT_WEAPONS:
            if (player !== action.id){
                let issetWeapon  :boolean  = false;
                let weaponScore  :number   = weapons[action.weapon-1].score;
                for (let i=0; i<robotWeapons.length; i++){
                    if (robotWeapons[i].id === action.weapon){
                        issetWeapon = true;
                    }
                }
                if(!issetWeapon && ((robotTotalScore - weaponScore)>=0)){
                    robotTotalScoreNew = robotTotalScore - weaponScore;
                    robotWeaponListNew.push(weapons[action.weapon-1]);
                }
                else {
                    player = player === 1 ? 2 : 1;
                }
                return {
                    ...state,
                    player:player,
                    robots:{
                        ...state.robots,
                        [robotIndex]:{
                            ...state.robots[robotIndex],
                            weapons: robotWeaponListNew,
                            totalScore: robotTotalScoreNew
                        }
                    }
                }
            }
            else{
                return {...state}
            }
        case SET_ROBOT_ARMOR:
            if (player !== action.id){
                let issetArmor   :boolean  = false;
                let armorScore   :number   = armor[action.armor-1].score;
                for (let i=0; i<robotArmorList.length; i++){
                    if (robotArmorList[i].id === action.armor){
                        issetArmor = true;
                    }
                }
                if(!issetArmor && ((robotTotalScore - armorScore)>=0)){
                    robotTotalScoreNew = robotTotalScore - armorScore;
                    robotArmorListNew.push(armor[action.armor-1]);
                    robotArmorValueNew = robotArmorValueNew + armor[action.armor-1].armor;
                }
                else {
                    player = player === 1 ? 2 : 1;
                }
                return {
                    ...state,
                    player:player,
                    robots:{
                        ...state.robots,
                        [robotIndex]:{
                            ...state.robots[robotIndex],
                            armorList: robotArmorListNew,
                            totalScore: robotTotalScoreNew,
                            armorValue: robotArmorValueNew
                        }}
                }
            }
            else{
                return {...state}
            }
        case REMOVE_ARMOR:
            if (player !== action.id){
                for (let i=0; i<robotArmorListNew.length; i++){
                    if (robotArmorListNew[i].id === action.armor){
                        robotTotalScoreNew = robotTotalScore + robotArmorListNew[i].score;
                        robotArmorValueNew = robotArmorValueNew - robotArmorListNew[i].armor;
                        robotArmorListNew.splice(i,1);
                    }
                }
                return {
                    ...state,
                    robots:{
                        ...state.robots,
                        [robotIndex]:{
                            ...state.robots[robotIndex],
                            armorList: robotArmorListNew,
                            totalScore: robotTotalScoreNew,
                            armorValue: robotArmorValueNew
                        }}
                }
            }
            else{
                return {...state}
            }
        case REMOVE_WEAPON:
            if (player !== action.id){
                for (let i=0; i<robotWeaponListNew.length; i++){
                    if (robotWeaponListNew[i].id === action.weapon){
                        robotTotalScoreNew = robotTotalScore + robotWeaponListNew[i].score;
                        robotWeaponListNew.splice(i,1);
                    }
                }
                return {
                    ...state,
                    robots:{
                        ...state.robots,
                        [robotIndex]:{
                            ...state.robots[robotIndex],
                            weapon: robotWeaponListNew,
                            totalScore: robotTotalScoreNew
                        }}
                };
            }
            else{
                return {...state}
            }
        case RESTART:
            return {...initialState}
        }
    return state;
};

export default robotReducer;