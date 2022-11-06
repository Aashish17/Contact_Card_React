import React from "react";
import Card from "./Card";
import Contact from "../contacts.js";

console.log(Contact);
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={Contact[0].name}
        image={Contact[0].imgURL}
        email={Contact[0].email}
        phone={Contact[0].phone}
      />
      <Card
        name={Contact[1].name}
        image={Contact[1].imgURL}
        email={Contact[1].email}
        phone={Contact[1].phone}
      />
      <Card
        name={Contact[2].name}
        image={Contact[2].imgURL}
        email={Contact[2].email}
        phone={Contact[2].phone}
      />
    </div>
  );
}

export default App;
