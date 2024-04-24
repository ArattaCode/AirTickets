import React from "react";
import "./stopFilter.css";

const StopFilter = React.memo(({ stopFilter, setStopFilter })=> {
  console.log("StopFilter");
  function changeStopFilter(event) {
    const { name, checked } = event.target;
    setStopFilter((prevValue) => {
      //console.log("event.target", event.target);
      return {
        ...prevValue,
        [name]: checked,
      };
    });
  }

  return (
    <div className="filter-stops">
      <span>Количество пересадок</span>
      <div>
        <input
          type="checkbox"
          id="allResult"
          name="all"
          checked={stopFilter.all}
          onChange={changeStopFilter}
        />
        <label htmlFor="allResult">Все</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="withoutStop"
          name="0"
          checked={stopFilter["0"]}
          onChange={changeStopFilter}
        />
        <label htmlFor="withoutStop">Без пересадок</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="1stop"
          name="1"
          checked={stopFilter["1"]}
          onChange={changeStopFilter}
        />
        <label htmlFor="1stop">1 пересадка</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="2stop"
          name="2"
          checked={stopFilter["2"]}
          onChange={changeStopFilter}
        />
        <label htmlFor="2stop">2 пересадки</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="3stop"
          name="3"
          checked={stopFilter["3"]}
          onChange={changeStopFilter}
        />
        <label htmlFor="3stop">3 пересадки</label>
      </div>
    </div>
  );
})

export default StopFilter;
