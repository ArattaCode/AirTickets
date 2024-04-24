import React from "react";
import "./styles.css";
import TicketsData from "./airTicketsData.js";
import TicketsCard from "./airTicketsCard.js";
import PriceRangeFilter from "./Filters/PriceRangeFilter/PriceRangeFilter.js";
import PriceSortFilter from "./Filters/PriceSortFilter/PriceSortFilter.js";
import StopsFilter from "./Filters/StopFilter/StopFilter.js";
import Logo from "./Logo.png";

export default function App() {
  const [price, setPrice] = React.useState({
    maxPrice: TicketsData.tickets.reduce((acc, curr) =>
      acc > curr.price ? acc : curr.price,
    ),
    minPrice: TicketsData.tickets.reduce((acc, curr) =>
      acc < curr.price ? acc : curr.price,
    ),
    selPrice: TicketsData.tickets.reduce((acc, curr) =>
      acc > curr.price ? acc : curr.price,
    ),
  });
  const [stopFilter, setStopFilter] = React.useState({
    all: true,
    0: false,
    1: false,
    2: false,
    3: false,
  });
  const [priceSortFromMax, setPriceSort] = React.useState(true);
  const [ticketsArray, setTicketsArray] = React.useState(TicketsData.tickets);
  React.useEffect(() => {
    setTicketsArray(() => {
      let resArray = [];
      for (let key in TicketsData.tickets)
        if (TicketsData.tickets[key].price <= price.selPrice)
          if (stopFilter.all || stopFilter[TicketsData.tickets[key].stops])
            resArray.push(TicketsData.tickets[key]);
      if (priceSortFromMax)
        //descending order
        resArray.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      //ascending order
      else resArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      return resArray;
    });
  }, [TicketsData.tickets, price, stopFilter, priceSortFromMax]);

  return (
    <div className="App">
      <img src={Logo} alt="Logo" loading="lazy" />
      <div className="body">
        <div className="filters-body">
          <StopsFilter stopFilter={stopFilter} setStopFilter={setStopFilter} />
          <PriceRangeFilter price={price} setPrice={setPrice} />
          <PriceSortFilter
            priceSortFromMax={priceSortFromMax}
            setPriceSort={setPriceSort}
          />
        </div>
        <div className="ticket-result">
          <TicketsCard props={ticketsArray} />
        </div>
      </div>
    </div>
  );
}
