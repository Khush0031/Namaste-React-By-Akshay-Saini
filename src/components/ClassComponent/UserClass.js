import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        username: "Khush0031",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const Data = await fetch("https://api.github.com/users/Khush0031");
    const jsonData = await Data.json();

    this.setState({
      userInfo: jsonData,
    }); 

    console.log(jsonData)
  }

  render() {
    const { name, location, login,avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
      <img src={avatar_url} className="user-url" alt="" />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>userName : {login}</h3>
        {/* <h3>propName : {this.props.name}</h3> */}
      </div>
    );
  }
}

export default UserClass;
