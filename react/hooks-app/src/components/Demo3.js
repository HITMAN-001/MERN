import React, { useState } from "react";

function Demo3() {
  const [users, setUsers] = useState([]);
  const [uname, setUname] = useState("");
  const [uemail, setEmail] = useState("");
  const [count, setCount] = useState(1)

  const inc=()=>{
    setCount(count + 1)
  }

  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, {uname, uemail}]);
    setUname("")
    setEmail("")
  };

  const deleteUser=(uname)=>{
    setUsers(users.filter((note)=> note.uname !== uname))
  }

  return (
    <div>
        {users.map((data) => (
          <div key={data.uname} className="card">
            <div className="card-body" style={{"padding":"10px"}} >
              <h5 className="card-title">User{count}</h5>
              {data.uname} --- {data.uemail}
              <button onClick={() => deleteUser(data.uname)} type="button" className="btn btn-warning">Delete</button>
            </div>
          </div>
        ))}
        <hr />
        <form onSubmit={addUser} className="container-sm">
          <input
            type="text"
            placeholder="Enter Username"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Email"
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-primary">Add User</button>
        </form>
        <button onClick={inc} type="button" className="btn btn-primary">Increment Count</button>
      </div>
  )
}
export default Demo3;
