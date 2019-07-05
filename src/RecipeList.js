import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component{

    static defaultProps={
        recipes:[
            {
                title:"Pasta",
                ingredients :['Flour','Water'],
                instructions:"Mix ingredients",
                img:"Spaghetti.jpg",
            },
            {
                title:"Mikshake",
                ingredients :['Milk','Banana'],
                instructions:"Blend in mixer",
                img:"milk.jpg",
            },
            {
                title:"Salad",
                ingredients :['Lettuces','Tomatoes','Vinegar'],
                instructions:"Mix ingredients",
                img:"salad.jpg",
            }
        ]
    }

    static propTypes={
        recipes:PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render(){
        const recipes =this.props.recipes.map((r,index) => (
            <Recipe key ={index} {...r}/>
        ));

        return(
            <div className="recipe-list">
                {recipes} 
            </div>
        )
    }

}
export default RecipeList;
