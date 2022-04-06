import React from 'react'

function Frame({Icon,Title, GameState}) {
  return (
    <div className="flex-1">
      <div className="rounded-md max-w-xs mx-auto text-space-cadet font-semibold p-5">
        <div className="text-3xl text-center p-3">{Title}</div>
      </div>
        <img src={Icon} className="mx-auto mb-5"/>
        {GameState && 
        <div className="text-2xl text-center rounded-md w-20 p-2 mx-auto bg-space-cadet text-white">{GameState}
        </div>
        }

    </div>
  )
}

export default Frame