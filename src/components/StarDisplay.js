import React from 'react';
import utils from '../math-utils';

const StarDisplay = (props) => (
  <>
    {utils.range(1, props.count).map((starId) => (
      <div className="star" key={starId} />
    ))}
  </>
);

export default StarDisplay;
