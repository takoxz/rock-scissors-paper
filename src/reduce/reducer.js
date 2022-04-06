
const initialState = {
    myChoice: "",
    cpuChoice: "",
    scores: {
        myScore: 0,
        cpuScore: 0,
    },
    my_state: "",
    cpu_state: "",
}


const setStates = (state, cur_result) => {
    if(cur_result === "win"){
        state.my_state = "WIN";
        state.cpu_state = "LOSE";
        state.scores.myScore += 1;
    }else if(cur_result === "lose"){
        state.my_state = "LOSE";
        state.cpu_state = "WIN";
        state.scores.cpuScore += 1;
    }else{
        state.my_state = "TIE";
        state.cpu_state = "TIE";
    }
}

const evalResult = (state, action)=> {
    let cur_result;
    if (state.myChoice === state.cpuChoice){
        cur_result = "tie";
    }else if (state.myChoice === "rock"){
        if(state.cpuChoice === "scissors"){
            cur_result = "win";
        }else{
            cur_result = "lose";
        }
    }else if (state.myChoice === "scissors"){
        if(state.cpuChoice === "paper"){
            cur_result = "win";
        }else{
            cur_result = "lose";
        }
    }else{
        if(state.cpuChoice === "rock"){
            cur_result = "win";
        }else{
            cur_result = "lose";
        }
    }

    setStates(state, cur_result)

    return state;
}

const game = (state = initialState, action)=>{
    switch(action.type){
        case 'MY_CHOICE':
            return Object.assign({}, state, {myChoice: action.choice});
        
        case 'CPU_CHOICE':
            return Object.assign({}, state, {cpuChoice: action.choice})
        

        case 'EVAL_RESULT':
            return evalResult(state,action);

        default:
            return state;
        
    }
}

export default game;