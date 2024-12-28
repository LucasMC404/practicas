import { useEffect, useState } from "react";
import { Choice } from "../components/Choice";
import usePlayGame from "../hooks/usePlayGame";
import useGameStore from "../store/GameStore"
import { Result } from "../components/Result";
import Button from "../components/Button";

const PlayModule = () => {
    const choice = useGameStore(state => state.choice);
    const { status, cpuAnswer, generateCpuChoice } = usePlayGame();
    const [countDown, setcountDown] = useState(3);

    useEffect(() => {
        if (choice) {
            generateCpuChoice(choice);
        }
    }, [choice, generateCpuChoice]);

    useEffect(() => {
        if (countDown > 0) {
            setTimeout(() => setcountDown(countDown - 1), 1000)
        }
    }, [countDown]);

    if (countDown > 0) {
        return (
            <div className="text-center block my-20">
                <span className="text-rose-600 font-bold text-9xl">{countDown}</span>
            </div>
        )
    }

    return (
        <>
            <Result status={status} />
            <div className="flex justify-around ">
                <div className="flex flex-col align-center">
                    <span className="text-3xl text-center pb-5">Jugador</span>
                    <Choice choice={choice} />
                </div>
                <div className="flex flex-col align-center">
                    <span className="text-3xl text-center pb-5">CPU</span>
                    <Choice choice={cpuAnswer} />
                </div>
            </div>
            <Button status={status} />
        </>

    )

}

export default PlayModule;