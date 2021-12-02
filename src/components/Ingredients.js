import {IoMdAddCircle, MdCancel, MdCheckCircle, MdDeleteForever, MdEdit} from "react-icons/all";
import {useEffect, useState} from "react";

const Ingredients = ({extractedRecipeId}) => {
    const [ingredients, setIngredients] = useState([])
    const [addMode, setAddMode] = useState(false)
    const [editMode, setEditMode] = useState(0)
    const [newName, setNewName] = useState('')
    const [newQuantity, setNewQuantity] = useState('')
    const [newUnit, setNewUnit] = useState('')
    const recipeId = extractedRecipeId

    useEffect(() => {
        const getIngredients = async () => {
            const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${recipeId}/ingredients`)
            const fetchedIngredients = await res.json()
            console.log('fetched ingredients', fetchedIngredients)
            setIngredients(fetchedIngredients)
        }
        getIngredients().then()
    }, [recipeId]);

    const saveNewIngredient = async () => {
        if (newName === '' || newQuantity === '' || newUnit === '' || newUnit === 'unit') {
            //TODO: replace alert with popup
            alert('Please fill all inputs')
            return
        }
        const newIngredient = {
            name: newName,
            quantity: newQuantity,
            unit: newUnit
        }
        const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${recipeId}/ingredients`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newIngredient),
        })
        console.log('saved ingredient', newIngredient)
        clearInputs()
        setAddMode(false)
        const data = await res.json()
        setIngredients([...ingredients, data])
    }

    const updateIngredient = async (id) => {
        if (newName === '' || newQuantity === '' || newUnit === '' || newUnit === 'unit') {
            //TODO: replace alert with popup
            alert('Please fill all inputs')
            return
        }
        const newIngredient = {
            name: newName,
            quantity: newQuantity,
            unit: newUnit
        }
        const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${recipeId}/ingredients/${id}`, {
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
        console.log('edited ingredient =>', data)
        clearInputs()
        setEditMode(0)
    }

    const deleteIngredient = async (id) => {
        //TODO: make a popup for confirmation
        const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${recipeId}/ingredients/${id}`, {
            method: 'DELETE',
        })
        res.status === 200
            ? setIngredients(ingredients.filter((ingredient) => ingredient.id !== id))
            //TODO: replace alert with popup
            : alert('Error Deleting This Ingredient')
        console.log('deleted ingredient id =>', id)
    }

    function clearInputs() {
        setNewName('')
        setNewQuantity('')
        setNewUnit('')
    }

    return (
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
                            <td className='ingredientsSetupColumn'>
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
                                <select name="newUnit"
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
                            <td className='ingredientsSetupColumn'>
                                <div className='icon'>
                                    <MdCheckCircle
                                        size={25}
                                        onClick={() => updateIngredient(ingredient.id)}
                                    />
                                </div>
                                <div className='icon'>
                                    <MdCancel
                                        size={25}
                                        onClick={() => {
                                            setEditMode(0)
                                            clearInputs()
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
                        <td className='ingredientsSetupColumn'>
                            <div className='icon'>
                                <IoMdAddCircle
                                    size={25}
                                    onClick={() => {
                                        setEditMode(0)
                                        clearInputs()
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
                            <select value={newUnit} onChange={(e) => setNewUnit(e.target.value)}>
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
                        <td className='ingredientsSetupColumn'>
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
                                        clearInputs()
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

    )
}

export default Ingredients