import { useState, useContext } from 'react';
import { UserContext } from '../../../App';
import useMaxState from './useMaxState';

const Status = () => {
  const character = useContext(UserContext);
  const [maxState, minState] = useMaxState(character.states);
  const [status, setStatus] = useState('JANE DOE IS A CONSOLE LOGGER');
  const [paragraph, setParagraph] = useState('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let article = '';
  vowels.forEach((letter) => {
    if (maxState[0] === letter) {
      article = 'an';
    } else {
      article = 'a';
    }
    // console.log(maxState[0], letter);
  });
  // setParagraph(`${character.basicInfo.name} ${minState} ${maxState} ${character.basicInfo.jobTitle}`)
  return (
    <div className="Status">
      <p>{`${character.basicInfo.name} is ${article} ${maxState}, ${minState} ${character.basicInfo.jobTitle}...`}</p>
    </div>
  );
};

export default Status;
