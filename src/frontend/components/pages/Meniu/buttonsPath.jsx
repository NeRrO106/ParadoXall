import './buttonsPath.scss';

function Buttons({ onFilterChange }) {
  const categories = [
    'all', 'pizza', 'ciorbe', 'Super bune', 
    'gratar', 'paste', 'peste', 
    'Salate Aperitiv','Desert'
  ];

  return (
    <div className="buttons-container">
      <div className="desktop-buttons">
        {categories.map((cat, index) => (
          <button key={index} className="btn-custom-menu" onClick={() => onFilterChange(cat)}>
            {cat}
          </button>
        ))}
      </div>
      <div className="mobile-dropdown">
        <select onChange={(e) => onFilterChange(e.target.value)}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Buttons;
