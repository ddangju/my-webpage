//사용자 로그인과 로그아웃
import { firebaseApp } from "./firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  FacebookAuthProvider,
} from "firebase/auth";
console.log(">>>>>>>>>>>", { firebaseApp }.firebaseApp);

class AuthService {
  login(textContent, goVisitor) {
    let provider;
    if (textContent === "Google") {
      provider = new GoogleAuthProvider();
    } else if (textContent === "Github") {
      provider = new GithubAuthProvider();
    } else if (textContent === "Facebook") {
      provider = new FacebookAuthProvider();
    }

    const auth = getAuth(firebaseApp);
    // console.log(provider);
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result.user.uid, "1");
        goVisitor(result.user.uid);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    // console.log(user);
    const auth = getAuth(firebaseApp);
    auth.signOut();
  }

  //콜백함수가 change인자로 들어오고
  //onAuthStateChanged함수를 실행시켜 auth,user정보를 받아와
  // 콜백함수로 들어온 change함수에 사용자정보를 업데이트.
  ///onAuthStateChanged() 사용자가 로그인인지 로그아웃인지 확인가능
  onAuthChange(change) {
    // console.log("5");
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (사용자정보) => {
      // console.log(사용자정보);
      change(사용자정보);
      // 사용자가바뀔때실행(사용자정보);
    });
  }
}
export default AuthService;
