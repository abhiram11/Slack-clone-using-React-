import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log("RESULT:", result);
        dispatch({
          type: actionTypes.SET_USER,
          username: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://thumbs.bfldr.com/at/pl546j-7le8zk-btwjnu/v/2925183?expiry=1621671914&fit=bounds&height=800&sig=YWExZjUzMGJmMmQ5ZmRlMjEwYjI0Yzg0Y2ZkYTc2MGI0OTMxODI5Mg%3D%3D&width=1100" />
        <h1> Sign in to Abhi's Slack </h1>
        <Button onClick={signIn}> Sign in with Google </Button>
      </div>
    </div>
  );
}

export default Login;
