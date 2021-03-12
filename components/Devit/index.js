import Avatar from "components/Avatar";
import useTimeAgo from "hooks/useTimeAgo";

const Devit = ({ avatar, userName, content, id, userId, createdAt }) => {
  const timeago = useTimeAgo(createdAt);

  return (
    <>
      <article key={id}>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>

        <section>
          <header>
            <strong>{userName}</strong>
            <span> - </span>
            <date>{timeago}</date>
          </header>
          <p>{content}</p>
        </section>
      </article>

      <style jsx>{`
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 2px solid #eee;
        }

        div {
          padding-right: 10px;
        }

        p {
          margin: 0;
        }

        date {
          color: #555;
          font-size: 14px;
        }
      `}</style>
    </>
  );
};

export default Devit;
