import { useMemo } from "react"
import { STEPS } from "./constants/steps"
import PlayModule from "./modules/PlayModule"
import SelectionModule from "./modules/SelectionModule"
import useGameStore from "./store/GameStore"

const renderModule = (step: STEPS) => {
  switch(step) {
    case STEPS.SELECTION:
      return <SelectionModule/>
    case STEPS.PLAY:
      return <PlayModule/>
    case STEPS.GAME_OVER:
      return <div>Result</div>
    default:
      return null;
      
  }
}

function App() {
  const step = useGameStore(state => state.step)
  const module = useMemo(() => renderModule(step), [step])

  return (
    <>
      {module}
    </>
  )
}

export default App
