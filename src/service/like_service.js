import { firebaseApp } from "./firebase";
import { getDatabase, set, ref, onValue, off } from "firebase/database";

class LikeButton {
  syncLike(update) {
    // update에 들어오는 콜백함수 (count) => {
    //   setCount(count);
    // console.log(update, "업데이트");
    const database = getDatabase(firebaseApp);
    const countRef = ref(database, "likes/");

    onValue(countRef, (snapshot) => {
      // console.log(snapshot, "스냅샷");
      let value = snapshot.val();
      console.log(value, "값");
      value && update(value.count);

      // snapshot.val(count);
    });
    return () => off(countRef);
  }
  saveLike(count) {
    // console.log("gd", count);

    const database = getDatabase(firebaseApp);
    set(ref(database, "likes/"), {
      count: count,
    });
  }
}

export default LikeButton;
