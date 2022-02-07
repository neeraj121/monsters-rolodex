import React from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { Item } from "./components/card/card.component";
import { SearchBox } from "./components/search-box/search-box.component";

type AppProps = {};

type AppState = {
    monsters: Item[];
    searchField: string;
};

class App extends React.Component<AppProps, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            monsters: [],
            searchField: "",
        };
    }

    async componentDidMount() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const jsonResponse = await response.json();
        this.setState({
            monsters: jsonResponse as Item[],
        });
    }

    handleSearchBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchField: e.target.value });
    };

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField)
        );
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder="search monsters"
                    handleChange={this.handleSearchBoxChange}
                />
                <CardList items={filteredMonsters} />
            </div>
        );
    }
}

export default App;
