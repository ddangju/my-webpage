import React from "react";
import Card from "./card";

const CardList = ({ cards }) => {
  return (
    <>
      {Object.keys(cards)
        .reverse()
        .map((key) => (
          <Card item={cards[key]} key={key} />
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
