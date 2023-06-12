import { useEffect, useState } from 'react';

const useMaxState = (states) => {
    const [maxState, setMaxState] = useState('')
    const [minState, setMinState] = useState('')
    const [indexArr, setIndexArr] = useState([])
    let maxIndex, minIndex;
   
    // LOOP THROUGH ARRAY OF OBJECTS
    // FIND THE LARGEST AND SMALLEST VALUE
    states.forEach((state, index) => {
        // console.log(state, index)
       
        indexArr.push(state.value)
    })
    

    maxIndex = indexArr.indexOf(Math.max(...indexArr))
    minIndex = indexArr.indexOf(Math.min(...indexArr))
    
    useEffect(() => {
        // LOOP THROUGH ARRAY OF OBJECTS
        // FIND THE INDEX THAT MATCHES MAX AND MIN
        states.forEach((state, index=(index + 1)) => {
            // console.log(state)

            if (maxIndex === index){
                if (state.value >= 50){
                    setMaxState(state.max)
                }

                else if (state.value < 50){
                    setMaxState(state.min)
                }
                // console.log("MAX", state.max)
                // console.log("INDEX", index)
            }
    
            if (minIndex === index){
                // console.log("MIN:", state.max)
                // console.log("INDEX:", index)
                if (state.value >= 50){
                    setMinState(state.max)
                } 
                else if (state.value < 50){
                    setMinState(state.min)
                }
            }
        })

    }, [states])


    return[maxState, minState]
}

export default useMaxState