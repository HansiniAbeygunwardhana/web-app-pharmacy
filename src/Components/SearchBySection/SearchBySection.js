import React, { useEffect, useState } from "react";
import "./SearchBySectionNew.scss";
import { Slider } from "antd";
import { async } from "q";

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
  const [categoryItemList, setCategoryItemList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultCategory = await fetch("http://localhost:8080/category/list");
      const jsonResultCategory = await resultCategory.json();
      setCategoryItemList(jsonResultCategory);
    };
    fetchData();
  }, []);

  return (
    <div className="Searchby col-12">
      <div className="Searchby__title col-12">SHOP BY</div>
      <div className="Searchby__title_type col-12">
        CATEGORY
        <div className="Searchby__title_type__options col-12">
          <ul>
            {categoryItemList.map((item) => (
              <li
                key={item.id}
                value={item.id}
                onClick={onSearchedValueChanged}
              >
                {item.categoryName}
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
