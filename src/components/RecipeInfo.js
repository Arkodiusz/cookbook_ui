import {MdCancel, MdCheckCircle, MdDeleteForever, MdEdit} from "react-icons/all";
import image from "../assets/default-img.svg";
import {useState} from "react";

const RecipeInfo = ({recipe, editMode, onEnableEditMode, onDisableEditMode, onUpdate, onDelete}) => {

    const [newName, setNewName] = useState('')
    const [newImageUrl, setNewImageUrl] = useState('')
    const [newPortions, setNewPortions] = useState('')
    const [newTime, setNewTime] = useState('')

    function validateImageUrl(imageUrl) {
        if (imageUrl === undefined) {
            return image.toString()
        }
        if (imageUrl === '' || !(imageUrl.includes('http'))) {
            return image.toString()
        }
        return imageUrl
    }

    function preparePortionsValue(value) {
        if (value === 0) {
            return '?'
        }
        if (value > 10 ) {
            return '> 10'
        }
        return value
    }

    function prepareTimeValue(value) {
        if (value === '') {
            return '?'
        }
        if (value > 10 ) {
            return '> 4 h'
        }
        return value
    }

    function clearInfoInputs() {
        setNewName('')
        setNewImageUrl('')
        setNewPortions('')
        setNewTime('')
    }

    if (!editMode) {
        return (
            <div className='recipePictureContainer'>
                <img
                    src={validateImageUrl(recipe.imageUrl)}
                    alt=''
                />
                <div className='recipePictureContainerTopBar'>
                    <div className={'recipePictureContainerTopBarEditBox'}>
                        <div className='icon' style={{color: 'white'}}>
                            <MdEdit
                                size={30}
                                onClick={() => {
                                    onEnableEditMode()
                                    setNewName(recipe.name)
                                    setNewImageUrl(recipe.imageUrl)
                                    setNewPortions(recipe.portions)
                                    setNewTime(recipe.time)
                                }}
                            />
                        </div>
                    </div>
                    <h2>{recipe.name}</h2>
                    <div className='recipePictureContainerTopBarDeleteBox'>
                        <div className='icon' style={{color: 'white'}}>
                            <MdDeleteForever
                                size={30}
                                onClick={() => onDelete()}
                            />
                        </div>
                    </div>
                </div>

                {recipe.isDefault ? (
                    <div id='defaultWatermark'>
                        DEFAULT RECIPE
                    </div>
                ) : (
                    <></>
                )}

                <span>
                    <h5>PORTIONS :&ensp;{preparePortionsValue(recipe.portions)}</h5>
                    <h5>PREP.&ensp;TIME :&ensp;{prepareTimeValue(recipe.time)}</h5>
                </span>
            </div>
        )
    }

    const saveRecipeInfo = async () => {
        if (newName === '') {
            alert('Name input can\'t be empty')
            return
        }
        if (newName === recipe.name && newImageUrl === recipe.imageUrl && newPortions === recipe.portions && newTime === recipe.time) {
            alert('Notching changed')
            return
        }
        const data = {
            name: newName,
            imageUrl: newImageUrl,
            portions: newPortions === '' ? '0' : newPortions,
            time: newTime === '' ? '?' : newTime
        }
        await onUpdate(data)
        clearInfoInputs()
    }

    return (
        <div className='recipePictureContainer'>
            <img
                src={validateImageUrl(newImageUrl)}
                alt=''
            />
            <div className='recipePictureContainerTopBar'>
                <div className={'recipePictureContainerTopBarEditBox'}>
                    <div className='icon' style={{color: 'white'}}>
                        <MdCheckCircle
                            size={30}
                            onClick={() => saveRecipeInfo()}
                        />
                    </div>
                    <div className='icon' style={{color: 'white'}}>
                        <MdCancel
                            size={30}
                            onClick={() => {
                                onDisableEditMode()
                                clearInfoInputs()
                            }}
                        />
                    </div>
                </div>
                <input
                    maxLength='32'
                    type='text'
                    placeholder='name'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <div className='recipePictureContainerTopBarDeleteBox'>
                    <div className='icon' style={{color: 'white'}}>
                        <MdDeleteForever
                            size={30}
                            onClick={() => onDelete(recipe.id)}
                        />
                    </div>
                </div>
            </div>
            <input
                maxLength='255'
                id='recipeImgUrlInput'
                type='text'
                placeholder='imageUrl'
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
            />
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
        </div>
    )
}

export default RecipeInfo