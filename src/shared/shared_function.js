import RockOption from '../assets/rock_outlined.png'
import ScissorsOption from '../assets/scissors_outlined.png'
import PaperOption from '../assets/paper_outlined.png'
import QMarkIcon from '../assets/ask.png'

import {
    evaluateResult,
    setMyChoice,
    setCPUChoice,
  } from "../action/action"
  
  const generateChoice = () =>{
    const selection = ["rock", "scissors", "paper"]
    const randNum = Math.floor((Math.random() * 3))
    return  selection[randNum]
  }
  
  const onPlayerSelect = (dispatch, mySelectedChoice) =>{
    const cpuSelectedChoice = generateChoice();
    dispatch(setMyChoice(mySelectedChoice));
    dispatch(setCPUChoice(cpuSelectedChoice));
    dispatch(evaluateResult());
  }
  
  const getIcon = (choice) =>{
    if(choice === "scissors"){
      return ScissorsOption
    }else if(choice === "rock"){
      return RockOption
    }else if (choice === "paper"){
      return PaperOption
    }else{
      return QMarkIcon
    }
  }

export {onPlayerSelect, getIcon};  
  