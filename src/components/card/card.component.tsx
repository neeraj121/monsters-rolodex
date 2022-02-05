import React from "react";

import "./card.styles.css";

export type Item = {
    name: string;
    id: string;
    email: string;
};

interface CardProps {
    key: string;
    item: Item;
}

export const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <div className="card-container">
            <img
                alt="monster"
                src={`https://robohash.org/${item.id}?set=set2&size=180x180`}
            />
            <h2>{item.name}</h2>
            <p>{item.email}</p>
        </div>
    );
};
