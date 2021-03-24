import React from "react";
import { useEffect, useState } from "react";
import LiveClass from "../LiveClass/LiveClass";

const Post = () => {
  const [liveClass, setLiveClass] = useState([]);
  const postInfo = { user_id: 10089 };
  useEffect(() => {
    fetch("https://examplebd.com/api/live-classes", {
      method: "POST",
      body: JSON.stringify(postInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLiveClass(data);
      });
  }, []);
  return (
    <div>
      {liveClass.map((lc) => (
        <LiveClass liveClass={lc} key={lc.id}></LiveClass>
      ))}
    </div>
  );
};

export default Post;
