import React, { useState } from "react";
import "./styles.css";

const Login = () => {
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setName(name);
    console.log(name);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={name} onChange={handleOnChange} />
      <button>Submit</button>
    </form>
  );
};

export default Login;
