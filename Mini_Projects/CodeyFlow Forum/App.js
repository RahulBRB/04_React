import React from "react";
import { comments } from "./commentData";

function App() {
  return (
    <>
      {comments.map((comment) => {
        <Card commentObject={comment} />;
      })}
    </>
  );
}
