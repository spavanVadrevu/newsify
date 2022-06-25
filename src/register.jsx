import React from "react";
import {Link} from 'react-router-dom';

export default function Register()
{
    const [user, setUser] = React.useState({
        username:'',
        password:''
    });

    function handleRegister(){
        fetch("http://localhost:8000/register",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then((res)=>{
            if(res.status===200)
            {
                alert("Registration Successful")
                window.location.href="/"
            }
            if(res.status===500)
            {
                alert("Internal server error")
                window.location.reload()
            }
        })
        .catch((err)=>console.log(err))
    }

    return(
        <div style={{marginLeft:"30px"}}>
            <div>
                <h1 style={{textAlign:"center"}}>Registration Page</h1>
                <input type="text" placeholder="User Name" name="username" value={user.username} 
                onChange={(e)=>{setUser({...user,username:e.target.value})}}></input><br/><br/>
                <input type="password" placeholder="Password" name="password" value={user.password} 
                onChange={(e)=>{setUser({...user,password:e.target.value})}}></input><br/><br/>
                <div>
                    <button className="btn btn-primary" onClick={handleRegister}>Register</button><br/><br/>
                    <small>Already registered? </small>
                    <Link to={`/login`}>Login</Link>
                </div>
            </div>
        </div>
    )
}