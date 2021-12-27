import React from "react";
import Card from "./card";

function CardList({ cards }) {
  // console.log(cards, "cards");
  return (
    <>
      {cards.map((item, idx) => (
        <Card item={item} key={idx} />
      ))}
      {/* <Card>
        {testList.map((item) => {
          obj = item.name;
          console.log(item);
        })}
      </Card> */}
    </>
  );
}

export default CardList;
