import axios from 'axios'
import React, { Component } from 'react'
import ShowData from './ShowData'
const URL = "https://jsonplaceholder.typicode.com/users"

export default class RestApp extends Component {
    state={
      users:[]
    }
    componentDidMount(){
        axios
            .get(URL)
            .then((response) => response.data)
            .then(console.log(this.response))
            .then((data) =>{
                this.setState({users:data})
            })
    }
    render() {
      return(
        <div>
          <ShowData sdata={this.state.users} />
        </div>
      )
    }
}
