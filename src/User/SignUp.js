import React, { useState, useEffect } from 'react'
import './Signup.css';
import {Input,Button} from '@material-ui/core'
import { auth, db } from './Database';
import {Redirect,useHistory} from 'react-router-dom'

function SignUp() {
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[username,setUsername]=useState('');
const history = useHistory();
const signup=(event)=>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((authUser)=>(authUser.user.updateProfile({
        displayName:username
    }),db.collection("users").add({
        id:authUser.user.uid
    }),auth.signOut() ,history.push("/login")))
    .catch((e)=>{console.log(e.message)})
}

    return (
        <div className="signup" >
            <form className="app__signup">
            <h1 style={{textAlign:'center',marginBottom:'50px'}}>Sign Up Form</h1>
            
         <input placeholder="Username"  type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
         <input placeholder="Email"  type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
         <input placeholder="Password"  type="password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
         <Button type="submit"  style={{fontSize:'20px',fontWeight:'bold',marginTop:'30px'}} onClick={signup}>Sign up</Button>
        </form>
 

           </div>
    )
}

export default SignUp
