import React, { Fragment } from 'react'
import { AirtelContextApi } from '../../context/AirtelContext'

const Navami = () => {
    let { Consumer } = AirtelContextApi
    return (
        <Fragment>
            <div>Navami is using airtel sim..</div>
            <div>

                {/* consume contextapi by using callback fn */}
                <Consumer>{value => {
                    return (
                        <>
                            <h1>Network: {value.network_name}</h1>
                            <p>Price:  &#8377;{value.price}</p>
                            <p>validity: {value.duration} month</p>
                            <p>nearest Tower: {value.nearest_tower}</p>
                            <p>sim type: {value.sim_type}</p>
                        </>
                    )
                }}</Consumer>
            </div>
        </Fragment>

    )
}

export default Navami