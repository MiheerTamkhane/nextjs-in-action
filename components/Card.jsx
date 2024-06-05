import React from "react";
const obj = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
export const Card = ({ name, username, phone, website }) => {
  return (
    <div className="flex flex-col p-4 border rounded-sm my-2 shadow-md">
      <h2>{name}</h2>
      <h3>{username}</h3>
      <p>{phone}</p>
      <span>{website}</span>
    </div>
  );
};
