import React, { Component } from "react";
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import socketIOClient from 'socket.io-client';
import Modal from 'react-modal';


class Dashboard extends Component {
  constructor() {
      super();
      this.state = {
          isPaneOpen: false,
          isPaneOpenLeft: false,
          userList: {},
          endpoint: "http://localhost:3001" // this is where we are connecting to with sockets
      }
    }

  componentDidMount() {
      Modal.setAppElement('body');
  }

  render() {
    //const socket = socketIOClient(this.state.endpoint);
    // const socket = this.data;
    // socket.on('login', (data) => {
    //   console.log('got in');
    // });
    // socket.on('update', (data) => {
    //   //document.body.style.backgroundColor = 'red';
    //   console.log('hello!');
    // });

    return (
      <div>
        <h2>HELLO</h2>
        <button onClick={() => this.setState({ isPaneOpen: true })}>Click me to open right pane!</button>
        <SlidingPane
                className='some-custom-class'
                overlayClassName='some-custom-overlay-class'
                isOpen={ this.state.isPaneOpen }
                title='Hey, it is optional pane title.  I can be React component too.'
                subtitle='Optional subtitle.'
                width='200px'
                from='right'
                onRequestClose={ () => {
                    // triggered on "<" on left top click or on outside click
                    this.setState({ isPaneOpen: false });
                } }>
                <div>And I am pane content. BTW, what rocks?</div>
                <div>Users: {this.state.users}</div>
        </SlidingPane>
      </div>
    );
  }
}

export default Dashboard;
