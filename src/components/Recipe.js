import image from '../assets/default-img.png'
import {useEffect, useState} from "react";
import Ingredients from "./Ingredients";

const Recipe = () => {
    const route = window.location.pathname.split("/");
    const extractedRecipeId = route[route.length-1];

    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        const getRecipe = async () => {
            const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${extractedRecipeId}`)
            const recipeFromDb = await res.json()
            console.log(recipeFromDb)
            setRecipe(recipeFromDb)
        }
        getRecipe().then()
    }, []);

    return (
        <div className='recipe'>
            <div className='recipePictureContainer'>
                <img
                    src={recipe.imageUrl === '' ? image : recipe.imageUrl}
                    alt=''
                />
                <h2>{recipe.name}</h2>
                <span>
                    <h5>PORTIONS :&ensp;{recipe.portions === null ? '?' : recipe.portions}</h5>
                    <h5>PREP.&ensp;TIME :&ensp;{recipe.time === null ? '?' : recipe.time}</h5>
                </span>
            </div>
            <Ingredients extractedRecipeId={extractedRecipeId}/>
            <div className='recipeTextBox'>
                <h3>PREPARATION:</h3>
                &emsp;{recipe.preparation}
            </div>
            <div>

            </div>
        </div>
    )
}

export default Recipe
