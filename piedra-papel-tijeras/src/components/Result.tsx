import { STATUS } from "../constants/status"
import { Status } from "../types/status"

interface ResultProps{
    status: Status | null
}

export const Result: React.FC<ResultProps> = ({status}) => {
    switch(status){
        case STATUS.WIN:
            return  <div className="text-center m-5">
                        <span className="text-5xl font-bold text-lime-600">Ganaste</span>
                    </div>
                    
        case STATUS.DRAW:
            return  <div className="text-center m-5">
                        <span className="text-5xl font-bold text-amber-600">Empate</span>
                    </div> 

        case STATUS.LOSE:
            return  <div className="text-center m-5">
                        <span className="text-5xl font-bold text-rose-600">Perdiste</span>
                    </div>
        default:
            return null;
    }
}