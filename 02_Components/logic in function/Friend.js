import React from 'react';

const friends = [
  {
    title: "Yummmmmmm",
    src: "#"
  },
  {
    title: "Hey Guys! Wait Up!",
    src: "#"
  },
  {
    title: "Yikes",
    src: "#"
  }
];

function Friend(){
  const friend = friends[2];
  return (
    <div>
    <h1>{friend.title}</h1>
    <img 
    src = {friend.src}
    />
    </div>
  )

}

export default Friend;