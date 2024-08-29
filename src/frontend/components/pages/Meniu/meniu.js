import React, { useEffect, useState } from 'react';
import '../Meniu/meniu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Buttons from '../Meniu/buttonsPath';
import ProductList from '../Meniu/Products'

function Meniu() {

  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) =>{
    console.log(newFilter);
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
