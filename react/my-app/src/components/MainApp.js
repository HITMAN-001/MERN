import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddUsers from "./AddUser";
import Users from "./Users";


export default class MainApp extends Component{

    componentDidMount(){
        const json = localStorage.getItem("users")
        const userData = JSON.parse(json)
        if(userData){
            this.setState(()=>{
                return {
                    userData : userData
                }
            })
        }
    }

    componentDidUpdate(){
       
        const json=JSON.stringify(this.state.userData)
        localStorage.setItem('users',json)
        
    }

    state = {
        fdata : "",
        hdata : "Website to keep track of users using React🐑",
        userData : []
    }

    //adding the user
    addUser=(data)=>{
        this.setState((prevState)=>{

            return{
                userData:prevState.userData.concat(data)
            }

        }
        )
    }

    
    //delete all
    deleteAll=()=>{
        this.setState(()=>{
            return{
                userData:[]
            }
        })
    }

    //deleteOne
    deleteOne=(user)=>{
        this.setState((prevState)=>{
            return{
                userData:prevState.userData.filter((us) => user !== us)
            }
        })
    }
    render(){
        
        return(
            <div>
                <Header hdata={this.state.hdata}/>
                <Users udata={this.state.userData} dOne={this.deleteOne}/ >
                <AddUsers au={this.addUser} da={this.deleteAll} hasData={this.state.userData.length}/>
                <Footer fdata={this.state.fdata}/>
            </div>
        )
    }
}