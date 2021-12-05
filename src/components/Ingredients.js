import {IoMdAddCircle, MdCancel, MdCheckCircle, MdDeleteForever, MdEdit} from "react-icons/all";
import {useEffect, useState} from "react";
import {PacmanLoader} from "react-spinners";

const Ingredients = ({extractedRecipeId, recipeIsDefault}) => {
    const [ingredients, setIngredients] = useState(null)
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
        const newIngredient = validateNewIngredient()
        if (newIngredient.name === '') {
            return
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
        const newIngredient = validateNewIngredient()
        if (newIngredient.name === '') {
            return
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
        if (recipeIsDefault) {
            alert('You can\'t delete ingredients of default recipe')
            return;
        }
        if (!window.confirm("Are you sure you wish to delete this item?")) {
            return
        }
        const res = await fetch(`https://bcookbook.herokuapp.com/recipes/${recipeId}/ingredients/${id}`, {
            method: 'DELETE',
        })
        res.status === 200
            ? setIngredients(ingredients.filter((ingredient) => ingredient.id !== id))
            : alert('Error Deleting This Ingredient')
        console.log('deleted ingredient id =>', id)
    }

    function validateNewIngredient() {
        if (newName === '' || newQuantity === '' || newUnit === '' || newUnit === 'unit') {
            alert('Please fill all inputs')
            return {name: ''}
        }
        if (parseFloat(newQuantity) > 1000) {
            alert('Quantity max value is 1000')
            return {name: ''}
        }
        return {
            name: newName,
            quantity: newQuantity,
            unit: newUnit
        }
    }

    function clearInputs() {
        setNewName('')
        setNewQuantity('')
        setNewUnit('')
    }

    function enableEditMode(ingredient) {
        if (recipeIsDefault) {
            alert('You can\'t edit ingredients of default recipe')
            return;
        }
        setAddMode(false)
        setNewName(ingredient.name)
        setNewQuantity(ingredient.quantity)
        setNewUnit(ingredient.unit)
        setEditMode(ingredient.id)
    }

    function enableAddMode() {
        if (recipeIsDefault) {
            alert('You can\'t add ingredients to default recipe')
            return;
        }
        setEditMode(0)
        clearInputs()
        setAddMode(true)
    }

    function validateKey(e) {
        const restrictedKeys = ['e', '+', '-']
        console.log(e.key)

        if (restrictedKeys.includes(e.key)) {
            e.preventDefault()
        }
    }

    if (ingredients === null) {
        return (
            <div className='loaderContainer'>
                <div className='spinner'>
                    <PacmanLoader size={25}/>
                </div>
            </div>
        )
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
                                        onClick={() => enableEditMode(ingredient)}
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
                                    maxLength='32'
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
                                    onKeyDown={ (e) => validateKey(e)}
                                    onChange={(e) => setNewQuantity(e.target.value.replace(',','.'))}
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
                                    <option value="TABLESPOON">tablespoon</option>
                                    <option value="PINCH">pinch</option>
                                    <option value="HANDFUL">handful</option>
                                    <option value="PIECE">piece</option>
                                    <option value="CUP">cup</option>
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
                                    onClick={() => enableAddMode()}
                                />
                            </div>
                        </td>
                    </tr>
                ) : (
                    // ********* ADD ROW ENABLED ********
                    <tr>
                        <td>
                            <input
                                maxLength='32'
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
                                onKeyDown={ (e) => validateKey(e)}
                                onChange={(e) => setNewQuantity(e.target.value.replace(',','.'))}
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
                                <option value="TABLESPOON">tablespoon</option>
                                <option value="PINCH">pinch</option>
                                <option value="HANDFUL">handful</option>
                                <option value="PIECE">piece</option>
                                <option value="CUP">cup</option>
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