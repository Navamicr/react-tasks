import { createContext, useState } from "react";

export const CounterContextApi = createContext(0)

//create provider and children
const CounterProvider = ({ children }) => {
    //setting global variable
    const [count, setCount] = useState(0)
    const Increment = () => {
        setCount(prevVal => prevVal + 1)
    }
    const Decrement = () => {
        setCount(prevVal => prevVal - 1)
    }
    const Reset = () => {
        setCount(0)
    }
    return <CounterContextApi.Provider value={{ count, Increment, Decrement, Reset }}>
        {children}
    </CounterContextApi.Provider>
}
export default CounterProvider