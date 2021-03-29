import React from 'react';

function NameItem({ name }) {
  return (
    <li>
      <h3>{name}</h3>
      <button type="button">
        Geef een rondje!
      </button>
    </li>
  );
}

export default NameItem;