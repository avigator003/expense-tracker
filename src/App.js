import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import SignUp from './User/SignUp';
import Home from './User/Home';
import LogIn from './User/LogIn'
import Expense from './User/Expense';
import UserHeader from './User/UserHeader';
import background from '../src/User/5240.jpg';
import {auth} from './User/Database'


function App() {
  const[user,setUser]=useState();

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
    if(authUser)
    {
    setUser(authUser)
    }
    else{
      setUser(null)
    }
    })
    return ()=>{
      unsubscribe();
    }
    
    },[])
    
  
  return (
    <div>
   <Router>
     
   <UserHeader user={user} ></UserHeader>
    <div className="App">
      
     <Switch>
  <Route exact path="/" component={() => <Home user={user} />}></Route>

     <Route path="/login" component={() => <LogIn user={user}/>}></Route>
     <Route path="/signup" component={SignUp}></Route>
     <Route path="/myexpenses/:id" render={(props) => <Expense {...props} user={user} />}></Route>
      
</Switch>




    </div>
    </Router>

    </div>
    
 
  );
}

export default App;
