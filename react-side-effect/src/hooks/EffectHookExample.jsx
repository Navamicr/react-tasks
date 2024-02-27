import React, { useEffect, useState } from 'react'
import { dbConnection } from '../dbConnections';

const EffectHookExample = ({ counter: { count, setCount } }) => {

    // let [count, setCount] = useState(0);
    // let handleIncrement = () => {
    //     setCount(count + 1)
    // }

    //syntax of useEffect
    //useEffect(setup,dependencies?(optional))

    //! eg for render method in fnl based ie without dependencies
    // useEffect(() => {
    //     document.title = `title is coming from useEffect ${count}`
    // })




    //! eg componentDidUpdate in fnl based ie dependency with state or props
    // useEffect(() => {
    //     document.title = `title is coming from useEffect ${count}`
    // }, [count])
    // without dependency is equal to render method in class based component



    //! Example of componentDidMount features in functional based component ie with dependencies empty array
    // useEffect(() => { }, []);//if it is empty array dependencies means that is componentDidMount in functional based compponnet.
    // dbConnection.connect();

    //! Example of componentWillUnmonut feature in functional based comp
    useEffect(() => {
        dbConnection.connect();
        return () => {
            dbConnection.disConnect();
        }
    }, []);

    return (
        <div>
            <h1>Hook Based Component</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default EffectHookExample