import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import GitHub from "../components/Icons/GitHub";
import { colors } from "../styles/theme";

import { loginWithGitHub, onAuthStateChanged } from "../firebase/client";
import { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState(undefined);

  //Effect que ejecuta una acción para persistir el state de autenticación
  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  //Lanza el login con github y setea el state user con info de github
  const handleClick = () => {
    loginWithGitHub()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Head>
        <title>Devter 🐤</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="./devter-logo.png" alt="Logo" />
          <h1>Devter</h1>
          <h2>
            Talk about development <br />
            with developers 👩🏻‍💻👨🏻‍💻
          </h2>
          <div>
            {/* Si user es null, muestra el boton de logueo */}
            {user === null && (
              <Button onClick={handleClick}>
                <GitHub fill="#fff" width={24} height={24} /> Login with GitHub
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <img src={user.avatar} alt="foto usuario" />
                <strong>{user.username}</strong>
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }

        div {
          margin-top: 16px;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          color: ${colors.secondary};
          font-size: 24px;
          margin-bottom: 16px;
          margin: 0;
        }

        h2 {
          color: ${colors.primary};
          font-size: 21px;
          margin: 0;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
