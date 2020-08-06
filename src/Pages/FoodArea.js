import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { getAllFoodByArea, getByArea } from '../services/foodApi';

function FoodArea() {
  const [dropDown, setDropDown] = useState([]);
  const [dropDownChoosen, setDropDownChoosen] = useState('');

  useEffect(() => {
    getAllFoodByArea().then((area) => setDropDown(area));
  }, []);

  const isDropDown = !!dropDown;

  const handleSelect = (e) => {
    setDropDownChoosen(e.target.value);
  };

  const fetchFoodArea = () => {
    getByArea(dropDownChoosen).then((area) => console.log(area));
  };

  return (
    <div>
      <Header title="Explorar Origem" search />
      <select onChange={(e) => handleSelect(e)} data-testid="explore-by-area-dropdown">
        <option>All</option>
        {isDropDown &&
          dropDown.map((area, index) => (
            <option
              data-testid={`${area.strArea}-option`}
              key={`dropDown-${index + 1}-${area}`}
            >
              {area.strArea}
            </option>
          ))}
      </select>
      <h2>{dropDownChoosen}</h2>
      <button onClick={fetchFoodArea}>clique</button>
      <Footer />
    </div>
  );
}

export default FoodArea;
