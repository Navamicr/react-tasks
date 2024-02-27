import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div className='sideMenu'>
            <div className="logo">ALPHA</div>
            <div className="menu">
                <ul>
                    <li>
                        <NavLink to='/'
                            style={({ isActive }) => ({
                                background: isActive ? "purple" : '',
                                borderBottom: isActive ? '1px solid #ffc10778' : ''

                            })}
                        >Dashboard</NavLink>
                    </li>
                    {/* <li>
                        <Link to='/'>Users</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/players">Players</Link>
                    </li> */}
                    <li>
                        <NavLink to='/login'
                            style={({ isActive }) => ({
                                background: isActive ? "purple" : '',
                                borderBottom: isActive ? '1px solid #ffc10778' : ''
                            })}
                        >Login</NavLink>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Menu