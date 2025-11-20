import React, { useEffect, useState } from 'react'

const User = () => {
    const [user,setUser] = useState("");
useEffect( ()=>{
fetchUser()
},[])

const fetchUser = async () =>{
  const res = await fetch("https://api.github.com/users/SolomonBekele");
  const data = await res.json();
  setUser(data)
}
  return (
    <div>
        <img className="w-20 rounded-full" src={user.avatar_url} alt="" />
        <h2>Name: {user.name}</h2>
        <h2>Location: {user.location}</h2>
        <h2>Contact: @solubman</h2>
    </div>
  )
}

export default User