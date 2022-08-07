import React, { useState } from "react";
import ButtonAtom from "../../../components/common/ButtonAtom";
import InputAtom from "../../../components/common/InputButton";
import { userSetDetails } from "../../../redux/user/user.action";
import { useDispatch } from "react-redux";
import "./styles.css";
const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userSetDetails({
        userName,
        password,
        token: 7,
      })
    );
  };
  return (
    <div className="login-wrap">
      <div className="login-content">
        <h1>Welcome</h1>
        <p>Please Login to your account</p>
        <form onSubmit={handleSubmit}>
          <InputAtom
            required
            label="UserName"
            placeholder="username"
            id="username"
            name="username"
            handleInput={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
          />
          <InputAtom
            required
            label="Password"
            placeholder="Password"
            id="Password"
            name="Password"
            handleInput={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
          <ButtonAtom label="login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
