import React, { useState } from "react";
import {useSelector} from 'react-redux';

function Header() {
  const myscore = useSelector(state => state.scores.myScore);
  const cpuscore = useSelector(state => state.scores.cpuScore);

  return (
    <div>
      <div className="p-6 bg-space-cadet">
          <div className="text-2xl text-center text-white">Rock Scissor Paper</div>
      </div>
      <div className='ScoreBanner bg-cool-green p-5 font-semibold'>
        <div className='BannerTextContainer text-3xl text-center  text-space-cadet p-3 bg-white rounded-md max-w-xs mx-auto flex items-center flex-col'>
          <div>Score</div>
          <div>{myscore} : {cpuscore}</div>
        </div>
      </div>
    </div>
  )
}

export default Header