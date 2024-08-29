import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Meniu/buttonsPath.css';

function Buttons({ onFilterChange }){
    return(
    <div className="container mt-6">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-none d-md-flex ">
            <button className="btn btn-custom me-2" onClick={() => onFilterChange('all')} > Toate</button>
            <button className="btn btn-custom me-2" onClick={() => onFilterChange('pizzeti')} > Pizzeti</button>
            <button className="btn btn-custom me-2" onClick={() => onFilterChange('platouri')} > Platouri</button>
            <button className="btn btn-custom me-2" onClick={() => onFilterChange('ciorbe')} > Ciorbe</button>
            <button className="btn btn-custom me-2" onClick={() => onFilterChange('ParadoXall de bune')} > ParadoXall de bune</button>
            <button className="btn btn-custom me-2" onClick={() => onFilterChange('gratar')} > Gratar cu jar de carbuni</button>
            <button className="btn btn-custom me-2" onClick={() => onFilterChange('paste')} > Paste</button>
            <button className="btn btn-custom me-2" onClick={() => onFilterChange('gustari calde')} > Gustari calde</button>
            <button className="btn btn-custom me-2" onClick={() => onFilterChange('peste')} > Peste</button>
            <button className="btn btn-custom me-2" onClick={() => onFilterChange('Salate Aperitiv')}>Salate aperitiv</button>
            <button className="btn btn-custom me-2" onClick={() => onFilterChange('garnituri')} > Garnituri</button>
            <button className="btn btn-custom me-2" onClick={() => onFilterChange('Salate de insotire')} > Salate de insotire</button>
            <button className="btn btn-custom me-2" onClick={() => onFilterChange('Desert')} > Desert</button>
          </div>
          <div className="d-md-none">
            <div className="dropdown">
              <button className="btn btn-custom dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Meniu
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><button className="dropdown-item" onClick={() => onFilterChange('all')} > Toate</button></li>
                <li><button className="dropdown-item" onClick={() => onFilterChange('pizzeti')} > Pizzeti</button></li>
                <li><button className="dropdown-item" onClick={() => onFilterChange('platouri')}>Platouri</button></li>
                <li><button className="dropdown-item" onClick={() => onFilterChange('ciorbe')}>Ciorbe</button></li>
                <li><button className="dropdown-item" onClick={() => onFilterChange('ParadoXall de bune')}>ParadoXall de bune</button></li>
                <li><button className="dropdown-item" onClick={() => onFilterChange('gratar')}>Gratar cu jar de carbuni</button></li>
                <li><button className="dropdown-item" onClick={() => onFilterChange('paste')}>Paste</button></li>
                <li><button className="dropdown-item" onClick={() => onFilterChange('gustari calde')}>Gustari calde</button></li>
                <li><button className="dropdown-item" onClick={() => onFilterChange('peste')}>Peste</button></li>
                <li><button className="dropdown-item" onClick={() => onFilterChange('Salate Aperitiv')}>Salate aperitiv</button></li>
                <li><button className="dropdown-item" onClick={() => onFilterChange('garnituri')}>Garnituri</button></li>
                <li><button className="dropdown-item" onClick={() => onFilterChange('Salate de insotire')}>Salate de insotire</button></li>
                <li><button className="dropdown-item" onClick={() => onFilterChange('Desert')}>Desert</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Buttons;