import React from 'react';
import {NavLink} from "react-router-dom";

import './less/index.css';

const App = ({ children}) => (
      <div className="App">
        <div className='menu-bar'>
            <div className='menu-item'>
                <NavLink exact to='/' className='menu-item-link'>Home</NavLink>
            </div>
            <div className='menu-item'>
                 <NavLink to='/about' className='menu-item-link'>About</NavLink>
            </div>
            <div className='menu-item'>
                <NavLink to='/inbox' className='menu-item-link'>Inbox</NavLink>
            </div>
        </div>
        <div className='content'>
          {children}
        </div>
      </div>
    );

export default App;
