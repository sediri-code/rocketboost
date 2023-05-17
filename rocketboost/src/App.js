import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import ServerList from './components/ServerList';
import ServerDetails from './components/ServerDetails';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="main-content">
        <ServerList />
        <ServerDetails />
      </div>
    </div>
  );
}

export default App;
