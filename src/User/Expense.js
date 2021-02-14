import React,{useState,useEffect} from 'react'
import {auth} from './Database'
import SignUp from './SignUp'
import Header from '../components/Header'
import Balance from '../components/Balance'
import IncomeExpense from '../components/IncomeExpense'
import TransactionList from '../components/TransactionList'
import AddTransaction from '../components/AddTransaction'
import { GlobalProvider } from '../context/GlobalState'
import {Redirect,Link, useParams} from 'react-router-dom'
import './Expense.css'
import { Button } from '@material-ui/core'
function Expense(props){

var transId=props.match.params.id;


    return (
        <div>
        {
            props.user?(<div className="expens">
            <GlobalProvider> 
        <Header></Header> 
   <div className="container">
<Balance docId={transId}></Balance>
<IncomeExpense docId={transId}></IncomeExpense>
<TransactionList user={props.user} docId={transId}></TransactionList>
<AddTransaction user={props.user} docId={transId}></AddTransaction>
   </div>
   </GlobalProvider>
   
       </div>):(<div style={{textAlign:'center',fontFamily:'cursive',fontWeight:'bold',marginTop:'50px',fontSize:'50px'}}>Sorry To See your Expenses You Need To Login First
           <Button classname="button"><Link to="/login" style={{textDecoration:'none',fontSize:'35px',border:'1px solid black',borderRadius:'15px',padding:'15px',marginTop:'30px',WebkitBoxShadow:'0px 0px 23px 6px rgba(0,0,0,0.75)',MozBoxShadow:'0px 0px 23px 6px rgba(0,0,0,0.75)',boxShadow:'0px 0px 23px 6px rgba(0,0,0,0.75)'}}>Login</Link></Button>
       </div>)
    
        }
        </div>
    )
}

export default Expense
