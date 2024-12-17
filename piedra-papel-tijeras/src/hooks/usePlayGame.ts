import { useCallback, useState } from "react"
import { Answer } from "../types/answer"
import { Status } from "../types/status"
import { ANSWER } from "../constants/answers"
import { STATUS } from "../constants/status"

const usePlayGame = () => {
    const [status, setStatus] = useState<Status | null >(null);
    const [cpuAnswer, setCpuAnswer] = useState<Answer | null>(null);

    const generateCpuChoice = useCallback((choice: Answer) => {
        const randomIndex = Math.floor(Math.random() * ANSWER.length);
        const cpuChoice = ANSWER[randomIndex];

        setCpuAnswer(cpuChoice);
        
        if(choice === cpuChoice){
            setStatus(STATUS.DRAW);
            return;
        }

        if(choice === ANSWER[2] && cpuChoice === ANSWER[0]){ //TIJERAS VS PAPEL
            setStatus(STATUS.WIN);
            return;
        }

        if(choice === ANSWER[1] && cpuChoice === ANSWER[2]){  //PIEDRA VS TIJERA
            setStatus(STATUS.WIN);
            return;
        }

        if(choice === ANSWER[0] && cpuChoice === ANSWER[2]){  //PAPEL VS TIJERAS
            setStatus(STATUS.WIN);
            return;
        }

        setStatus(STATUS.LOSE);

    }, [])

    return {status, cpuAnswer, generateCpuChoice};
}

export default usePlayGame;