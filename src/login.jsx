import React from "react";
import {Link} from 'react-router-dom';

export default function Login()
{
    const [user, setUser] = React.useState({
        username:'',
        password:''
    });

    function handleLogin(){
        fetch("http://localhost:8000/login",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then((res)=>{
            console.log(res.status);
            if(res.status===200)
            {
                alert("Login Successful")
                window.location.href="/home"
            }
            if(res.status===300)
            {
                alert("Password is not matching")
                window.location.reload()
            }
            if(res.status===400)
            {
                alert("User not found")
                window.location.reload()
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
                <h1 style={{textAlign:"center"}}>Login Page</h1>
                <input type="text" placeholder="User Name" name="username" value={user.username} 
                onChange={(e)=>{setUser({...user,username:e.target.value})}}></input><br/><br/>
                <input type="password" placeholder="Password" name="password" value={user.password} 
                onChange={(e)=>{setUser({...user,password:e.target.value})}}></input><br/><br/>
                <div>
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button><br/><br/>
                    <small>Don't have an account yet? </small>
                    <Link to={`/register`}>Register</Link>
                </div>
            </div>
        </div>
    )
}