let api = "https://rickandmortyapi.com/api/";

export const getCharacters = () =>
  fetch(`${api}/character`)
    .then((res) => res.json())
    .then((results) => {
      return results;
    });

export async function getCharactersByName(name, setCharacters) {
  fetch(`${api}/character/?name=${name}`)
    .then((characters) => characters.json())
    .then((characters) => {
      setCharacters(characters.results);
      localStorage.setItem("characters", JSON.stringify(characters.results));
    });
}
