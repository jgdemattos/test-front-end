import "./App.css";
import * as CharactersAPI from "./utils/API";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  InputGroup,
  InputGroupText,
  Input,
  Row,
  Col,
  Table,
  Badge,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const sortCharacters = (
  characters,
  setCharacters,
  order,
  setOrder,
  orderBy
) => {
  characters.sort((a, b) => {
    if (order === "desc") {
      if (a[orderBy] > b[orderBy]) {
        return -1;
      }
      if (a[orderBy] < b[orderBy]) {
        return 1;
      }
    } else {
      if (a[orderBy] < b[orderBy]) {
        return -1;
      }
      if (a[orderBy] > b[orderBy]) {
        return 1;
      }
    }
    return 0;
  });
  setOrder(() => (order === "asc" ? "desc" : "asc"));

  setCharacters(characters);
};

function CharacterModal({
  selectedCharacter: { name, image, status },
  isOpen,
  toggle,
}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {name}
        <Badge pill>{status}</Badge>
      </ModalHeader>
      <ModalBody>
        <img className="character-image" src={image}></img>
      </ModalBody>
      <ModalFooter>
        <Button onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

function App() {
  const [name, setName] = useState("Rick");
  const [order, setOrder] = useState("desc"); //asc/desc

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    CharactersAPI.getCharactersByName(name, setCharacters);
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
      <Row>
        <Col></Col>
        <Col>
          <Table striped>
            <thead>
              <tr>
                <th></th>
                <th
                  className="pointer"
                  onClick={() => {
                    sortCharacters(
                      characters,
                      setCharacters,
                      order,
                      setOrder,
                      "id"
                    );
                  }}
                >
                  id
                </th>
                <th
                  className="pointer"
                  onClick={() => {
                    sortCharacters(
                      characters,
                      setCharacters,
                      order,
                      setOrder,
                      "name"
                    );
                  }}
                >
                  Name
                </th>
                <th className="pointer">status</th>
                <th>see more</th>
              </tr>
            </thead>
            <tbody>
              {characters.map((character) => (
                <tr key={character.id}>
                  <th>
                    <img
                      className="character-image"
                      src={character.image}
                    ></img>
                  </th>
                  <td>{character.id}</td>
                  <td>{character.name}</td>
                  <td>
                    <Badge pill>{character.status}</Badge>
                  </td>
                  <td>
                    {" "}
                    <Button color="danger" onClick={() => toggle(character)}>
                      Click Me
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col></Col>
      </Row>
      <CharacterModal
        isOpen={modal}
        toggle={toggle}
        selectedCharacter={selectedCharacter}
      ></CharacterModal>
    </div>
  );
}

export default App;
