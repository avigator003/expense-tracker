import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { db } from '../User/Database';

function Balance({docId}) {
    const[transactions,setTransactions]=useState([]);
  useEffect(() => {
    db.collection("users").doc(docId).collection('transactions').onSnapshot(snapshot=>{
      setTransactions(snapshot.docs.map(doc=>(doc.data())));
      
    });
  }, [])

const amount=transactions.map(transaction=>transaction.amount);
const total=amount.reduce((accumulator,currentvalue)=>(accumulator+=currentvalue),0).toFixed(2)
const tot=total<0?(total*-1):total
const sign=total<0?'-':''
    return (
        <>
            <h4>Your Balance</h4>  
            {
                
            }
    <h1>{sign}${tot}</h1>
        </>
    )
}
export default Balance