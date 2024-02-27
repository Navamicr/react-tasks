import{ Component } from 'react'


import Menu from './Menu'
import Logo from './logo'


export default class NavbarContainer extends Component {
  render() {
    return (
      <section id='navbarContainer'>
        <article className='container'>
            
            <Logo/>
           
            <Menu/>
        </article>
      </section>
    )
  }
}