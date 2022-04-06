import React, { FormEventHandler, useRef } from "react";

const CommentForm: React.FC<{
  sendComment: (data: { sender: string; body: string }) => void;
}> = ({ sendComment }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current!.value.trim();
    const body = bodyRef.current!.value.trim();

    if (name && body) {
      sendComment({ sender: name, body });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">名前</label>
        <input type="text" name="name" id="name" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="">コメント</label>
        <input type="text" name="body" id="body" ref={bodyRef} />
      </div>
      <button type="submit">送信</button>
    </form>
  );
};

export default CommentForm;
