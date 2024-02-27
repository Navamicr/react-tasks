import React, { Fragment, useState } from 'react'
import PLAYERS from '../../player.json'
import { useLocation } from 'react-router-dom'

const Players = () => {
    let location = useLocation()
    let [state, setState] = useState(PLAYERS)
    return (
        <main>
            {/* <div>
                <h1>{location.state.name}</h1>
                <h1>{location.state.country}</h1>
            </div> */}

            <div>
                <h1>All indian cricket players list</h1>
                <div className="users">
                    {
                        state.map.length > 0 && state.map(player => (
                            <Fragment key={player.id}>
                                <div className="container">
                                    <figure>
                                        <picture>
                                            <img src={player.photo} alt={player.name} height={150} width={150} />
                                        </picture>
                                    </figure>
                                </div>

                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Players