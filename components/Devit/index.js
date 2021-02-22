import Avatar from "components/Avatar";

const Devit = ({ avatar, username, message, id }) => {
  return (
    <>
      <article key={id}>
        <div>
          <Avatar alt={username} src={avatar} />
        </div>

        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>

      <style jsx>{`
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 2px solid #eaf7ff;
        }

        div {
          padding-right: 10px;
        }

        p {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Devit;
