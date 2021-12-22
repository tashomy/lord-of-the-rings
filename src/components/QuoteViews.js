import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const QuoteViews = ({ characters, loading }) => {
  const [quotes, setQuotes] = useState([""]);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const quotesCollected = [];

  return (
    <div className="wrap-quote-views">
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search character"
            id="character"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            let inputChar = document.getElementById("character");
            if (inputChar.value == "") {
              alert("Unesite ime karaktera");
              return;
            }
            let id;
            for (let i = 0; i < characters.length; i++) {
              if (characters[i].name == inputChar.value) {
                id = characters[i]._id;
                break;
              }
            }
            console.log(id);

            for (let i = 0; i < quotes.length; i++) {
              if (quotes[i].character == id) {
                quotesCollected.push(quotes[i].dialog);
              }
            }
            console.log(quotesCollected);
            //ovo jednostavno nije moglo, na vise sam nacina pokusala i nisam mogla da shvatim zasto mi vraca undefined
            // const fetchData = async () => {
            //   const headers = {
            //     Accept: "application/json",
            //     Authorization: "Bearer tXXcnBscxMooPo6b_dmu",
            //   };

            //   const allQuotes = await fetch(
            //     "https://the-one-api.dev/v2/character/" + { id } + "/quote", //ovdje sam pokusavala i kao id i kao {id}
            //     { headers: headers }
            //   );
            //   const res = await allQuotes.json();
            //   console.log(res);
            //   setQuotes(res);
            // };
            // fetchData();
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default QuoteViews;
