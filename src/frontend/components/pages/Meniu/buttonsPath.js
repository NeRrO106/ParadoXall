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
                <li><a className="dropdown-item" onClick={() => onFilterChange('all')} > Toate</a></li>
                <li><a className="dropdown-item" onClick={() => onFilterChange('pizzeti')} > Pizzeti</a></li>
                <li><a className="dropdown-item" onClick={() => onFilterChange('platouri')}>Platouri</a></li>
                <li><a className="dropdown-item" onClick={() => onFilterChange('ciorbe')}>Ciorbe</a></li>
                <li><a className="dropdown-item" onClick={() => onFilterChange('ParadoXall de bune')}>ParadoXall de bune</a></li>
                <li><a className="dropdown-item" onClick={() => onFilterChange('gratar')}>Gratar cu jar de carbuni</a></li>
                <li><a className="dropdown-item" onClick={() => onFilterChange('paste')}>Paste</a></li>
                <li><a className="dropdown-item" onClick={() => onFilterChange('gustari calde')}>Gustari calde</a></li>
                <li><a className="dropdown-item" onClick={() => onFilterChange('peste')}>Peste</a></li>
                <li><a className="dropdown-item" onClick={() => onFilterChange('Salate Aperitiv')}>Salate aperitiv</a></li>
                <li><a className="dropdown-item" onClick={() => onFilterChange('garnituri')}>Garnituri</a></li>
                <li><a className="dropdown-item" onClick={() => onFilterChange('Salate de insotire')}>Salate de insotire</a></li>
                <li><a className="dropdown-item" onClick={() => onFilterChange('Desert')}>Desert</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Buttons;