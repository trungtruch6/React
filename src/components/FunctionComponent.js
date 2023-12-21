import React, { useState, useEffect } from "react";

function FunctionComponent() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  // const [name, setName] = useState({ name: "Trung Truc" });

  // useEffect được sử dụng khi xử lý các vấn đề của side Effects:
  //[Thực hiện gọi API, Thêm,sửa và xóa các event listeners(click, scroll, ...), Thao tác với Dom trức tiếp, Gọi Web APIs(setTimeout, setInterval, ...)]
  //------------------------------------------------------ ----------------------------------------------------------------------------------------------
  useEffect(() => {
    document.title = `Your clicked ${count} times`;
  }, [count]);
  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
      .then((res) => console.log({ res }))
      .catch((error) => console.log(error));
  }, [action]);

  const onClick = () => {
    console.log("FunctionComponent");
    setCount(count + 1);
  };
  // const onChange = (e) => {
  //   console.log("Re-render FunctionComponent");
  //   setName({ name: e.target.value });
  // };
  return (
    <>
      <div>Function Component</div>
      <p>How many times when you click a button: {count}</p>
      <button onClick={onClick}>Click here</button>
      <button onClick={() => setAction("user")}>Action User</button>
      <button onClick={() => setAction("comment")}>Action Comment</button>
      {/*
      // {<div> Get info user name in Function Component</div>
      // <input
      //   type="text"
      //   name="name"
      //   placeholder="Your name here!"
      //   onChange={onChange}
      // />
      // <p> Your name show here: {JSON.stringify(name)}</p>}
      */}
    </>
  );
}

export default FunctionComponent;
