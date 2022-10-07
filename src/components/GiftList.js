import React from "react";
import GiftItem from "./GiftItem";

function GiftList({ gifts }) {
  return (
    <div>
        <p>HHHHH</p>
      <ul>
        {gifts?.map(gift => (
          <GiftItem 
          key={gift.id} 
          gift={gift} />
        ))}
      </ul>
    </div>
  );
}

export default GiftList;
