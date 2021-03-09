import AppLayout from "components/AppLayout";
import Devit from "components/Devit";
import { fetchLatestsDevits } from "firebase/client";
import { useUser } from "hooks/useUser";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    user && fetchLatestsDevits().then(setTimeline);
  }, [user]);

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(
            ({ id, userName, avatar, content, userId, createdAt }) => (
              <Devit
                avatar={avatar}
                content={content}
                createdAt={createdAt}
                id={id}
                key={id}
                userId={userId}
                userName={userName}
              />
            )
          )}
        </section>
        <nav></nav>
      </AppLayout>

      <style jsx>
        {`
          header {
            display: flex;
            align-items: center;
            position: sticky;
            height: 49px;
            backdrop-filter: blur(5px);
            background: #ffffffaa;
            top: 0;
            width: 100%;
            border-bottom: 1px solid #eee;
          }

          h2 {
            font-weight: 800;
            font-size: 20px;
            padding-left: 15px;
          }

          nav {
            position: sticky;
            bottom: 0;
            background: #ffffff;
            width: 100%;
            border-top: 1px solid #eee;
            height: 49px;
          }
        `}
      </style>
    </>
  );
};

export default HomePage;
