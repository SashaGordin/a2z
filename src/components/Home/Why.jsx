import React, { useState } from 'react';
import Arrow from './down-chevron.png';


function Why({ title, content_1, content_2 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandedClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="why-block">
      <div className="title">
        {title}
      </div>
      <div className="content">
        <p>{content_1}
          {isExpanded && content_2}
        </p>
        <span className="expand-button">
          <img className={`arrow ${isExpanded ? 'open' : ''}`} onClick={handleExpandedClick} src={Arrow} alt="arrow" />
        </span>
      </div>
    </div>
  );
}

export default Why;