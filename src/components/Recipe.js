import image from '../assets/default-img.png'
import {useEffect, useState} from "react";
import {IoMdAddCircle, MdCancel, MdCheckCircle, MdDeleteForever, MdEdit} from "react-icons/all";


const Recipe = () => {
    const route = window.location.pathname.split("/");
    const extractedRecipeId = route[route.length-1];

    const [recipe, setRecipe] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [addMode, setAddMode] = useState(false)
    const [editMode, setEditMode] = useState(0)
    const [newName, setNewName] = useState('')
    const [newQuantity, setNewQuantity] = useState('')
    const [newUnit, setNewUnit] = useState('')

    useEffect(() => {
        const getRecipe = async () => {
            const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${extractedRecipeId}`)
            const recipeFromDb = await res.json()
            console.log(recipeFromDb)
            setRecipe(recipeFromDb)
        }
        getRecipe().then()
    }, []);

    useEffect(() => {
        const getIngredients = async () => {
            const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${extractedRecipeId}/ingredients`)
            const ingredientsFromDb = await res.json()
            console.log(ingredientsFromDb)
            setIngredients(ingredientsFromDb)
        }
        getIngredients().then()
    }, []);

    const saveNewIngredient = async () => {
        if (newName === '' || newQuantity === '' || newUnit === '' || newUnit === 'unit') {
            alert('Please fill all inputs')
            return
        }
        const newIngredient = {
            name: newName,
            quantity: newQuantity,
            unit: newUnit
        }
        const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${extractedRecipeId}/ingredients`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newIngredient),
        })
        console.log('save new ingredient', newIngredient)
        setNewName('')
        setNewQuantity('')
        setNewUnit('')
        setAddMode(false)
        const data = await res.json()
        setIngredients([...ingredients, data])
    }

    const saveEditedIngredient = async (id) => {
        if (newName === '' || newQuantity === '' || newUnit === '' || newUnit === 'unit') {
            alert('Please fill all inputs')
            return
        }
        const newIngredient = {
            name: newName,
            quantity: newQuantity,
            unit: newUnit
        }
        const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${extractedRecipeId}/ingredients/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newIngredient),
        })
        const data = await res.json()
        const indexOfOldIngredient = ingredients.indexOf(ingredients.find((ingredient) => ingredient.id === id))
        const newIngredients = ingredients
        newIngredients[indexOfOldIngredient] = data
        setIngredients(newIngredients)
        console.log('successfully edited =>', data)
        setNewName('')
        setNewQuantity('')
        setNewUnit('')
        setEditMode(0)
    }

    const deleteIngredient = async (id) => {
        const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${extractedRecipeId}/ingredients/${id}`, {
            method: 'DELETE',
        })
        res.status === 200
            ? setIngredients(ingredients.filter((ingredient) => ingredient.id !== id))
            : alert('Error Deleting This Ingredient')
        console.log('delete ingredient => ' + id)
    }

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
            <div className='recipeTableContainer'>
                <h4>INGREDIENTS</h4>
                <table>
                    <tbody>
                        {ingredients.map((ingredient) =>
                            editMode !== ingredient.id ? (
                                // ********* ROW IN NORMAL MODE ********
                                <tr key={ingredient.id}>
                                    <td>
                                        {ingredient.name}
                                    </td>
                                    <td>
                                        {ingredient.quantity}
                                    </td>
                                    <td>
                                        {ingredient.unit.toLowerCase()}
                                    </td>
                                    <td className='setupColumn'>
                                        <div className='icon'>
                                            <MdEdit
                                                size={25}
                                                onClick={() => {
                                                    setAddMode(false)
                                                    setNewName(ingredient.name)
                                                    setNewQuantity(ingredient.quantity)
                                                    setNewUnit(ingredient.unit)
                                                    setEditMode(ingredient.id)
                                                }}
                                            />
                                        </div>
                                        <div className='icon'>
                                            <MdDeleteForever
                                                size={25}
                                                onClick={() => deleteIngredient(ingredient.id)
                                                }
                                            />
                                        </div>
                                    </td>
                                </tr>
                                ) : (
                                // ********* ROW IN EDIT MODE ********
                                <tr key={ingredient.id}>
                                    <td>
                                        <input
                                            type='text'
                                            placeholder='name'
                                            value={newName}
                                            onChange={(e) => setNewName(e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type='number'
                                            placeholder='quantity'
                                            value={newQuantity}
                                            onChange={(e) => setNewQuantity(e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <select name="newUnit" className="form-control"
                                                value={newUnit} onChange={(e) => setNewUnit(e.target.value)}>
                                            <option value="">unit</option>
                                            <option value="G">g</option>
                                            <option value="DAG">dag</option>
                                            <option value="KG">kg</option>
                                            <option value="ML">ml</option>
                                            <option value="L">l</option>
                                            <option value="TEASPOON">teaspoon</option>
                                            <option value="SPOON">spoon</option>
                                            <option value="PINCH">pinch</option>
                                            <option value="HANDFUL">handful</option>
                                            <option value="PIECE">piece</option>
                                        </select>
                                    </td>
                                    <td className='setupColumn'>
                                        <div className='icon'>
                                            <MdCheckCircle
                                                size={25}
                                                onClick={() => saveEditedIngredient(ingredient.id)}
                                            />
                                        </div>
                                        <div className='icon'>
                                            <MdCancel
                                                size={25}
                                                onClick={() => {
                                                    setEditMode(0)
                                                    setNewName('')
                                                    setNewQuantity('')
                                                    setNewUnit('')
                                                }}
                                            />
                                        </div>
                                    </td>

                                </tr>
                            )
                        )}
                        {!addMode ? (
                            // ********* ADD ROW DISABLED ********
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='setupColumn'>
                                    <div className='icon'>
                                        <IoMdAddCircle
                                            size={25}
                                            onClick={() => {
                                                setEditMode(0)
                                                setAddMode(true)
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            // ********* ADD ROW ENABLED ********
                            <tr>
                                <td>
                                    <input
                                        type='text'
                                        placeholder='name'
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type='number'
                                        placeholder='quantity'
                                        value={newQuantity}
                                        onChange={(e) => setNewQuantity(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <select name="newUnit" className="form-control"
                                            value={newUnit} onChange={(e) => setNewUnit(e.target.value)}>
                                        <option value="">unit</option>
                                        <option value="G">g</option>
                                        <option value="DAG">dag</option>
                                        <option value="KG">kg</option>
                                        <option value="ML">ml</option>
                                        <option value="L">l</option>
                                        <option value="TEASPOON">teaspoon</option>
                                        <option value="SPOON">spoon</option>
                                        <option value="PINCH">pinch</option>
                                        <option value="HANDFUL">handful</option>
                                        <option value="PIECE">piece</option>
                                    </select>
                                </td>
                                <td className='setupColumn'>
                                    <div className='icon'>
                                        <MdCheckCircle
                                            size={25}
                                            onClick={() => saveNewIngredient()}
                                        />
                                    </div>
                                    <div className='icon'>
                                        <MdCancel
                                            size={25}
                                            onClick={() => {
                                                setNewName('')
                                                setNewQuantity('')
                                                setNewUnit('')
                                                console.log('cancel adding ingredient')
                                                setAddMode(false)
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className='recipeTextBox'>
                &emsp;{recipe.preparation}
            </div>
            <div>

            </div>
        </div>
    )
}

export default Recipe
