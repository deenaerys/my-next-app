// index.js
import React from 'react';

const Home = () => {
  return <div>This is the Home page</div>;
};

export default Home;

// about.js
import React from 'react';

const About = () => {
  return <div>This is the About page</div>;
};

export default About;

// list.js
import React from 'react';
import { FixedSizeList } from 'react-window';

const List = () => {
  const data = []; // Replace with your data or fetch it from an API

  const Row = ({ index, style }) => {
    return <div style={style}>{data[index]}</div>;
  };

  return (
    <div>
      <h1>List Page</h1>
      <FixedSizeList
        height={400}
        itemCount={data.length}
        itemSize={50}
        width={300}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
};

export default List;
