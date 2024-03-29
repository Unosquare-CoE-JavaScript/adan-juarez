import { Component, useState, useEffect } from "react";
import CardList from "./components/card-list/CardList";
import  SearchBox from "./components/search-box/SearchBox";

export const AppMonster = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
      
  }, []);

  useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchField)
      })

      setFilterMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

/* class AppMonsters extends Component {
  constructor() {
    super();

    this.state = {
      name: "Yihua",
      searchField: "",
      monsters: [],
      filteredMonsters: this.monsters,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState(users));
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default AppMonsters;
 */