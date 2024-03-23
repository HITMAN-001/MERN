import React from 'react'

function ShowData(props) {
console.log(props.sdata)
  return (
    <div>
    {props.sdata.map((udata) => (
        <div>
            {udata.username} -- {udata.email}
        </div>
    ))}
    </div>
  )
}

export default ShowData
