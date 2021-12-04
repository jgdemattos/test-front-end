let api = "https://rickandmortyapi.com/api/";

export const getCharacters = () =>
  fetch(`${api}/character`)
    .then((res) => res.json())
    .then((results) => {
      return results;
    });

export const getCharactersByName = (name, setCharacters) =>
  fetch(`${api}/character/?name=${name}`)
    .then((characters) => characters.json())
    .then((characters) => setCharacters(characters.results));
