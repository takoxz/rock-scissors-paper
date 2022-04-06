//ACTION INCREMENT - describes what you want to do

export const evaluateResult = () =>{
    return {
        type: 'EVAL_RESULT',
    }
}

export const setMyChoice = (choice) => {
    return {
        type: 'MY_CHOICE',
        choice
    }
}

export const setCPUChoice = (choice) => {
    return {
        type: 'CPU_CHOICE',
        choice
    }
}