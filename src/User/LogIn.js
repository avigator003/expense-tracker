import React,{useEffect,useState} from 'react'
import {auth, db} from './Database' 
import './Login.css';
import {Input,Button} from '@material-ui/core'
import {Redirect,useHistory} from 'react-router-dom'
function LogIn({user}) {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const history = useHistory();
      
    const signin=(event)=>{
        event.preventDefault()
      auth.signInWithEmailAndPassword(email,password)
      .then((authUser)=>{db.collection("users").where("id","==",authUser.user.uid).onSnapshot(snapshot=>{
        snapshot.docs.map(doc=>history.push("/myexpenses/"+doc.id))
    }
       
        );})
      .catch((error)=>{alert(error.message)})
      }

    return (
        <div className="login">
             <form className="expense__login">
             <h1 style={{textAlign:'center',marginBottom:'50px'}}>Log In Here..</h1>
         <input placeholder="Email"   type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
         <input placeholder="Password"   type="password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
         <Button type="submit" onClick={signin}  style={{fontSize:'20px',fontWeight:'bold',marginTop:'50px'}}>Sign in</Button>
        </form>
        
        </div>
    )
}

export default LogIn
