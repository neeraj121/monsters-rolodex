import React from "react";

import "./card-list.styles.css";
import { Card, Item } from "../card/card.component";

interface CardListProps {
    items: Item[];
}

export const CardList: React.FC<CardListProps> = ({ items }) => {
    return (
        <div className="card-list">
            {items?.map((item) => (
                <Card key={item.id} item={item}></Card>
            ))}
        </div>
    );
};
