import React, { useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import * as firebaseStore from "firebase/firestore";
import * as firebaseAuth from "firebase/auth";
import { actions } from "../../redux";
import { FirebaseClient } from "../../utils";
import { IMAGES } from "../../assets";

const SignUpComponent = () => {
  const dispatch = useDispatch();
  const { db, auth, provider } = FirebaseClient;

  const onGetUserData = useCallback(async (user) => {
    if (user) {
      try {
        const userDocRef = firebaseStore.doc(db, "users", user.uid);
        const userDoc = await firebaseStore.getDoc(userDocRef);
        const userInfo = {
          name: user.displayName,
          displayName: user.displayName.split(" ")[0],
          photoURL: user.photoURL,
          email: user.email,
          uid: user.uid,
        };

        if (!userDoc.exists()) {
          const usersRef = firebaseStore.collection(db, "users");
          await firebaseStore.setDoc(
            firebaseStore.doc(usersRef, user.uid),
            userInfo
          );
        }

        dispatch(actions.me.setMe(userInfo));
      } catch (error) {
        console.log(error);
      }
      //   const userDoc = await db.collection("users").doc(user.uid).get();
      //   toast.success("Welcome to PtLPtD!");
      //   const userInfo = {
      //     name: user.displayName,
      //     displayName: user.displayName.split(" ")[0],
      //     photoURL: user.photoURL,
      //     email: user.email,
      //     uid: user.uid,
      //   };
      //   dispatch(actions.me.setMe(userInfo));
      //   if (!userDoc.exists) {
      //     await db.collection("users").doc(user.uid).set(userInfo);
      //   }
    } else {
      dispatch(actions.me.logout());
    }
  }, []);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(auth, onGetUserData);
  }, []);

  const onLoginWithGoogle = async () => {
    try {
      await firebaseAuth.signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center space-between">
      <img src={IMAGES.LOGIN} alt="Login" />
      <button
        className="flex items-center columns-4 p-2 text-white bg-gray-800 border-2 border-slate-500 rounded-lg"
        onClick={onLoginWithGoogle}
      >
        <FcGoogle size={24} />
        <span className="ml-4">Sign In With Google</span>
      </button>
    </div>
  );
};

export default SignUpComponent;
