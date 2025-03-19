import React from "react";
import "./GiftCards.css"; // Import a CSS file for styling (styles below)

const GiftCards = () => {
  const cards = [
    {
      image: "https://in.bmscdn.com/gv/gift_my_show_02402022094010_480x295.jpg",
      title: "Gift Card 1",
      price: "₹500",
    },
    {
      image: "https://in.bmscdn.com/gv/gift_my_show_02282022102856_480x295.jpg",
      title: "Gift Card 2",
      price: "₹1,000",
    },
    {
      image: "https://in.bmscdn.com/gv/gift_my_show_02302022103011_480x295.jpg",
      title: "Gift Card 3",
      price: "₹1,500",
    },
    {
      image: "https://in.bmscdn.com/gv/gift_my_show_02302022123034_480x295.jpg",
      title: "Gift Card 4",
      price: "₹2,000",
    },
    {
      image: "https://in.bmscdn.com/gv/gift_my_show_30472024114720_480x295.jpg",
      title: "Gift Card 5",
      price: "₹2,500",
    },
    {
      image: "https://in.bmscdn.com/gv/gift_my_show_30502024115016_480x295.jpg",
      title: "Gift Card 6",
      price: "₹3,000",
    },
    {
      image: "https://in.bmscdn.com/gv/gift_my_show_30522024115222_480x295.jpg",
      title: "Gift Card 7",
      price: "₹3,500",
    },
  ];

  return (
    <div className="gift-cards">
      <h1 className="gift-cards-title">Pick Your Gift Card</h1>
      <div className="gift-cards-container">
        {cards.map((card, index) => (
          <div className="gift-card" key={index}>
            <img src={card.image} alt={card.title} className="gift-card-image" />
            <h2 className="gift-card-title">{card.title}</h2>
            <p className="gift-card-price">{card.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftCards;
