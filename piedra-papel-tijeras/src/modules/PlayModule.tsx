import { useEffect } from "react";
import { Choice } from "../components/Choice";
import usePlayGame from "../hooks/usePlayGame";
import useGameStore from "../store/GameStore"

const PlayModule = () => {
    const choice = useGameStore(state => state.choice);
    const {status, cpuAnswer, generateCpuChoice} = usePlayGame();

    useEffect(() => {
        if(choice) {
            generateCpuChoice(choice);
        }
    }, [choice, generateCpuChoice])

    return (
        <div className="flex justify-round ">
            <div className="flex flex-col align-center">
                <span className="text-3xl text-center pb-5">Jugador</span>
                <Choice choice = {choice}/>
            </div>
            <div className="flex flex-column align-center">
                <span className="text-3xl text-center pb-5">CPU</span>
                <Choice choice = {cpuAnswer}/>
            </div>
        </div>
    )

}

export default PlayModule;