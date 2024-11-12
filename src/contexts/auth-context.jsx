import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.js";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
