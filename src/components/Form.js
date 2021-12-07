import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {MdCheckCircle, MdCancel} from "react-icons/md";
import image from "../assets/default-img.svg";
import InputName from "./ingredient/InputName";
import InputQuantity from "./ingredient/InputQuantity";
import OptionsEdit from "./ingredient/OptionsEdit";
import SelectUnit from "./ingredient/SelectUnit";
import OptionsBasic from "./ingredient/OptionsBasic";
import SelectTime from "./recipe/SelectTime";
import SelectPortions from "./recipe/SelectPortions";

const Form = ({onSubmit}) => {
    const [newRecipeName, setNewRecipeName] = useState('')
    const [newImageUrl, setNewImageUrl] = useState('')
    const [newPortions, setNewPortions] = useState('')
    const [newTime, setNewTime] = useState('')
    const [newPreparation, setNewPreparation] = useState('')
    const [newIngredientName, setNewIngredientName] = useState('')
    const [newQuantity, setNewQuantity] = useState('')
    const [newUnit, setNewUnit] = useState('')
    const [ingredientList, setIngredientList] = useState([])
    const navigate = useNavigate();

    const submitForm = async () => {
        if (newRecipeName === '') {
            alert('Please fill at least name input')
            return
        }
        const newRecipe = {
            name: newRecipeName,
            imageUrl: newImageUrl,
            portions: newPortions === '' ? '0' : newPortions,
            time: newTime === '' ? '?' : newTime,
            preparation: newPreparation,
            isDefault: false
        }
        await onSubmit(newRecipe, ingredientList)
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

    function clearIngredientInputs() {
        setNewIngredientName('')
        setNewQuantity('')
        setNewUnit('')
    }

    function addIngredientToList() {
        if (newIngredientName === '' || newQuantity === '' || newUnit === '' || newUnit === 'unit') {
            alert('Please fill inputs of new ingredient')
            return
        }
        if (parseFloat(newQuantity) > 1000) {
            alert('Quantity max value is 1000')
            return ''
        }
        const ingredient = {
            name: newIngredientName,
            quantity: newQuantity,
            unit: newUnit
        }

        setIngredientList([...ingredientList, ingredient])

        console.log(ingredientList)
        clearIngredientInputs()
    }

    function removeIngredientFromList(ingredient) {
        const newIngredientList = ingredientList.filter((i) => i !== ingredient)
        setIngredientList(newIngredientList)
    }

    return (
        <div className='formContainer'>

            <h2>RECIPE ADD FORM</h2>
            <br/>
            <h3>INFO:</h3>

            <div className='formInput'>
                <label>Name:</label>
                <input
                    maxLength='32'
                    type='text'
                    placeholder='name'
                    value={newRecipeName}
                    onChange={(e) => setNewRecipeName(e.target.value)}
                />
            </div>

            <div className='formInput'>
                <label>Image URL:</label>
                <input
                    maxLength='255'
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
                <SelectPortions
                    value={newPortions}
                    onChange={setNewPortions}
                />
            </div>

            <div className='formInput'>
                <label>Preparation time:</label>
                <SelectTime
                    value={newTime}
                    onChange={setNewTime}
                />
            </div>
            <br/>
            <div id='formDescription'>
                <h3>PREPARATION:</h3>
                <textarea
                    maxLength='4000'
                    className='prepDescriptionTextarea'
                    placeholder='preparation description'
                    value={newPreparation}
                    onChange={(e) => setNewPreparation(e.target.value)}
                />
            </div>
            <br/>
            <div className='ingredientsTableContainer'>
                <h3>INGREDIENTS:</h3>
                <table>
                    <thead>
                    <tr>
                        <th>NAME</th>
                        <th>QUANTITY</th>
                        <th>UNIT</th>
                        <th>OPTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ingredientList.map((ingredient) =>
                        <tr key={ingredient.id}>
                            <td>{ingredient.name}</td>
                            <td>{ingredient.quantity}</td>
                            <td>{ingredient.unit}</td>
                            <td>
                                <OptionsBasic
                                    onEdit={false}
                                    onDelete={() => removeIngredientFromList(ingredient)}
                                />
                            </td>
                        </tr>
                    )}
                    <tr>
                        <td>
                            <InputName
                                value={newIngredientName}
                                onChange={setNewIngredientName}
                            />
                        </td>
                        <td>
                            <InputQuantity
                                value={newQuantity}
                                onChange={setNewQuantity}
                            />
                        </td>
                        <td>
                            <SelectUnit
                                value={newUnit}
                                onChange={setNewUnit}
                            />
                        </td>
                        <td>
                            <OptionsEdit
                                onAccept={() => addIngredientToList()}
                                onCancel={() => clearIngredientInputs()}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div id='formOptions'>
                <div className='icon'>
                    <MdCheckCircle
                        size={40}
                        onClick={() => submitForm()}
                    />
                </div>
                <Link to='/'>
                    <div className='icon'>
                        <MdCancel
                            size={40}
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Form
