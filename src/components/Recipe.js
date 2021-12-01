import image from '../assets/default-img.png'
import {useEffect, useState} from "react";
import Ingredients from "./Ingredients";
import {MdDeleteForever, MdEdit} from "react-icons/md";
import {useLocation, useNavigate} from "react-router-dom";

const Recipe = ({onDelete}) => {
    const [recipe, setRecipe] = useState([])
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

    const deleteRecipe = async (id) => {
        //TODO: make a popup for confirmation
        const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${id}`, {
            method: 'DELETE',
        })
        if (res.status !== 200) {
            //TODO: replace alert with popup
            alert('Error Deleting This Recipe')
            return
        }
        await onDelete(id)
        navigate('/', {replace: true})
        console.log('deleted recipe id =>', id)
    }

    function validateImageUrl(imageUrl) {
        if (imageUrl === undefined) {
            return image.toString()
        }
        if (imageUrl === '' || !(imageUrl.includes('http'))) {
            return image.toString()
        }
        return imageUrl
    }

    return (
        <div className='recipe'>
            <div className='recipePictureContainer'>
                <img
                    src={validateImageUrl(recipe.imageUrl)}
                    alt=''
                />
                <div className='recipePictureContainerTopBar'>
                    <div className='icon' style={{color: 'white'}}>
                        <MdEdit
                            size={30}
                            onClick={() => {
                                //TODO: delete recipe
                            }}
                        />
                    </div>
                    <h2>{recipe.name}</h2>
                    <div className='icon' style={{color: 'white'}}>
                        <MdDeleteForever
                            size={30}
                            onClick={() => deleteRecipe(recipe.id)}
                        />
                    </div>
                </div>

                <span>
                    <h5>PORTIONS :&ensp;{recipe.portions === null ? '?' : recipe.portions}</h5>
                    <h5>PREP.&ensp;TIME :&ensp;{recipe.time === null ? '?' : recipe.time}</h5>
                </span>
            </div>
            <Ingredients extractedRecipeId={recipeId}/>
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
