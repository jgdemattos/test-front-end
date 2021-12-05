import "./App.css";
import * as CharactersAPI from "./utils/API";
import CharacterModal from "./components/Modal";
import CharacterList from "./components/List";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, InputGroupText, Input, Row, Col } from "reactstrap";
import sortCharacters from "./utils/sortCharacters";

function App() {
  const [name, setName] = useState("Rick");

  const [order, setOrder] = useState("desc"); //asc/desc

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    let storedCharacters = localStorage.getItem("characters");
    if (storedCharacters) {
      console.log("getFromLocalstoreage");
      setCharacters(JSON.parse(storedCharacters));
    } else {
      console.log("getFromAPI");
      CharactersAPI.getCharactersByName(name, setCharacters);
    }
  }, [name]);
  const [modal, setModal] = React.useState(false);

  const [selectedCharacter, setSelectedCharacter] = useState({});

  const toggle = (character) => {
    setSelectedCharacter(character);
    setModal(!modal);
  };

  return (
    <div className="App">
      <Row>
        <Col></Col>
        <Col>
          <div>
            <InputGroup>
              <InputGroupText>Name</InputGroupText>
              <Input
                placeholder="Character's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
            <br />
          </div>
        </Col>
        <Col></Col>
      </Row>
      {characters.length > 0 ? (
        <Row>
          <Col></Col>
          <Col>
            <CharacterList
              toggle={toggle}
              sortCharacters={sortCharacters}
              characters={characters}
              setOrder={setOrder}
              setCharacters={setCharacters}
              order={order}
            ></CharacterList>
          </Col>
          <Col></Col>
        </Row>
      ) : null}
      <CharacterModal
        isOpen={modal}
        toggle={toggle}
        selectedCharacter={selectedCharacter}
      ></CharacterModal>
    </div>
  );
}

export default App;
