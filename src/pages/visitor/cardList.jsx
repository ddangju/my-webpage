import React from "react";
import Card from "./card";

const CardList = ({ cards, cardDelete }) => {
  return (
    <>
      {Object.keys(cards)
        .reverse()
        .map((key) => (
          <Card item={cards[key]} key={key} cardDelete={cardDelete} />
        ))}

      {/* <Card>
        {testList.map((item) => {
          obj = item.name;
          console.log(item);
        })}
      </Card> */}
    </>
  );
};

export default CardList;
