import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import './App.css';
import React from 'react';
import Chanal from './chanal';







function App() {

  const [user, setUser] = useState({});


  function handleCredentialResponse(response) {
    console.log("Encoded" + response.credential);
    var userObject = jwt_decode(response.credential)
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;

  }
  function handelSignOut(event) {

    setUser({})
    document.getElementById("signInDiv").hidden = false;

  }
  useEffect(() => {
    /*global google*/


    google.accounts.id.initialize({
      client_id: "103903665720-4qf9ghrbkafp3veidblk5nur9ieqoqvn.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt();
  }, []);
  // If we have no user signButton
  // If we have  user show the logout Button 
  return (
    <div className="App">
      <div id="signInDiv"></div>
      {
        Object.keys(user).length !== 0 &&
        <button onClick={(e) => handelSignOut(e)} > sign Out</button>

      }
      {
        user &&
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }


      <Chanal />
    </div>
  );
}

export default App;
