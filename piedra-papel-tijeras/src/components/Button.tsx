import React from "react";
import { Status } from "../types/status";
import useGameStore from "../store/GameStore";
import { STATUS } from "../constants/status";
import { STEPS } from "../constants/steps";
import useScoreStore from "../store/ScoreStore";

interface ButtonProps {
    status: Status | null,
}

const Button: React.FC<ButtonProps> = ({ status }) => {
    const setStep = useGameStore(state => state.setStep);
    const increaseScore = useScoreStore(state => state.increaseScore);

    const onClick = () => {
        switch (status) {
            case STATUS.WIN:
                increaseScore();
                setStep(STEPS.SELECTION);
                break;
            case STATUS.LOSE:
                setStep(STEPS.GAME_OVER);
                break;
            case STATUS.DRAW:
                setStep(STEPS.SELECTION);
                break;
            default:
                break;
        }
    }

    return (
        <button className="bg-lime-600 hover:bg-lime-200 font-bold rounded-lg w-40 py-3 text-xl m-auto text-white block" onClick={onClick}>Continuar</button>
    )
}

export default Button;