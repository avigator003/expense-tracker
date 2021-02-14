import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { db } from '../User/Database';

function Transactions({id,amount,text,docId}) {


const deleteTransaction=(id)=>{
  db.collection("users").doc(docId).collection('transactions').doc(id).delete().then(function() {
    console.log("Document successfully deleted!"+id);
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}

    const sign = amount < 0 ? '-' : '+';
  
    return (
      <li className={amount < 0 ? 'minus' : 'plus'}>
        {text} <span>{sign}${Math.abs(amount)}</span><button onClick={()=>deleteTransaction(id)} className="delete-btn">x</button>
      </li>
    )
    
}

export default Transactions
