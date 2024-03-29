import { async } from "@firebase/util";
import { useState} from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";


const defaultFormFeilds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFeilds);
  const { displayName, email, password, confirmPassword } = formFields;


  
  const resetFormFeilds = () => {
    setformFields(defaultFormFeilds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return alert("passwords are not same");

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFeilds();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Email is already in use");
        return;
      } else {
        console.error(`user creation encountered an error ${error}`);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        
        <FormInput
          label = "Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        
        <FormInput
          label = "Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label = "Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label = "Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button  buttonType=""type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
