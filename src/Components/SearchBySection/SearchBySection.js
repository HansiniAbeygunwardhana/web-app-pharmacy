import React, { useEffect, useState } from "react";
import "./SearchBySectionNew.scss";
import { Slider } from "antd";

// const minRange = 0;
// const maxRange = 100000;

export const SearchBy = ({
  onSearchedValueChanged,
  onChange,
  minRange,
  maxRange,
}) => {
  // const onSearchItemClicked = (e) => {
  //   props.onSearchItemSelected(e);
  // };

  // const [range, useRange] = useState([minRange, maxRange]);

  const searchList = ["tablet", "sprays", "inhalers", "injections", "capsules"];

  // const searchListPrice = ["LKR 0.00 - LKR 9000.00", "Above LKR 9000.00"];

  return (
    <div className="Searchby col-12">
      <div className="Searchby__title col-12">SHOP BY</div>
      <div className="Searchby__title_type col-12">
        CATEGORY
        <div className="Searchby__title_type__options col-12">
          <ul>
            {searchList.map((item) => (
              <li key={item} value={item} onClick={onSearchedValueChanged}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="Searchby__title_type col-12">
        PRICE
        <div>
          <Slider
            range
            step={100}
            defaultValue={[minRange, maxRange]}
            onChange={onChange}
            // onAfterChange={onAfterChange}
            // min={minRange}
            // max={maxRange}
            min={minRange}
            max={maxRange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBy;
