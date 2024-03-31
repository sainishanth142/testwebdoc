import logo from './logo.svg';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./comp/Home";
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ReactJS
        </a>
      </header>
    </div>
  );
}

export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
