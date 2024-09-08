import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Say Hello send us your thoughts about our products or share your ideas
        with our Team!
      </p>
      <form>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Message" />
      </form>
      <button>SEND</button>
    </div>
  );
};

export default Contact;
