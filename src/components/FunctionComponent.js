import React, { useState, useEffect } from "react";

function FunctionComponent() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (action)
      fetch(`https://reqres.in/api/${action}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.data || []);
        })
        .catch((err) => console.log(err));
  }, [action]);
  useEffect(() => {
    document.title = `This is title was clicked: ${count} times`;
  }, [count]);

  return (
    <>
      <div>FunctionComponent</div>
      <p>You was clicked: {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click here
      </button>
      <p>What is action set: {action}</p>
      <button
        onClick={() => {
          setAction("users");
        }}
      >
        Add Users
      </button>
      <button
        onClick={() => {
          setAction("comment");
        }}
      >
        Add Comment
      </button>
      <div>
        <p>This is the list of colors:</p>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>Name:</strong> {item.name}, <strong>Year:</strong>{" "}
              {item.year}, <strong>Color:</strong> {item.color},{" "}
              <strong>Pantone Value:</strong> {item.pantone_value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FunctionComponent;
