import React from "react";
import "./PriceRangeFilter.css";

const PriceRangeFilter = React.memo(({ price, setPrice }) => {
  console.log("PriceRangeFilter");
  function changePrice(event) {
    setPrice((prevPrice) => ({ ...prevPrice, selPrice: event.target.value }));
  }

  return (
    <div className="price-filter-body">
      <span>Стоимость</span>
      <div className="price-filter-value">
        <span id="minPrice">{price.minPrice} ₽</span>
        <input
          id="num"
          className="selected-price"
          onInput={changePrice}
          value={price.selPrice}
        />
        <span id="maxPrice">{price.maxPrice} ₽</span>
      </div>
      <input
        id="range"
        className="range"
        onChange={changePrice}
        type="range"
        min={price.minPrice}
        max={price.maxPrice}
        step="100"
        value={price.selPrice}
      />
    </div>
  );
})

export default PriceRangeFilter;
