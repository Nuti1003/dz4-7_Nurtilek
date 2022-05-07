import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({ onFilter }) => {
  return (
    <div className="btn-group">
      <button type="button"
              onClick={() => onFilter('all')}
              className="btn btn-info">All</button>
      <button type="button"
              onClick={() => onFilter('active')}
              className="btn btn-outline-secondary">Active</button>
      <button type="button"
              onClick={() => onFilter('done')}
              className="btn btn-outline-secondary">Done</button>
    </div>
  );  
};

export default ItemStatusFilter;
