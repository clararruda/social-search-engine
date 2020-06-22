import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  async addPlan(plan) {
    if (this.auth.currentUser) {
      await this.db.collection("users").doc(this.auth.currentUser.uid).set({
        plan,
        favorites: [],
      });
    }
  }

  async addSearch(queryData) {
    if (this.auth.currentUser) {
      const { query, social } = queryData;
      const searchDoc = await this.db
        .collection("searches")
        .where("query", "==", query)
        .where("social", "==", social)
        .get();

      if (searchDoc.empty) {
        await this.db.collection("searches").doc().set({
          query,
          social,
          amount: 1,
        });
      } else {
        const id = searchDoc.docs[0].id;
        const amount = searchDoc.docs[0].data().amount;
        await this.db
          .collection("searches")
          .doc(id)
          .update({
            amount: parseInt(amount) + 1,
          });
      }
    }
  }

  async addFavoriteSearch(queryData) {
    if (this.auth.currentUser) {
      const { query, social } = queryData;
      const searchDoc = await this.db
        .collection("searches")
        .where("query", "==", query)
        .where("social", "==", social)
        .get();

      const ref = searchDoc.docs[0].ref;
      const userData = await this.getCurrentUserData(this.auth.currentUser);

      const favoriteRef = await this.db
        .collection("users")
        .where("favorites", "array-contains", ref)
        .get();

      if (favoriteRef.empty) {
        await this.db
          .collection("users")
          .doc(this.auth.currentUser.uid)
          .update({
            favorites: [...userData.favorites, ref],
          });
      }
    }
  }

  // async addScheduledSearch(plan) {
  //   if (this.auth.currentUser) {
  //     await this.db.collection("users").doc(this.auth.currentUser.uid).set({
  //       plan,
  //     });
  //   }
  // }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }

  async getCurrentUserData(user) {
    const userDoc = await this.db.collection("users").doc(user.uid).get();
    return userDoc.data();
  }
}

export default new Firebase();
