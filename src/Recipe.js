import React, { Component} from 'react';
 
class Recipe extends Component {

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
                    <h1 className="recipe-card-title">Recipe {title}</h1>

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