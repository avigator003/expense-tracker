import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { db } from '../User/Database';

function IncomeExpense({docId}) {
  const[transactions,setTransactions]=useState([]);
  useEffect(() => {
    db.collection("users").doc(docId).collection('transactions').onSnapshot(snapshot=>{
      setTransactions(snapshot.docs.map(doc=>(doc.data())));
      
    });
  }, [transactions])

const amount=transactions.map(transaction=>transaction.amount)
const income=amount.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2)
const expense=(amount.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1).toFixed(2)

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
      <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">-${expense}</p>
        </div>
      </div>
    )
}

export default IncomeExpense
