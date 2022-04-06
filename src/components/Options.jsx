import React from 'react'
import Option from './Option'
import RockOption from '../assets/rock.png'
import ScissorsOption from '../assets/scissors.png'
import PaperOption from '../assets/paper.png'

function Options() {
  return (
      <div className="flex flex-row justify-evenly m-6">
        <Option GameOption={RockOption} choice="rock"/>
        <Option GameOption={ScissorsOption} choice="scissors"/>
        <Option GameOption={PaperOption} choice="paper"/>
      </div>
  )
}

export default Options