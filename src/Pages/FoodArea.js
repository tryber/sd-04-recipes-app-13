import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { getAllFoodByArea } from '../services/foodApi';

function FoodArea() {
  const [dropDown, setDropDown] = useState('');

  useEffect(() => {
    getAllFoodByArea().then((area) => setDropDown(area));
  }, []);

  const isDropDown = !!dropDown;

  return (
    <div>
      <Header title="Explorar Origem" search />
      <select data-testid="explore-by-area-dropdown">
        <option>All</option>
        {isDropDown &&
          dropDown.map((area, index) => (
            <option data-testid={`${area.strArea}-option`} key={`dropDown-${index}-${area}`}>
              {area.strArea}
            </option>
          ))}
      </select>
      <Footer />
    </div>
  );
}

export default FoodArea;
