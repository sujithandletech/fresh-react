import React from "react";

class Userclass extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "Dummy",
                location: "Dummy Location",
                avatar_url: "https://via.placeholder.com/150",
            },
        };        
    }

    async componentDidMount() {
        // console.log("Userclass componentDidMount called");

        this.interval = setInterval(() => {
            console.log("Interval running class");
        }, 1000);

        const data = await fetch("https://api.github.com/users/sujit-khilar");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
        
        console.log("Userclass componentDidMount data:", json);

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component Did Update");
        if (
            this.state.count !== prevState.count ||
            this.state.count2 !== prevState.count2
        ) {
            console.log("Count or Count2 has changed");
        }
        console.log(
            "Previous State:",
            prevState,
            "Current State:",
            this.state
        )
    }

    componentWillUnmount(){
        console.log("component Will Unmount");


        clearInterval(this.interval);
    }

    render() {

        const {name, location} = this.state.userInfo;

        return (
            <div className="user_profile" style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
                <img src={this.state.userInfo.avatar_url} alt="" />
                <h1>Name : {name}</h1>
                <h2>Location : {location}</h2>
                <h3>Contact : 1234567890</h3>
                <h4>order count: {this.state.count}</h4>
                <h4>order count2: {this.state.count2}</h4>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                    this.setState({ count2: this.state.count2 + 1 });
                }}>increaseone</button>
            </div>
        )
    }
}

export default Userclass;