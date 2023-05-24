import React from 'react';
import { FixedSizeList } from 'react-window';
import faker from 'faker';
import { useEffect, useState } from 'react'

const List = () => {
  const data = generateData(1000); // Generate 1000 fake items

  const Row = ({ index, style }) => {
    const item = data[index];
    return (
      <div style={style}>
        <div>{item.name}</div>
        <div>{item.email}</div>
      </div>
       
        
    );
  };

  return (
    <div>
      <h1>List Page</h1>
      <div style={{ height: '500px', width: '300px' }}>
        <FixedSizeList
          height={500}
          width={300}
          itemSize={50}
          itemCount={data.length}
        >
          {Row}
        </FixedSizeList>
      </div>
    </div>
  );
};

export default List;

// Function to generate fake data
const generateData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
    });
  }
  return data;
};
