import { onAuthStateChanged } from "firebase/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export const useUser = () => {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);
  const router = useRouter();

  // Effect que ejecuta una acción para persistir el state de autenticación
  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/");
  }, [user]);

  return user;
};
