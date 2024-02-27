import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'


const Profile = () => {
    let profileData = useLocation()
    let { avatar_url, login, html_url } = profileData.state
    return (
        <section id='profile'>
            <article>
                <header>
                    <NavLink to='/users' className='back_btn'>Back</NavLink>
                    <picture>
                        <img src={avatar_url} alt={login} />
                    </picture>
                </header>
                <main>
                    <h2>{login}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quisquam vero? Exercitationem quis nulla accusamus expedita deleniti hic maxime alias soluta architecto quod quidem eius labore cumque, ullam fugit, sapiente eum odit at magni? Sequi illum, neque mollitia porro quasi ducimus in blanditiis voluptatibus quas ab iure voluptatum culpa veniam architecto nam similique. Possimus harum dolores iure? Eum, labore hic! Error ducimus reprehenderit laboriosam incidunt officiis doloribus adipisci? Eum quasi consequatur aliquid optio porro suscipit debitis corporis officia quae! Magnam qui ipsam distinctio natus aspernatur illo minima, perspiciatis commodi cum! Ducimus incidunt officia architecto laboriosam dolorum iure necessitatibus ex eos.</p>
                    <a href={html_url} target='_blank' rel='noreferrer'>View GITHUB profile</a>
                </main>
            </article>
        </section>
    )
}

export default Profile