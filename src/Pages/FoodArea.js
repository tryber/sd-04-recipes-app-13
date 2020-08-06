import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { getAllFoodByArea, getByArea } from '../services/foodApi';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';

function FoodArea() {
  const [dropDown, setDropDown] = useState([]);
  const [dropDownChoosen, setDropDownChoosen] = useState('');
  const [dataArea, setDataArea] = useState([]);

  useEffect(() => {
    getAllFoodByArea().then((area) => setDropDown(area));
    getByArea(dropDownChoosen).then((area) => setDataArea(area));
  }, [dropDownChoosen]);

  const isDropDown = !!dropDown;

  const handleSelect = (e) => {
    setDropDownChoosen(e.target.value);
  };

  console.log(dataArea);

  return (
    <div>
      <Header title="Explorar Origem" search />
      <select onChange={(e) => handleSelect(e)} data-testid="explore-by-area-dropdown">
        <option>All</option>
        {isDropDown &&
          dropDown.map((area, index) => (
            <option
              data-testid={`${area.strArea}-option`}
              key={`dropDown${index + 1}-${area.strArea}`}
            >
              {area.strArea}
            </option>
          ))}
      </select>
      <h2>{dropDownChoosen}</h2>
      {dataArea && <FoodAndDrinkCard data={dataArea} info="food" />}
      <Footer />
    </div>
  );
}

export default FoodArea;
