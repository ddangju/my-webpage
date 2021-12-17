//사용자 로그인과 로그아웃
import { firebaseApp } from "./firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
  login(providerName) {
    let provider;
    if (providerName === "Google") {
      provider = new GoogleAuthProvider();
    } else if (providerName === "Github") {
      provider = new GithubAuthProvider();
    }

    const auth = getAuth(firebaseApp);
    console.log(auth);

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default AuthService;
