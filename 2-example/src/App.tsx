import React from 'react';
import logo from './logo.svg';
import './App.css';
import JSX from './2-example/1-JSX'
import ItemUser from './features/ItemUser';

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
    <div className="w-50 m-auto text-center">
      {/* <JSX /> */}
      {listUser?.map((user, index) => (
        <ItemUser key={index} userProps={user} />
      ))}
    </div>
  );
}

export default App;
