import React from "react";

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="">
        Login
        <input type="text" />
      </label>
      <label htmlFor="">
        Password
        <input type="password" />
      </label>
      <button>Submit</button>
    </div>
  );
};

export default LoginPage;
