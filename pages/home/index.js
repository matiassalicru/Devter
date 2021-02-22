import AppLayout from "components/AppLayout";
import Devit from "components/Devit";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline);
  }, []);

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map((devit) => (
            <Devit
              key={devit.id}
              username={devit.username}
              avatar={devit.avatar}
              message={devit.message}
              id={devit.id}
            />
          ))}
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
            top: 0;
            width: 100%;
            border-bottom: 1px solid #ccc;
          }

          h2 {
            font-weight: 800;
            font-size: 20px;
          }

          section {
            padding-top: 49px;
          }

          nav {
            position: sticky;
            bottom: 0;
            width: 100%;
            border-top: 1px solid #ccc;
            height: 49px;
          }
        `}
      </style>
    </>
  );
};

export default HomePage;
