import { Component } from "react";
import User from "./User";

export default class Users extends Component {
  render() {
    return (
        <div className="container text-center">
              {
                  this.props.udata.map((ud) =>  <User key={ud} userNew={ud} duser={this.props.dOne}/>)
              }
        </div>
    );
  }
}
