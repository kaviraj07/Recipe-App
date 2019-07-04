import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';
import './Recipe.css';

class RecipeApp extends Component {
    render(){

      return (
        <div className="App">
          <Recipe 
              title="Pasta"
              ingredients ={['Flour','Water']}
              instructions="Mix ingredients"
              img="Spaghetti.jpg"/>

          <Recipe 
              title="Mikshake"
              ingredients ={['Milk','Banana']}
              instructions="Blend in mixer"
              img="milk.jpg"/>

          <Recipe 
              title="Salad"
              ingredients ={['Lettuces','Tomatoes','Vinegar']}
              instructions="Mix ingredients"
              img="salad.jpg"/>
        </div>
      )
    }


}

export default RecipeApp;
