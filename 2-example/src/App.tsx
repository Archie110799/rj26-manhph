import React from 'react';
import logo from './logo.svg';
import './App.css';
import JSX from './2-example/1-JSX'
import ItemUser from './features/ItemUser';
import FunctionalComponent from './2-example/2-Component/FunctionalComponent';
import State from './2-example/3-State';
import ItemUserClass from './features/ItemUserClass';
import BtnLikeF from './features/homeworks/Session 04/BtnLikeF';
import BtnRatingF from './features/homeworks/Session 04/BtnRatingF';
import CaroselF from './features/homeworks/Session 04/CaroselF';
import TabsF from './features/homeworks/Session 04/TabsF';
import Accordions from './features/homeworks/Session 04/Accordions';
import Bt1 from './features/homeworks/Session 05/Bt1';
import Bt2 from './features/homeworks/Session 05/Bt2';
import FormsExamples from './2-example/6-FormsExamples';
import FormExF from './features/homeworks/Session 06/FormExF';
import ListUser from './components/ListUser';
import FormUser from './components/FormUser';
import ReactRouterExamples from './2-example/8-ReactRouterExamples';
import Session08 from './features/homeworks/Session08';
import ConfigRoute from './components/ConfigRoute';

function App() {
  const listUser = [
    {
      name: "name 1",
      age: 18,
    },
    {
      name: "name 2",
      age: 19,
    },
    {
      name: "name 3",
      age: 20,
    },
  ];
  const userObject = {
    name: "name 2",
    age: 19,
  };
  // COMPONENT CON
    // Tao file component.tsx
    // Tao base code : rfce / rcc
  // COMPONENT CHA
    // Call component con (neu cpn con co props -> bat buoc phai truyen props)
    // Import component con

  return (
    <>
      {/* <State /> */}
      {/* <ItemUserClass  /> */}
      {/* <Accordions /> */}
      {/* <Bt1 /> */}
      {/* <Bt2 /> */}
      {/* <FormsExamples /> */}
      {/* <FormExF /> */}
      {/* <ListUser /> */}
      {/* <FormUser /> */}
      {/* <ReactRouterExamples /> */}
      {/* <Session08 /> */}
      <ConfigRoute />
    </>
  );
}

export default App;
