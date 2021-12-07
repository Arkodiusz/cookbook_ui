import {useEffect, useState} from "react";
import Ingredients from "../ingredient/Ingredients";
import RecipeDescription from "./RecipeDescription";
import RecipeInfo from "./RecipeInfo";
import {useLocation, useNavigate} from "react-router-dom";
import {PacmanLoader} from "react-spinners";

const Recipe = ({onDelete, onUpdate}) => {
    const [recipe, setRecipe] = useState(null)
    const [editInfoMode, setEditInfoMode] = useState(false)
    const [editDescriptionMode, setEditDescriptionMode] = useState(false)
    const navigate = useNavigate()
    const recipeId = useLocation().pathname.split("/").pop()

    useEffect(() => {
        const getRecipe = async () => {
            const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${recipeId}`)
            const fetchedRecipe = await res.json()
            console.log('fetched recipe =>', fetchedRecipe)
            setRecipe(fetchedRecipe)
        }
        getRecipe().then()
    }, [recipeId]);

    const deleteRecipe = async () => {
        if (recipe.isDefault) {
            alert('You can\'t delete default recipes')
            return;
        }
        if (!window.confirm("Are you sure you wish to delete this item?")) {
            return
        }
        const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${recipeId}`, {
            method: 'DELETE',
        })
        if (res.status !== 200) {
            alert('Error Deleting This Recipe')
            return
        }
        await onDelete(recipeId)
        navigate('/', {replace: true})
        console.log('deleted recipe id =>', recipeId)
    }

    const sendRequest = async (newRecipe) => {
        const res = await fetch(`https://bcookbook.herokuapp.com/recipes`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newRecipe),
        })
        const data = await res.json()
        setRecipe(data)
        console.log('edited recipe =>', data)
        await onUpdate(data)
    }

    const updateRecipeInfo = async (data) => {
        const newRecipe = {
            id: recipe.id,
            name: data.name,
            imageUrl: data.imageUrl,
            portions: data.portions === '' ? '0' : data.portions,
            time: data.time === '' ? '?' : data.time,
            preparation: recipe.preparation
        }
        await sendRequest(newRecipe)
        setEditInfoMode(false)
    }

    const updateRecipeDescription = async (description) => {
        const newRecipe = {
            id: recipeId,
            name: recipe.name,
            imageUrl: recipe.imageUrl,
            portions: recipe.portions,
            time: recipe.time,
            preparation: description
        }
        await sendRequest(newRecipe)
        setEditDescriptionMode(false)
    }

    function enableEditInfoMode() {
        if (recipe.isDefault) {
            alert('You can\'t edit default recipes')
            return;
        }
        setEditInfoMode(true)
    }

    function enableEditDescriptionMode() {
        if (recipe.isDefault) {
            alert('You can\'t edit default recipes')
            return;
        }
        setEditDescriptionMode(true)
    }

    if (recipe === null) {
        return (
            <div className='loaderContainer'>
                <div className='spinner'>
                    <PacmanLoader size={25}/>
                </div>
            </div>
        )
    }

    return (
        <div className='recipe'>
            <RecipeInfo
                recipe={recipe}
                editMode={editInfoMode}
                onEnableEditMode={() => enableEditInfoMode()}
                onDisableEditMode={() => setEditInfoMode(false)}
                onUpdate={(data) => updateRecipeInfo(data)}
                onDelete={() => deleteRecipe()}
            />
            <Ingredients
                extractedRecipeId={recipeId}
                recipeIsDefault={recipe.isDefault}
            />
            <RecipeDescription
                description={recipe.preparation}
                editMode={editDescriptionMode}
                onEnableEditMode={() => enableEditDescriptionMode()}
                onDisableEditMode={() => setEditDescriptionMode(false)}
                onUpdate={(text) => updateRecipeDescription(text)}
            />
        </div>
    )
}

export default Recipe
