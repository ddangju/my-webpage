import { firebaseApp } from "./firebase";

import { getDatabase, set, ref, onValue, off } from "firebase/database";

class CardRepository {
  //새로운 데이터를 받아오면 콜백함수가 두번재 인자로 전달되고
  //db가업데이트(userid가 있을때마다)될대마다 콜백함수가 호출된다.
  //db가 업데이트 될때마다 value와 함께 onUpdate(콜백함수)가 호출된다
  syncCard(userId, onUpdate) {
    const database = getDatabase(firebaseApp);
    const dataRef = ref(database, `${userId}/cards`);
    onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    // onValue(dataRef, (snapshot) => {
    //   //value는 넘어온 card다
    //   const value = snapshot.val();
    //   value && onUpdate(value);
    // });
    // return () => {};
    // return () => dataRef.off(database, `${userId}/cards`);
    // console.log("gd");
    return () => off(dataRef);
    // return () => off(dataRef);
    // off(dataRef);
  }

  saveCard(userId, card) {
    const database = getDatabase(firebaseApp);
    set(ref(database, `${userId}/cards/${card.id}`), card);
    // set(ref(database, `hello/user`), card);
  }
}

export default CardRepository;
