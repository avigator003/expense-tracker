import React ,{useContext,useState,useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState';
import Transaction from './Transactions'
import {db} from '../User/Database'
function TransactionList({user,docId}) {
  const[transactions,setTransactions]=useState([]);

  useEffect(()=>{
    db.collection("users").doc(docId).collection('transactions').onSnapshot(snapshot=>{
      setTransactions(snapshot.docs.map(doc=>({id:doc.id,trans:doc.data()}))
      );
      
    });
    
    },[transactions])
    

    return (
        <div>
             <h3>History</h3>
      <ul className="list">
      {transactions.map(({id,trans}) => 
      
      (
      <Transaction key={id} id={id} amount={trans.amount} text={trans.text} docId={docId} />))}

      </ul>
        </div>
    )
}

export default TransactionList
