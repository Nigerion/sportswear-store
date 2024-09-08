import React from "react";

type Props = {};

const Authorization = (props: Props) => {
  return (
    <div>
      <h2>My account</h2>
      <button>Sign in \ Register</button>
      <form action="">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Remember me" />
        <button>SIGN IN</button>
      </form>
      <p>Have you forgotten your password?</p>
    </div>
  );
};

export default Authorization;
