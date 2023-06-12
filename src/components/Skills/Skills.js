import React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../../App';

const Skills = () => {
  const character = useContext(UserContext);
  const [skills, setSkills] = useState(character.skills);

  console.log(skills);
  return (
    <div className="Skills">
      <h1>SKILLS</h1>
      {skills.map((skill) => {
        return (
          <div className="skill">
            {/* {console.log(skill)} */}
            <div className="name">{skill.name}</div>
            <div className="value">{skill.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
