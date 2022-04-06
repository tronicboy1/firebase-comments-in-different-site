import React, { useEffect, useState } from "react";
import { ref, onValue, push } from "firebase/database";
import { database } from "./firebase";
import CommentForm from "./components/CommentForm";
import "./Index.css";

interface Comment {
  id: string;
  sender: string;
  body: string;
  sentAt: Date;
}

const commentId = document.location.pathname.split("/").join("");
const currentCommentRef = ref(database, `comments/${commentId}`);

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    onValue(currentCommentRef, (snapshot) => {
      const data = snapshot.val();
      const formattedData: Comment[] = [];
      for (const key in data) {
        const commentData = data[key];
        formattedData.push({
          id: key,
          sender: commentData.sender,
          body: commentData.body,
          sentAt: new Date(commentData.sentAt),
        });
      }
      setComments(formattedData);
    });
  }, []);

  const sendComment = (formData: { sender: string; body: string }) => {
    push(currentCommentRef, {
      sender: formData.sender,
      body: formData.body,
      sentAt: new Date().toString(),
    });
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
              <small>{comment.sentAt.toLocaleString()}</small>
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
