import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css";
import Cookies from "universal-cookie";
import { Footer } from "./Footer.js";

const cookies = new Cookies();

export const Auth = (props) => {
  const { setIsAuth } = props;

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="auth">
        <h4> Sign In With Google To Continue </h4>
        <button onClick={signInWithGoogle}> Sign In With Google </button>
      </div>
      <Footer />
    </>
  );
};
