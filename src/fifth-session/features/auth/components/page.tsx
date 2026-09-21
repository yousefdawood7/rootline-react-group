import Login from "@/fifth-session/features/auth/components/login";
import Logout from "@/fifth-session/features/auth/components/logout";
import { useAuthSubscribe } from "@/fifth-session/features/auth/providers/auth-provider";
import { useState } from "react";

export default function Page() {
  const [isAuth, setIsAuth] = useState(false);
  const [name, setName] = useState('');

  useAuthSubscribe("login", (e) => {
    setIsAuth(true);
    setName(e.name)
  });

  useAuthSubscribe("logout", () => {
    setIsAuth(false);
    setName('')
  });

  return (
    <div>
      {isAuth ? (
        <>
          {isAuth && <h1>{name}</h1>}
          <Logout />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
