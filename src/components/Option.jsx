import {connect} from 'react-redux';
import React from 'react'
import {onPlayerSelect} from '../shared/shared_function';

function Option({GameOption, choice, onPlayerSelect}) {
  return (
    <div className="p-6">
      <img src={GameOption} onClick={() => onPlayerSelect(choice)} className="cursor-pointer"/>  
    </div>
  )
}

const mapStateToProps = state => {
  return {
      myChoice: state.myChoice,
      cpuChoice: state.cpuChoice,
      scores: state.scores,

  }
}

const mapDispatchToProps = dispatch => {
  return {
      onPlayerSelect: (choice)=> onPlayerSelect(dispatch, choice)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Option)


