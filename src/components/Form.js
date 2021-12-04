import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {MdCheckCircle, MdCancel} from "react-icons/md";
import image from "../assets/default-img.png";

const Form = ({onSubmit}) => {
    const [newName, setNewName] = useState('')
    const [newImageUrl, setNewImageUrl] = useState('')
    const [newPortions, setNewPortions] = useState('')
    const [newTime, setNewTime] = useState('')
    const [newPreparation, setNewPreparation] = useState('')
    const navigate = useNavigate();

    const submitForm = async () => {
        if (newName === '') {
            alert('Please fill at least name input')
            return
        }
        const newRecipe = {
            name: newName,
            imageUrl: newImageUrl,
            portions: newPortions === '' ? '0' : newPortions,
            time: newTime === '' ? '?' : newTime,
            preparation: newPreparation,
            isDefault: false
        }
        await onSubmit(newRecipe)
        navigate('/', {replace: true});
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
        <div className='formContainer'>

            <h3>RECIPE ADD FORM</h3>

            <div className='formInput'>
                <label>Name:</label>
                <input
                    type='text'
                    placeholder='name'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
            </div>

            <div className='formInput'>
                <label>Image URL:</label>
                <input
                    type='text'
                    placeholder='imageUrl'
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                />
            </div>

            <img id='imagePreview'
                src={validateImageUrl(newImageUrl)}
                alt=''
            />

            <div className='formInput'>
                <label>Portions:</label>
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

            <div className='formInput'>
                <label>Preparation time:</label>
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

            <div id='formDescription'>
                <label>Preparation description:</label>
                <textarea
                    className='prepDescriptionTextarea'
                    placeholder='preparation description'
                    value={newPreparation}
                    onChange={(e) => setNewPreparation(e.target.value)}
                />
            </div>

            <div id='formOptions'>
                <div className='icon'>
                    <MdCheckCircle
                        size={35}
                        onClick={() => submitForm()}
                    />
                </div>
                <Link to='/'>
                    <div className='icon'>
                        <MdCancel
                            size={35}
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Form
