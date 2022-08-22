import React, { useContext, useState } from "react";
import Button from "../components/UI/Button";
import classes from "./Login.module.css";
import { AuthContext } from "../../stores/auth-context";
import { Link } from "react-router-dom";
import GV from "../../stores/CONSTANTS/global_variables";
import action from "../../actions/action";
import Card from "../components/UI/Card";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const [inputLoginData, setInputLoginData] = useState(
    GV.getDefaultLoginForm()
  ); // input 값 관리를 위한 상태

  const inputHandler = (e) => {
    setInputLoginData({ ...inputLoginData, [e.target.id]: e.target.value });
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    action.callLoginAction(inputLoginData);
    authCtx.loginStatusHandler(action.dispatch());
    setInputLoginData(GV.getDefaultLoginForm);
  };

  return (
    <Card>
      <form onSubmit={loginSubmitHandler} on>
        <div>
          <h1 className={classes.h1}>SIGN IN</h1>
          <input
            id={"email"}
            type="email"
            placeholder={"User Email"}
            onChange={inputHandler}
            className={classes.input}
          />
        </div>
        <div>
          {" "}
          <input
            id={"password"}
            type="password"
            placeholder={"Password"}
            onChange={inputHandler}
            className={classes.input}
          />
        </div>
        <div>
          <Button type={"submit"} className={classes.button}>
            SIGN IN
          </Button>
        </div>
      </form>
      <Link to={"/register"}>
        <Button className={classes.button}>SIGN UP</Button>
      </Link>
    </Card>
  );
};

export default Login;
