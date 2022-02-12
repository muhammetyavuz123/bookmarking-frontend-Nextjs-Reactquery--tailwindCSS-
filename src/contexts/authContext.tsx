import { useState, createContext, useEffect, useContext } from "react";
import { fetchMe, logoutFetch } from "../apis";

interface IContextProps {
  loggedIn: boolean;
  user: null;
  login: any;
  logout: any;
}
const AuthContext = createContext({} as IContextProps);

const AuthProvider = (props: any) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        setLoggedIn(true);
        setUser(me);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    })();
  }, []);

  const login = (data: any) => {
    setLoggedIn(true);
    setUser(data.user);

    localStorage.setItem("acces-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
  };

  const logout = async (callback: any) => {
    setLoading(false);
    setUser(null);

    await logoutFetch();
    localStorage.removeItem("acces-token");
    localStorage.removeItem("refresh-token");
    callback();
  };

  const values = {
    loggedIn,
    user,
    login,
    logout,
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
