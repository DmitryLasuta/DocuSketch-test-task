import './RandomIconGenerator.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getRandomIcon } from '../../services/getRandomIcon';
import { useState } from 'react';

const RandomIconGenerator = () => {
  const [currentIcon, setCurrentIcon] = useState(getRandomIcon());
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentIcon(getRandomIcon());
      setIsLoading(false);
    }, 3 * 1000); // 3 seconds
  };
  return (
    <div className="random-icon-generator">
      <FontAwesomeIcon className="icon" icon={currentIcon} size="2x" />
      <button className="random-icon-generator__button" onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Generate new icon'}
      </button>
    </div>
  );
};

export { RandomIconGenerator };
