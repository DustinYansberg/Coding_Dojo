import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pW, setPW] = useState("");
  const [confirmPW, setConfirmPW] = useState("");

  return (
    <div>
      <form>
        <div>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          Password:
          <input
            type="password"
            value={pW}
            onChange={(e) => setPW(e.target.value)}
          />
        </div>
        <div>
          Confirm Password:
          <input
            type="password"
            value={confirmPW}
            onChange={(e) => setConfirmPW(e.target.value)}
          />
        </div>
      </form>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {pW}</p>
      <p>Confirm Password: {confirmPW}</p>
    </div>
  );
};

export default Form;
