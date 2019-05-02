import React from 'react';//, {Component} from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

class NameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sent: false
    };
    this.state = {
      endpoint: "http://localhost:3001" // this is where we are connecting to with sockets
    }
    this.socket = socketIOClient(this.state.endpoint)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.name);
    const name = this.state.name;
    // Tell the server your username
    this.socket.emit('add user', name);
    this.setState({sent: true});
    this.props.action('dashboard');
    // axios.post('http://localhost/api/notes', {name})
    //   .then((result) => {
    //     console.log(result);
    //     this.setState({sent: true});
    //   });

  }


  render() {
    if(this.state.sent) return <Redirect to='/dashboard' />;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Your Name:
          <input type="text" value={this.state.name || ''} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameContainer;
