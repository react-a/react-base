import React, { Component } from 'react';
import './App.css';
import Img from 'react-image';

class App extends Component {
  state = {
    users: []
  }
  // [...]
  async componentDidMount() {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ users: data })
      })
      .catch(console.log)
  }

  render() {
    // const imgUrl =v; 
    return (
      <div className="container">
        <div className="col-xs-12">
          <h1>Users</h1>
          {this.state.users.map((user) => (
            <div className="card" key={user.login}>
              <Img src={user.avatar_url} alt={user.avatar_id} height="100" width="100" />
              <div className="card-body">
                <h5 className="card-title">{user.login}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {user.site_admin &&
                    <span>
                      Admin
                    </span>
                  }
                  {!user.site_admin &&
                    <span>
                      No admin
                </span>
                  }
                </h6>

              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

}

export default App;
