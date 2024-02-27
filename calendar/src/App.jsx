//import { Component } from 'react'


import React, { Component } from 'react';
import NavbarContainer from './components/navbar/NavbarContainer';
import Calendar from './components/Calendar';
import './global.css';
import './calendar.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: '',
    };
  }

  handleMonthClick = (month) => {
    this.setState({ selectedMonth: month });
  };

  render() {
    const { selectedMonth } = this.state;

    return (
        <><NavbarContainer/>
      
      <div className="app-container">
        <div className="sidebar">
          <button id='janid'  onClick={() => this.handleMonthClick('January')}>January</button>
          <button id='febid' onClick={() => this.handleMonthClick('February')}>February</button>
          <button id='janid'  onClick={() => this.handleMonthClick('March')}>March</button>
          <button id='janid'  onClick={() => this.handleMonthClick('April')}>April</button>
          <button id='janid'  onClick={() => this.handleMonthClick('May')}>May</button>
          <button id='janid'  onClick={() => this.handleMonthClick('June')}>June</button>
          <button id='janid'  onClick={() => this.handleMonthClick('July')}>July</button>
          <button id='janid'  onClick={() => this.handleMonthClick('August')}>August</button>
          <button id='janid'  onClick={() => this.handleMonthClick('September')}>September</button>
          <button id='janid'  onClick={() => this.handleMonthClick('October')}>October</button>
          <button id='janid'  onClick={() => this.handleMonthClick('November')}>November</button>
          <button id='janid'  onClick={() => this.handleMonthClick('December')}>December</button>
        </div>
        <div className="main-content">
          <Calendar month={selectedMonth} isVisible={selectedMonth !== ''} />
        </div>
      </div>
      </>
    );
  }
}

export default App;




//==========


