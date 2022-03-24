import React, { useEffect, useState } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { Item } from "./components/card/card.component";
import { SearchBox } from "./components/search-box/search-box.component";

type AppState = {
    monsters: Item[];
    searchField: string;
};

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
    const [monsters, setMonsters] = useState<Item[]>([]);
    const [searchField, setSearchField] = useState<string>("");
    const [fitleredMonsters, setFilteredMonsters] = useState<Item[]>(monsters);

    const fetchMonsters = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const jsonResponse = await response.json();
        setMonsters(jsonResponse as Item[]);
    };

    useEffect(() => {
        fetchMonsters();
    }, []);

    useEffect(() => {
        const filteredMonstersArray = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField)
        );
        setFilteredMonsters(filteredMonstersArray);
    }, [monsters, searchField]);

    const handleSearchBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(e.target.value);
    };

    return (
        <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox
                placeholder="search monsters"
                handleChange={handleSearchBoxChange}
            />
            <CardList items={fitleredMonsters} />
        </div>
    );
};

export default App;
