import React,{Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from "axios"
import Search from './components/users/Search';
class App extends Component
{
  state = {
    users : [],
    loading : false
  };
  async componentDidMount()
  {
    console.log("client id ="+process.env.CLIENT_ID);
    this.setState({loading : true});
    
    const res = await axios
    .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    this.setState({users : res.data,loading : false});
    console.log(res.data);
  }
  render()
  {
    return(
      <div className="App">
        <Navbar
          icon = "fab fa-github"
          title = " Github Finder"
        />
        <div className="container">
          <Search/>
          <Users
            loading = {this.state.loading}
            users = {this.state.users}
          />
        </div>
      </div>
    );
  }
}

export default App;
