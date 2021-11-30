import image from '../assets/default-img.png'
import {useEffect, useState} from "react";


const Recipe = () => {
    const route = window.location.pathname.split("/");
    const extractedId = route[route.length-1];
    console.log("extractedId: " + extractedId);

    const [recipe, setRecipe] = useState([])
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        const getRecipe = async () => {
            const recipeFromDb = await fetchRecipe()
            console.log(recipeFromDb)
            setRecipe(recipeFromDb)
        }
        getRecipe().then()
    }, []);

    const fetchRecipe = async () => {
        const res = await fetch('https://bcookbook.herokuapp.com/recipes/'+extractedId)
        return res.json()
    }

    useEffect(() => {
        const getIngredients = async () => {
            const ingredientsFromDb = await fetchIngredients()
            console.log(ingredientsFromDb)
            setIngredients(ingredientsFromDb)
        }
        getIngredients().then()
    }, []);

    const fetchIngredients = async () => {
        const res = await fetch('https://bcookbook.herokuapp.com/recipes/'+extractedId+'/ingredients')
        return res.json()
    }

    return (
        <div className='recipe'>

            <div className='recipePictureContainer'>

                <img
                    src={recipe.imageUrl === '' ? image : recipe.imageUrl}
                    alt=''
                />

                <h2>{recipe.name}</h2>

                <span className='recipeContainerInfoBar'>
                    <h5>PORTIONS :&ensp;{recipe.portions === null ? '?' : recipe.portions}</h5>
                    <h5>PREP.&ensp;TIME :&ensp;{recipe.time === null ? '?' : recipe.time}</h5>
                </span>

            </div>


            <table>
                <tbody>
                    {ingredients.map((ingredient) => (
                        <tr key={ingredient.id}>
                            <td>
                                {ingredient.name}
                            </td>
                            <td>
                                {ingredient.quantity}&nbsp;&nbsp;{ingredient.unit.toLowerCase()}
                            </td>

                        </tr>

                    ))}
                </tbody>
            </table>
            <div className='recipeTextBox'>
                &emsp;{recipe.preparation}
            </div>
            <div>

            </div>
        </div>
    )
}

export default Recipe
