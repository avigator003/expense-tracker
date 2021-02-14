
  import firebase  from 'firebase';

  const firebaseApp=
      firebase.initializeApp({
        apiKey: "AIzaSyBI-fQFm-ffyWU5G3BSnsTEZiILLcPktRU",
        authDomain: "expense-tracker-78d34.firebaseapp.com",
        databaseURL: "https://expense-tracker-78d34.firebaseio.com",
        projectId: "expense-tracker-78d34",
        storageBucket: "expense-tracker-78d34.appspot.com",
        messagingSenderId: "7537192306",
        appId: "1:7537192306:web:37b7109b86f30321cc41eb"
    });
    const db=firebaseApp.firestore();
    const auth=firebase.auth();
    const storage=firebase.storage();
  
  
    export {db,auth,storage,firebase,firebaseApp}; 
    