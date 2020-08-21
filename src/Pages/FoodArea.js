import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { getAllFoodByArea, getByArea, getByName } from '../services/foodApi';
import FoodAndDrinkCard from '../components/FoodAndDrinkCard';

import '../styles/Select.css';

function FoodArea() {
  const [dropDown, setDropDown] = useState([]);
  const [dropDownChoosen, setDropDownChoosen] = useState('All');
  const [dataArea, setDataArea] = useState([]);

  useEffect(() => {
    getAllFoodByArea().then((area) => setDropDown(area));
  }, []);

  useEffect(() => {
    if (dropDownChoosen === 'All') getByName('').then((name) => setDataArea(name));
    getByArea(dropDownChoosen).then((area) => setDataArea(area));
  }, [dropDownChoosen]);

  const isDropDown = !!dropDown;

  const handleSelect = (e) => {
    setDropDownChoosen(e.target.value);
  };

  console.log(dataArea);

  return (
    <div className="general-container">
      <Header title="Explorar Origem" search />
      <div>
        <div className="select">
          <select
            onChange={(e) => handleSelect(e)}
            data-testid="explore-by-area-dropdown"
          >
            <option data-testid="All-option" value="All">
              All
            </option>
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
          <span className="focus" />
        </div>
        {dataArea && (
          <FoodAndDrinkCard data={dataArea} info="food" test="card" geralTest="recipe" />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default FoodArea;
