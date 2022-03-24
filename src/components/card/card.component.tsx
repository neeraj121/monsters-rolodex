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
    const { id, name, email } = item;
    return (
        <div className="card-container">
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};
