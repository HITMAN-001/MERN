import { Component } from "react";


export default class User extends Component{
    render(){
        return(
            <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            {this.props.userNew}
                        </div>
                        <div className="col">
                            <button className='btn btn-warning' onClick={()=> this.props.duser(this.props.userNew)}>Delete</button>
                        </div>
                    </div>
                    <hr></hr>
            </div>
        )
    }
}