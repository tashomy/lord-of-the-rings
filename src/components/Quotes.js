import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Quotes = ({ quotes, loading }) => {
  const [character, setCharacter] = useState();
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer tXXcnBscxMooPo6b_dmu",
  };
  useEffect(() => {
    const fetchData = async () => {
      const rawCharacters = await fetch(
        "https://the-one-api.dev/v2/character?_id=" + quotes.character,
        { headers: headers }
      );
      const characters = await rawCharacters.json();
      const character = characters.docs[0];
      setCharacter(character);
    };
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="wrap-movie-quotes">
      {quotes.docs.map((item, index) => {
        return (
          <Card key={index} className="card-details" id="card-border">
            <Card.Body className="card-body">
              <Card.Text>
                Dialog: {item.dialog} <br></br>
                <br></br>
                {/* {
                  (setCharacter = quotes.docs.find((element) => {
                    element.character = character.docs.id;
                  }))
                } */}
                Character: {item.character} <br></br>
                <br></br>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Quotes;
