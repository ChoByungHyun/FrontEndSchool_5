import { useState } from "react";
import { appAuth } from "../firebase/config";

// 회원가입을 진행하는 훅
export const useSignup = () => {
  // 에러 정보를 저장합니다.
  const [error, setError] = useState(null);
  // 현재 서버와의 통신 상태를 저장합니다.
  const [pending, setPending] = useState(false);

  const signup = (email, password, displayName) => {
    setError(null);
    setPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
};
