import React, { useState, useContext,useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { db } from '../User/Database';

function AddTransaction({user,docId}) {
 const[text,setText]= useState('');
 const[amount,setAmount]=useState();
 const[transid,setTransc]=useState();
 useEffect(()=>{
   db.collection("users").where("id","==",user.uid).onSnapshot(snapshot=>{
     snapshot.docs.map(doc=>setTransc(doc.id))}
     );
   
 
 },[])
 
 const onSubmit = e => {
    e.preventDefault();
    var integer = parseInt(amount, 10);
   db.collection("users").doc(docId).collection("transactions").add({
     text:text,
     amount:integer,
   })

        

    setText('')
    setAmount('')
  }

    return (
        <div>
             <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn" >Add transaction</button>
      </form>
        </div>
    )
}

export default AddTransaction
