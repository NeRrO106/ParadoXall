import React, { useState } from 'react';
import '../Meniu/meniu.scss';
import Buttons from './buttonsPath';
import ProductList from './Products'

function Meniu() {

  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) =>{
    setFilter(newFilter);
  };

  return (
    <div>
      <div className="meniu">
        <h1>Meniu</h1>
      </div>
      <Buttons onFilterChange={handleFilterChange}/>
      <ProductList filter={filter}/>
    </div>
  );
}
export default Meniu;
