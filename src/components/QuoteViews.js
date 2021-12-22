import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const QuoteViews = ({ characters, movies, loading }) => {
  const [character, setCharacter] = useState();
  const [quoteList, setQuoteList] = useState();
  const [select, setSelect] = useState("The Two Towers");

  if (loading) {
    return <h2>Loading...</h2>;
  }
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer tXXcnBscxMooPo6b_dmu",
  };

  const handleClick = () => {
    let inputChar = document.getElementById("character");
    if (inputChar.value == "") {
      alert("Unesite ime karaktera");
      return;
    }

    let id;
    for (let i = 0; i < characters.length; i++) {
      if (inputChar.value == characters[i].name) {
        id = characters[i]._id;
        break;
      }
    }

    function getMeChar() {
      fetch("https://the-one-api.dev/v2/character/?name=" + inputChar.value, {
        headers: headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status == 429) {
            throw new Error(
              "Server is overwhelmed right now, give it a minute"
            );
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((responseJson) => {
          setCharacter(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    function getMeQuote() {
      fetch("https://the-one-api.dev/v2/character/" + id + "/quote?limit=10", {
        headers: headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status == 429) {
            throw new Error(
              "Server is overwhelmed right now, give it a minute"
            );
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((responseJson) => {
          setQuoteList(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getMeChar();
    getMeQuote();
  };

  let quotesArr = [];

  if (quoteList === undefined || character === undefined)
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

          <Button variant="primary" onClick={handleClick}>
            Submit
          </Button>
        </Form>
      </div>
    );
  quoteList.docs.forEach((element) => {
    quotesArr.push(element.dialog);
  });

  console.log(quotesArr);
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
        <Button variant="primary" onClick={handleClick}>
          Submit
        </Button>
      </Form>
      <hr></hr>
      <div className="mapped-quotes">
        {quotesArr.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );

  // console.log(character);
  // console.log(quoteList);
};

export default QuoteViews;
