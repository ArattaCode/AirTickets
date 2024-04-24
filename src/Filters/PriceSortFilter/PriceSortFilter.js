import React from "react";
import "./PriceSortFilter.css";

const PriceSortFilter = React.memo(({ priceSortFromMax, setPriceSort })=> {
    console.log("PriceSortFilter");
    function changePriceSort(event) {
        setPriceSort((prevPriceRange) => (!prevPriceRange));
    }

    return (
        <div className="price-sort">
        <span>Сортировка по цене</span>
        <div>
          <input
            type="radio"
            key="FromMax"
            checked={priceSortFromMax}
            onChange={changePriceSort}
            name="RadioButton"
          />
          <label htmlFor="Unemployment">По убыванию</label>
          <input
            type="radio"
            key="FromMin"
            checked={!priceSortFromMax}
            onChange={changePriceSort}
            name="RadioButton"
          />
          <label htmlFor="Part-time">По возрастанию</label>            
        </div>
      </div>
    );
  })

  export default PriceSortFilter; 