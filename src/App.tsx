import React from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { Item } from "./components/card/card.component";

type AppProps = {};

type AppState = {
    monsters: Item[];
};

class App extends React.Component<AppProps, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            monsters: [],
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

    render() {
        return (
            <div className="App">
                <CardList items={this.state.monsters} />
            </div>
        );
    }
}

export default App;
