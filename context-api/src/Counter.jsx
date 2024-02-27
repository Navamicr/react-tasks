// import { Fragment } from 'react'
// import { CounterContextApi } from './context/CounterContext'


// const Counter = () => {

//     return (
//         <Fragment>
//             <CounterContextApi.Consumer>
//                 {
//                     val => {
//                         return <Fragment>
//                             <h1>{val.count}</h1>
//                             <button onClick={val.Increment}>Increment</button>
//                             <button onClick={val.Decrement}>Decrement</button>
//                             <button onClick={val.Reset}>Reset</button>
//                         </Fragment>
//                     }
//                 }


//             </CounterContextApi.Consumer>
//         </Fragment>

//     )
// }

// export default Counter

//============================================================================= using useContext
import { useContext } from 'react'
import { CounterContextApi } from './context/CounterContext'

const Counter = () => {
    let { count, Increment, Decrement, Reset } = useContext(CounterContextApi)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Counter