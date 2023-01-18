import { useState  } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {  
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import './sign-in.styles.scss';

const defaultFormFeilds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setformFields] = useState(defaultFormFeilds);
  const { email, password} = formFields;

  const resetFormFeilds = () => {
    setformFields(defaultFormFeilds);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email,password);
      resetFormFeilds();
    } catch (error) { 
      switch(error.code){
        case 'auth/wrong-password':
          alert('wrong password or email');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email')
          break;
        default:
        console.error(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        
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

        <div className="buttons-container">
          <Button  type="submit">Sign in</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">Google sign in</Button>
        </div>

      </form>
    </div>
  );
};

export default SignInForm;
