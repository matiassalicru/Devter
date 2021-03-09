import AppLayout from "components/AppLayout";
import Button from "components/Button";
import { useUser } from "hooks/useUser";
import { useState } from "react";

import { addDevit } from "firebase/client";
import { useRouter } from "next/router";

const COMPOSE_STATES = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};

export default function ComposeDevit() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW);
  const user = useUser();
  const router = useRouter();

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(COMPOSE_STATES.LOADING);

    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
    })
      .then(() => router.push("/"))
      .catch((err) => {
        console.log(err);
        setStatus(COMPOSE_STATES.ERROR);
      });
    setMessage("");
  };

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING;

  return (
    <>
      <AppLayout>
        <form onSubmit={(e) => handleSubmit(e)}>
          <textarea
            placeholder="¿Qué está pasando?"
            value={message}
            onChange={handleChange}
          ></textarea>
          <div>
            <Button disabled={isButtonDisabled}>Devitear</Button>
          </div>
        </form>
      </AppLayout>

      <style jsx>{`
        div {
          padding: 15px;
        }
        textarea {
          width: 100%;
          box-sizing: border-box;
          border: 0;
          outline: 0;
          padding: 15px;
          min-height: 200px;
          resize: none;
          font-size: 21px;
        }
      `}</style>
    </>
  );
}
