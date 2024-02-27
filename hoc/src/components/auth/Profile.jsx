import React from 'react'
import Hoc from '../../hoc/Hoc'

const Profile = ({ profile }) => {
    console.log(profile)
    return (
        <div>
            {profile.name}
        </div>
    )
}

export default Hoc(Profile)