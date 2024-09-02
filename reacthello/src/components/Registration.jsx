import React, { useState } from "react";

function Registration(){
    // Hooks
    const [email, setEmail] = useState();  // manage states
    const [password, setPassword] = useState();

    function handelRegister(e){
        e.preventDefault();
        console.log("hello");
    }

    console.log(email);
    console.log(password)

    return (
    <form action="">
        <input type="text" placeholder="Enter Name" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        /> <br /> <br />
        <input type="text" placeholder="Enter Password" 
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        /> <br /><br />
        <button onClick={handelRegister}>Submit</button>
    </form>
    );
}

export default Registration;