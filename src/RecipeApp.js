import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';
import './Recipe.css';

class RecipeApp extends Component {
    render(){

      return (
        <div className="App">
          <Recipe 
              title="pasta"
              ingredients ={['Flour','water']}
              instructions="Mix ingredients"
              img="Spaghetti.jpg"/>
        </div>
      )
    }


}

export default RecipeApp;
