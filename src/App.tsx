import React from "react";
import "./App.css";

type Monster = {
    name: string;
    id: string;
};

type AppProps = {};

type AppState = {
    monsters: Monster[];
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
            monsters: jsonResponse as Monster[],
        });
    }

    render() {
        return (
            <div className="App">
                {this.state.monsters?.map((monster) => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        );
    }
}

export default App;
