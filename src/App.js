import './assets/styles/App.scss';
import { useState, createContext } from 'react';
import Main from './components/Main/Main';
import TopMenu from './components/TopMenu/TopMenu';
import BottomMenu from './components/BottomMenu/BottomMenu';
import Moodlets from './components/Character/Moodlets/Moodlets';
import Status from './components/Character/Status/Status';
import Avatar from './components/Avatar/Avatar';
import Journal from './components/Journal/Journal';
import Skills from './components/Skills/Skills';

export const UserContext = createContext();

const character = {
  basicInfo: {
    name: 'Pina Colada',
    age: 30,
    status: 'single',
    moneyAmount: 20000,
    jobTitle: 'Console Logger',
  },

  states: [
    {
      id: 1,
      label: 'hunger',
      value: 45.0,
      min: 'starving',
      max: 'overfed',
    },
    {
      id: 2,
      label: 'energy',
      value: 10.0,
      min: 'sluggish',
      max: 'energetic',
    },
    {
      id: 3,
      label: 'stress',
      value: 54.0,
      min: 'relax',
      max: 'stressed',
    },
    {
      id: 4,
      label: 'happiness',
      value: 1.0,
      min: 'depressed',
      max: 'elated',
    },
    {
      id: 5,
      label: 'fat',
      value: 8.0,
      min: 'slim',
      max: 'overweight',
    },
    {
      id: 6,
      label: 'muscle',
      value: 11.0,
      min: 'unfit',
      max: 'fit',
    },
    {
      id: 7,
      label: 'logic',
      value: 88.0,
      min: 'witless',
      max: 'rational',
    },
  ],

  skills: [
    {
      name: 'Driving',
      value: 15,
    },
    {
      name: 'Basic Cooking',
      value: 32,
    },
    {
      name: 'IT Fundamentals',
      value: 47,
    },
  ],
};

let isRunning = false;

function App() {
  return (
    <UserContext.Provider value={character}>
      <div className="App">
        <TopMenu />
        <div className="main">
          <Moodlets />
          <Journal />
          <Avatar />
          <Status />
          <Skills />
        </div>
        <BottomMenu />
      </div>
    </UserContext.Provider>
  );
}

export default App;
