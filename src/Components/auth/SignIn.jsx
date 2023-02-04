import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signIn = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        console.log(userCredential)
    }).catch((error) => {
        console.log(error)
    })

  }
  return (
    <div>
      <form onSubmit={signIn} className="form">
        <h1>login</h1>
        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
