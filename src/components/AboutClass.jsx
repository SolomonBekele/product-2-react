import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component{
    constructor(props){
super(props)
this.state = {

}
console.log("parent constructor");
    }

    componentDidMount(){
   console.log("parent mount");
    }
    render(){
        console.log("parent render");
        return(
            <div>
                <UserClass name={this.props.name} index ={0}/>
            </div>
        )
    }
}

export default AboutClass;