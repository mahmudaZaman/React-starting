import React, { Component } from 'react';

class Person extends Component {
  constructor(props){
    super(props)
    console.log("Person :: Constructor called with prop", props)
  }
  state = {}
  static getDerivedStateFromProps(props, state){
    console.log("Person :: getDerivedStateFromProps called with prop", props, state)
    return state;
  }

  componentDidMount(){
    console.log("Person :: componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Person :: shouldComponentUpdate called with prop", nextProps, nextState,this.props,this.state)
    return true;
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("Person :: componentDidUpdate called with prop", prevProps, prevState, snapshot)
  }
  render() {
    console.log("Person :: render")
    return (
      <div>
          <label>name</label>
          <p>{this.props.name}</p>
          <label>age</label>
          <p>{this.props.age}</p>
      </div>
    );
  }
}

export default Person;
