import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import{Link, useHistory} from 'react-router-dom'
import {auth, db} from './Database'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function UserHeader({user}) {
  const classes = useStyles();
const history=useHistory();

const goto=()=>{
  db.collection("users").where("id","==",user.uid).onSnapshot(snapshot=>{
    snapshot.docs.map(doc=>history.push("/myexpenses/"+doc.id))
  })
}


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
          <Link to="/"  style={{color:'white',textDecoration:'none'}}>Home</Link>
          </Typography>

{
    user?(<div>
        
          <Button color="inherit" style={{color:'white',textDecoration:'none'}} onClick={goto}>My Expenses</Button>
          
         <Button color="inherit" onClick={()=>(auth.signOut(),history.push("/"))} style={{color:'white',textDecoration:'none'}}>Logout</Button>
         
    </div>):(
<div>
          <Link to="/login">
          <Button color="inherit" style={{color:'white',textDecoration:'none'}}>Login</Button></Link>
          
          <Link to="/signup">
          <Button color="inherit" style={{color:'white',textDecoration:'none'}}>Signup</Button></Link>
          </div>)
}
        </Toolbar>
      </AppBar>
    </div>
  );
}