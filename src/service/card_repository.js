import { firebaseApp } from "./firebase";

import { getDatabase, set, ref } from "firebase/database";

class CardRepository {
  saveCard(userId, card) {
    // firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    const database = getDatabase(firebaseApp);
    set(ref(database, `${userId}/cards/${card.id}`), card);
  }
}

export default CardRepository;
