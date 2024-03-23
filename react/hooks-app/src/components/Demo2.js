import React, { useState } from 'react'

function Demo2(props) {
    const users = useState(['admin', 'manager', 'QA'])
  return (
    <div>
      {users.map((data)=>{
        return (
        <div>
            {data}
        </div>
        )
      })}
    </div>
  )
}

export default Demo2
