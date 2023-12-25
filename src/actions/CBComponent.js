import React, { useState, useCallback } from "react";
import ChildComponent from "../children/ChildComponent";
function CBComponent() {
  const [users, setUsers] = useState([]);
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  const handleOnClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };

  return (
    <>
      <p>Data: </p>
      <button onClick={handleOnClick}>Get Users Data</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponent getData={getData} />
    </>
  );
}

export default CBComponent;
