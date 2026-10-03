import { useState } from "react";

import "./App.css";
import Name from "./name";
import Price from "./price";
import Description from "./Description";
import Image from "./image";
import Card from "react-bootstrap/Card";

function App() {
  const prenom = "seloua";

  return (
    <div className="app">
      <Card
        className="shadow-lg border-0 rounded-4 text-center"
        style={{ width: "18rem" }}
      >
        <Card.Body>
          <Image />
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Card.Text>
            <Price />
          </Card.Text>
        </Card.Body>
      </Card>
      {prenom ? <p>hello {prenom}</p> : <p>hello there</p>}

      {prenom && <img src="" alt={prenom} />}
    </div>
  );
}

export default App;
