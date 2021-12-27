import React from "react";
import Card from "./card";

const CardList = ({ cards }) => {
  // console.log(cards, "cards");
  return (
    <>
      {Object.keys(cards).map((key) => (
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
