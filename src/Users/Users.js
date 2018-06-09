import React, { Component } from 'react';
import User from './User';

class Users extends Component {

    state = {
        users : [
            { id:1, name: "john", age: 20},
            { id:2, name: "jane", age: 30},
            { id:3, name: "peter", age: 40}
        ],
        text : "current text"
    }

    decreaseAgeHandler = () => {
        const newState = this.state.users.map((user) => {
            const newUser = user;
            newUser.age-=10;
            return newUser;
        });
        
        this.setState({
            user:newState
        });
    }

    changeTextHandler = (event) => {
        const updatedText = event.target.value;

        this.setState({
            text:updatedText
        });
    }

    deleteItemHandler = (index) => {
        const users = [...this.state.users];
        users.splice(index, 1);

        this.setState({
            users:users
        });
    }

    render() {
        return(
            <div>
                <h4>{this.props.title}</h4>
                <button onClick={this.decreaseAgeHandler}>Decrease 10 years</button>
                {
                    this.state.users.map((user) => {
                        return(
                            <User name={user.name} 
                                age={user.age} 
                                key={user.id}
                                deleteHandler={this.deleteItemHandler}>
                            </User>
                        )
                    })
                }
                <input type="text" value={this.state.text} onChange={this.changeTextHandler}/>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default Users;