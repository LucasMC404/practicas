import { STEPS } from "../constants/steps";
import useGameStore from "../store/GameStore"
import useScoreStore from "../store/ScoreStore";

const GameOverModule = () => {
    const setStep = useGameStore(state => state.setStep);
    const resetScore = useScoreStore(state => state.resetScore)

    const onClickPlayAgain = () =>{
        setStep(STEPS.SELECTION);
        resetScore();
    }

    return (
        <button className="my-20 bg-lime-600 hover:bg-lime-200 font-bold rounded-lg w-40 py-3 text-xl m-auto text-white block" onClick={onClickPlayAgain}>Jugar de Nuevo</button>
    )
}

export default GameOverModule;