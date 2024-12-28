import useScoreStore from "../store/ScoreStore"

const Score = () => {
    const score = useScoreStore(state => state.score);
    const maxScore = useScoreStore(state => state.maxScore);

    return (
        <div className="flex-column justify-items-center">
            <h2 className="text-2xl font-bold"> Puntaje: {score}</h2>
            <h2 className="text-2xl font-bold"> Puntaje más alto: {maxScore}</h2>
        </div>   
    )
}

export default Score;