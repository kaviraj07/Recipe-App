import React, { Component } from 'react';
import './RecipeApp.css';
import './Recipe.css';
import Nav from './Navbar';
import './Navbar.css'
import RecipeList from './RecipeList';

class RecipeApp extends Component {
    render(){

      return (
        
        <div className="App">
          <Nav/>
          <RecipeList/>
          
        </div>
      )
    }


}

export default RecipeApp;
