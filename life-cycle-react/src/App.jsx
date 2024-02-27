import React, { Component } from 'react'

export default class App extends Component {
  //mounting phase methods
  // 1.constructor()
  // 2.getDerivedStateFromProps()
  // 3.render()
  // 4.componentDidMount()

  constructor(){
    super();
    console.log('Iam constructor and RENDER ONLY ONCE');
    console.log('THIS IS THE BEST PLACE FOR INITIALIZE THE STATE OBJECT AND BIND THIS KEYWORD');
    this.state={
      count:0,
      course:"java"
    };
  }
  static getDerivedStateFromProps(props,state){
    console.log('i am DerivedStateFromProps render after constructor and before render method and render again and again based on state and props');
    console.log('THIS METHODS IS RARE CASE USED ');
    //return{course:"js"}//course updated ,if we want to update states use this
  }

  componentDidMount(){
    console.log('iam ComponentDidMount i will render only once execute after all mounting life cycle');
    console.log('THIS IS BEST PLACE FOR CALLING NETWORK CALL OR AJAX CALLS AND INTERACT WITH DOM AND ANY OTHER');
    window.fetch("https://api.github.com/users").then(x=>{
      x.json().then(y=>this.setState({users: y,course:"python"}))
    })
  }

  handleClick=()=>{
    console.log('Click event has been Triggered');
    this.setState({count: this.state.count+1})
    
  }

  //UPDATE PHASE LIFE CYCLE METHODS
  // 1.getDerivedStateFromProps();
  // 2.shouldComponentUpdate();
  // 3.getSnapShotBeforeUpdate();
  // 4.componentDidUpdate();
  // 5.render();

  shouldComponentUpdate(nextProps,nextState){
    console.log('iam shouldComponentUpdate lets check it');
    return this.state.count !==nextState.count;//0,1,2

  }

  render() {
    console.log('Iam RENDER METHOD and RENDER again and again');
    console.log('THIS IS BEST PLACE FRO RENDERING JSX AND COMPOSE THE CHILD COMPONENT');
    return (
      <div>
        <button onClick={this.handleClick}>Click for Changes <strong>{this.state.count}</strong></button><br />
        <b>{this.state.course}</b>
      </div>
    )
  }
}
