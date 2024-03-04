import { createContext, useEffect, useState } from "react";
import useAxiosPath from "../hooks/useAxios";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const useAxios = useAxiosPath();

  useEffect(() => {
    const localUser = localStorage.getItem("localUser");

    if (localUser) {
      useAxios
        .get("/auth/getUser")
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch((error) =>
          console.log("There is a problem in get user: ", error)
        );
    }

    return () => {
      setUser(null);
      setLoading(true);
    };
  }, [setUser, setLoading, useAxios]);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
