import React from "react";
import { Table, Badge, Button } from "reactstrap";

export default function CharacterList({
  toggle,
  sortCharacters,
  characters,
  setOrder,
  setCharacters,
  order,
}) {
  return (
    <div>
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
                <img className="character-image" src={character.image}></img>
              </th>
              <td>{character.id}</td>
              <td>{character.name}</td>
              <td>
                <Badge pill>{character.status}</Badge>
              </td>
              <td>
                {" "}
                <Button color="danger" onClick={() => toggle(character)}>
                  See
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
