import React from "react";
import "./airTicketsCard.css";

// <div></div>
export default function TicketsCard({ props }) {
  //console.log(" TicketsCard props", props);
  return props.map((item, index) => {
    return (
      <div key={index} className="ticket-body">
        <div className="pay-side">
          <span>{props[index].price} ₽</span>
          <button className="pay-button">Купить</button>
        </div>
        <div className="info-side">
        <div className="origin">
          <span className="time">{props[index].departure_time}</span>
          <span>{props[index].origin_name}</span>
          <span>{props[index].departure_date}</span>
        </div>
        <div>
          <span>Количество пересадок: </span>
          <span className="stop-count">{props[index].stops}</span>
        </div>
        <div className="destination">
          <span className="time">{props[index].arrival_time}</span>
          <span>{props[index].destination_name}</span>
          <span>{props[index].arrival_date}</span>
        </div>          
        </div>

      </div>
    );
  });
}
