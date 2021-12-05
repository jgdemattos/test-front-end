export default (characters, setCharacters, order, setOrder, orderBy) => {
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
