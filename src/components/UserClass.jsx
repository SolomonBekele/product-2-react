import React from "react";

class UserClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      user: null
    };
  }

  async componentDidMount(){
    const res = await fetch("https://api.github.com/users/SolomonBekele");
    const data = await res.json();

    this.setState({ user: data });

    this.timer = setInterval(() => {
      console.log("object");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.count !== prevState.count) {
      console.log("count changed");
      if (this.state.user !== null) {
        this.setState({ user: null });
      }
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("hi unmount");
  }

  render() {
    const { count, user } = this.state;

    if (!user) return null;

    const { name, avatar_url, location } = user;

    return (
      <div>
        <button onClick={() => this.setState({ count: count + 1 })}>
          {count}
        </button>

        <img className="w-20 rounded-full" src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @solubman</h2>
      </div>
    );
  }
}

export default UserClass;
