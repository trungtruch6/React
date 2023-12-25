import React, { useState, useEffect } from "react";

function ChildComponent({ getData }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getData("comments")
      .then((res) => res.json())
      .then((res) => {
        const comments = res.data;
        setComments(comments);
      });
  }, [getData]);
  return (
    <>
      <p>ChildComponent</p>
      <p>{JSON.stringify(comments)}</p>
    </>
  );
}

export default ChildComponent;
