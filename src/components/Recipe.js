import image from '../assets/default-img.png'
import {useEffect, useState} from "react";
import Ingredients from "./Ingredients";
import {MdCancel, MdCheckCircle, MdDeleteForever, MdEdit} from "react-icons/all";
import {useLocation, useNavigate} from "react-router-dom";

const Recipe = ({onDelete, onUpdate}) => {
    const [recipe, setRecipe] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [newName, setNewName] = useState('')
    const [newImageUrl, setNewImageUrl] = useState('')
    const [newPortions, setNewPortions] = useState('')
    const [newTime, setNewTime] = useState('')
    const [newPreparation, setNewPreparation] = useState('')
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

    const updateRecipe = async () => {
        //TODO: url validation
        //TODO: maybe time validation?
        if (newName === '' || newImageUrl === '' || newPortions === '' || newTime === '' || newPreparation === '') {
            //TODO: replace alert with popup
            alert('Please fill all inputs')
            return
        }
        if (newName === recipe.name && newImageUrl === recipe.imageUrl && newPortions === recipe.portions && newTime === recipe.time && newPreparation === recipe.preparation) {
            //TODO: replace alert with popup
            alert('Notching changed')
            return
        }
        const newRecipe = {
            id: recipeId,
            name: newName,
            imageUrl: newImageUrl,
            portions: newPortions,
            time: newTime,
            preparation: newPreparation
        }
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
        setEditMode(false)
        clearInputs()
        await onUpdate(data)
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

    function clearInputs() {
        setNewName('')
        setNewImageUrl('')
        setNewPortions('')
        setNewTime('')
        setNewPreparation('')
    }

    return (
        <div className='recipe'>
            <div className='recipePictureContainer'>
                <img
                    src={validateImageUrl(recipe.imageUrl)}
                    alt=''
                />
                <div className='recipePictureContainerTopBar'>

                    {!editMode ? (
                        <div className={'recipePictureContainerTopBarEditBox'}>
                            <div className='icon' style={{color: 'white'}}>
                                <MdEdit
                                    size={30}
                                    onClick={() => {
                                        setNewName(recipe.name)
                                        setNewImageUrl(recipe.imageUrl)
                                        setNewPortions(recipe.portions)
                                        setNewTime(recipe.time)
                                        setNewPreparation(recipe.preparation)
                                        setEditMode(true)
                                    }}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className={'recipePictureContainerTopBarEditBox'}>
                            <div className='icon' style={{color: 'white'}}>
                                <MdCheckCircle
                                    size={30}
                                    onClick={() => updateRecipe()}
                                />
                            </div>
                            <div className='icon' style={{color: 'white'}}>
                                <MdCancel
                                    size={30}
                                    onClick={() => {
                                        setEditMode(false)
                                        clearInputs()
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    {!editMode ? (
                        <h2>{recipe.name}</h2>
                    ) : (
                        <input
                            type='text'
                            placeholder='name'
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                    )}
                    <div className='recipePictureContainerTopBarDeleteBox'>
                        <div className='icon' style={{color: 'white'}}>
                            <MdDeleteForever
                                size={30}
                                onClick={() => deleteRecipe(recipe.id)}
                            />
                        </div>
                    </div>
                </div>

                {!editMode ? (
                    <></>
                ) : (
                    <input
                        id='recipeImgUrlInput'
                        type='text'
                        placeholder='imageUrl'
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                    />
                )}

                {!editMode ? (
                    <span>
                        <h5>PORTIONS :&ensp;{recipe.portions === 0 ? '?' : recipe.portions}</h5>
                        <h5>PREP.&ensp;TIME :&ensp;{recipe.time}</h5>
                    </span>
                ) : (
                    <span>
                        <div className='recipePictureContainerEditBox'>
                            <h5>PORTIONS :&ensp;</h5>
                            <select value={newPortions} onChange={(e) => setNewPortions(e.target.value)}>
                                <option value="0">?</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">> 10</option>
                            </select>
                        </div>
                        <div className='recipePictureContainerEditBox'>
                            <h5>PREP.&ensp;TIME :&ensp;</h5>
                            <select value={newTime} onChange={(e) => setNewTime(e.target.value)}>
                                <option value="?">?</option>
                                <option value="5 min">5 min</option>
                                <option value="10 min">10 min</option>
                                <option value="15 min">15 min</option>
                                <option value="30 min">30 min</option>
                                <option value="45 min">45 min</option>
                                <option value="1 h">1 h</option>
                                <option value="1,5 h">1,5 h</option>
                                <option value="2 h">2 h</option>
                                <option value="3 h">3 h</option>
                                <option value="> 4 h">> 4 h</option>
                            </select>
                        </div>
                    </span>
                )}
            </div>

            {!editMode ? (
                <Ingredients extractedRecipeId={recipeId}/>
            ) : (
                <></>
            )}

            {!editMode ? (
                <div className='prepDescription'>
                    <h3>PREPARATION:</h3>
                    &emsp;{recipe.preparation}
                </div>
            ) : (
                <div className='prepDescriptionInput'>
                    <h3>PREPARATION:</h3>
                    <textarea
                        className='prepDescriptionTextarea'
                        placeholder='preparation description'
                        value={newPreparation}
                        onChange={(e) => setNewPreparation(e.target.value)}
                    />
                </div>
            )}
            <div>

            </div>
        </div>
    )
}

export default Recipe
