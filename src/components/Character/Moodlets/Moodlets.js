import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../App';

const Moodlets = () => {

    const character = useContext(UserContext)
    // const [states, setStates] = useState(character.states)
    // const charStateKey = Object.keys(character.charStates)
    // const charStateVal = Object.values(character.charStates) 
      
    return (
    <div className="Moodlets">
        <h1>CHARACTER</h1>
        <div className="states">
          {
            character.states.map((state, index) => {
              return(
                <div className="state" key={index}>
                  <div className="stateLabel">{state.label}</div>
                  <div className="stateValue">{state.value}</div>
                </div>
              )
            }
            )
          }
        </div>
    </div>
  )
}

export default Moodlets