import React, { Component} from 'react';
import propTypes from 'prop-types';
 
class Recipe extends Component {

    //This will validate whether the attributes are present (is required)
    static propTypes ={

        title: propTypes.string.isRequired,
        ingredients: propTypes.string.isRequired,
        instructions:propTypes.string.isRequired,
        image:propTypes.string.isRequired
    }

    render(){
        
        const {title,img,instructions}=this.props;
        const ingredients=this.props.ingredients.map((ing,index) => (
            <li key={index}> {ing} </li>
        ));
        return(
            <div className="recipe-card">

                <div className="recipe-card-img">
                    <img src={img} alt={title}/>
                </div>

                <div className="recipe-card-content">
                    <h1 className="recipe-card-title"> {title}</h1>

                    <ul>
                        {ingredients}
                    </ul>
                    <h1>Instructions:</h1>
                    <p>{instructions}</p>

                </div>
            </div>
        )
    }

}
export default Recipe;