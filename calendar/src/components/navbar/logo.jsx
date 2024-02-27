import { Component } from 'react'
//import LOGO from './calendar.png'
export default class Logo extends Component {
  render() {
    return (
      <div className='logoBlock'>
        <a href="#">
          <span>
            <picture>
              <img id='logo' src="./src/components/navbar/logo4.png" alt="logo" />
            </picture>
          </span>
          </a>
      </div>
    )
  }
}