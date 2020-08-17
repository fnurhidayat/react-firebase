import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import firebase from '../services/firebase'
import { AuthContext } from '../providers/auth'

class Home extends Component {
  static contextType = AuthContext

  handleLogout = () => {
    firebase.auth().signOut()
    alert("You're logged out!")
  }

  render() {
    const { currentUser } = this.context
    console.log(currentUser)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to React</p>

            { !!currentUser && (
              <div>
                <button className="form-submit" onClick={this.handleLogout}>Logout</button>
              </div>
            )}
        </header>
      </div>
    );
  }
} 

export default Home;
