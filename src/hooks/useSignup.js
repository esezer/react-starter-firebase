import { useState, useEffect } from "react";
import {
  auth,
  db,
  createUserWithEmailAndPassword,
  updateProfile,
  doc,
  setDoc,
} from "../services/firebaseService/firebaseService";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const signup = async (email, password, firstName, lastName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // add displayname to user
      await updateProfile(res.user, {
        displayName: `${firstName} ${lastName}`,
      });

      // create a user document
      const userRef = doc(db, "users", res.user.uid);
      await setDoc(userRef, {
        firstName,
        lastName,
        displayName: `${firstName} ${lastName}`,
      });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { signup, error, isPending };
};
