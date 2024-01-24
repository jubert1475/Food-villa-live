
import { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        Address: "Dummy address",
        avatar_url: "Dummy Avatar",
      },
    };
    console.log("Profile Constructor")
  }

  async componentDidMount() {
    console.log("Profile compDidMount")
    const data = await fetch("https://api.github.com/users/jubert1475");
    const json = await data.json();
    console.log(json);

    this.setState({
        userInfo:json

    })
  }

  render() {
    console.log("Profile Render")
    return (
      <div>
        <h1>User Profile</h1>
        <img src={this.state.userInfo.avatar_url}/>
        <h2>Name:{this.state.userInfo.name}</h2>
        <h2>Address:{this.state.userInfo.Address}</h2>
        <h1>UserName: {this.props.UserName}</h1> accepting props from parent component;
        
       
      </div>
    );
        

  }
}

export default ProfileClass;