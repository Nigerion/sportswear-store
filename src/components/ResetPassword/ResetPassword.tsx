import React from "react";

type Props = {};

const ResetPassword = (props: Props) => {
  return (
    <div>
      <h2>Have you Forgotten Your Password ?</h2>
      <p>
        If you've forgotten your password, enter your e-mail address and we'll
        send you an e-mail
      </p>
      <input type="text" placeholder="Email" />
      <button>RESET PASSWORD</button>
    </div>
  );
};

export default ResetPassword;
