import React, { Fragment } from 'react'

import NavbarContainer from '../../components/headers/Container'
import { Outlet } from 'react-router-dom'

const MyntraLayouts = () => {
    return (
        <Fragment>
            <NavbarContainer />{/* static component composition in layouts component */}
            <Outlet /> {/*dynamic route based on URL */}
        </Fragment>
    )
}

export default MyntraLayouts