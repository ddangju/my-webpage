//사용자 로그인과 로그아웃
import { firebaseApp } from "./firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

class AuthService {
  login(providerName, Login) {
    let provider;
    if (providerName === "Google") {
      provider = new GoogleAuthProvider();
    } else if (providerName === "Github") {
      provider = new GithubAuthProvider();
    }

    const auth = getAuth(firebaseApp);
    // console.log(auth);

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user.uid);
        Login(result.user.uid);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onAuthChange(change) {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (사용자정보) => {
      change(사용자정보);
      // 사용자가바뀔때실행(사용자정보);
    });
  }
}

export default AuthService;
