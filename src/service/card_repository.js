import { firebaseApp } from "./firebase";

import { getDatabase, set, ref, onValue, off } from "firebase/database";

class CardRepository {
  //새로운 데이터를 받아오면 콜백함수가 두번재 인자로 전달되고
  //db가업데이트(userid가 있을때마다)될대마다 콜백함수가 호출된다.
  //db가 업데이트 될때마다 value와 함께 onUpdate(콜백함수)가 호출된다
  syncCard(onUpdate) {
    const database = getDatabase(firebaseApp);
    const dataRef = ref(database, `cards`);
    onValue(dataRef, (snapshot) => {
      // console.log(snapshot, "<<<<<<<");
      // console.log(snapshot.val(), "<<<<<<<");
      const value = snapshot.val();
      // console.log(value, "<<<<");
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

  ///입력한 카드 값을 db에 저장하여 사용자를 추가한다.
  saveCard(card) {
    // console.log(card, "<<<<<");
    const database = getDatabase(firebaseApp);
    set(ref(database, `cards/${card.id}`), card);
    // set(ref(database, `hello/user`), card);
  }
}

export default CardRepository;
