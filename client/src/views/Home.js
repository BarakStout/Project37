import React, { Component } from "react";
import NameContainer from '../containers/NameContainer';
import Dashboard from '../containers/Dashboard';
import socketIOClient from 'socket.io-client';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      page: "home",
      endpoint: "http://localhost:3001", // this is where we are connecting to with sockets
    };
      this.pageUpdate = this.pageUpdate.bind(this);
  }

  pageUpdate(val) {
      this.setState({
          page: val
      });
  }

  // method for emitting a socket.io event
  send = () => {
    const socket = socketIOClient(this.state.endpoint);

    // this emits an event to the socket (your server) with an argument of 'red'
    // you can make the argument any color you would like, or any kind of data you want to send.

    socket.emit('new message', 'hello world!');
    // socket.emit('change color', 'red', 'yellow') | you can have multiple arguments
  }

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('hello', (data) => {
      //document.body.style.backgroundColor = 'red';
      console.log(data);
    });
    socket.on('login', (data) => {
      console.log('got in');
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Application</h1>


            {(() => {
         switch (this.state.page) {
           case "home":   return <NameContainer action={this.pageUpdate}/>;
           case "dashboard": return <Dashboard data={socket} />;
           default:      return "helllllo";
         }
       })()}



        </header>
        <button onClick={() => this.send()}>Change Color</button>
      </div>
    );
  }
}

export default Home;
