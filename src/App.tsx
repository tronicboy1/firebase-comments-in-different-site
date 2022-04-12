import React, { useEffect, useState } from "react";
import { ref, onValue, push } from "firebase/database";
import { database } from "./firebase";
import CommentForm from "./components/CommentForm";
import "./Index.css";

interface Comment {
  id: string;
  sender: string;
  body: string;
  sentAt: number;
}

interface FirebaseCommentSnapshot {
  [id: string]: Omit<Comment, "id">;
}

const commentId = document.location.pathname.split("/").join("");
const currentCommentRef = ref(database, `comments/${commentId}`);

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    onValue(currentCommentRef, (snapshot) => {
      const data = snapshot.val() as FirebaseCommentSnapshot;
      const formattedData: Comment[] = Object.keys(data).map((id) => ({
        id,
        ...data[id],
      }));
      setComments(formattedData);
    });
  }, []);

  const sendComment = (formData: { sender: string; body: string }) => {
    push(currentCommentRef, {
      sender: formData.sender,
      body: formData.body,
      sentAt: new Date().getTime(),
    }).catch((error) => console.error(error));
  };

  return (
    <>
      <h1>Comments</h1>
      <div className="card">
        <ul className="comment">
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.sender}</p>
              <p>{comment.body}</p>
              <small>{new Date(comment.sentAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <CommentForm sendComment={sendComment} />
      </div>
    </>
  );
};

export default App;
