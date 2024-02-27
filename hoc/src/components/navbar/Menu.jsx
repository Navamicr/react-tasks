import React from 'react'
import Hoc from '../../hoc/Hoc'

const Menu = ({ profile }) => {
    return (
        <div>
            <h1>Navbar</h1>
            <h2>{profile.company} is coming from hoc</h2>
        </div>
    )
}

export default Hoc(Menu)