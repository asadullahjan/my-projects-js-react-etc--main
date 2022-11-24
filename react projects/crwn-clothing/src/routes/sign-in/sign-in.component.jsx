import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

  const logGoogleUser = async() => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  return(
    <div>
      <h1>Sign in page</h1>
    </div>
  )
};

export default SignIn;