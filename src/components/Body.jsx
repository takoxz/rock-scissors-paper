import React from "react";
import {useSelector} from 'react-redux';
import Frame from './Frame'
import Options from './Options';
import {getIcon} from '../shared/shared_function';


function Body() {
  const myChoice = useSelector(state => state.myChoice);
  const cpuChoice = useSelector(state => state.cpuChoice);
  
  const myIcon = getIcon(myChoice)
  const cpuIcon = getIcon(cpuChoice)

  const myState = useSelector(state => state.my_state);
  const cpuState = useSelector(state => state.cpu_state);

  return (
    <div className="bg-cool-green min-h-[75vh]">
      <div className="flex flex-col">
          <div className='flex items-center'>
              <Frame Icon={myIcon} Title="You" GameState={myState}/> 
              <Frame Icon={cpuIcon} Title="CPU" GameState={cpuState}/> 
          </div>
      </div>
      <div className="bg-yellow-crayola">
          <Options/>
      </div>
    </div>
  )
}

export default Body