import {useEffect, useState} from "react";
import {PacmanLoader} from "react-spinners";
import InputQuantity from "./InputQuantity";
import SelectUnit from "./SelectUnit";
import OptionsBasic from "./OptionsBasic";
import InputName from "./InputName";
import OptionsEdit from "./OptionsEdit";
import OptionsAdd from "./OptionsAdd";

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
        if (parseFloat(newQuantity) <= 0) {
            alert('Quantity min value must be grater than 0')
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
                {
                    ingredients.map( (ingredient) =>
                        editMode !== ingredient.id ? (  // ********* ROW IN NORMAL MODE ********
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
                                <td>
                                    <OptionsBasic
                                        onEdit={() => enableEditMode(ingredient)}
                                        onDelete={() => deleteIngredient(ingredient.id)}/>
                                </td>
                            </tr>
                        ) : (   // ********* ROW IN EDIT MODE ********
                            <tr key={ingredient.id}>
                                <td>
                                    <InputName
                                        value={newName}
                                        onChange={setNewName}/>
                                </td>
                                <td>
                                    <InputQuantity
                                        value={newQuantity}
                                        onChange={setNewQuantity}/>
                                </td>
                                <td>
                                    <SelectUnit
                                        value={newUnit}
                                        onChange={setNewUnit}/>
                                </td>
                                <td>
                                    <OptionsEdit
                                        onAccept={() => updateIngredient(ingredient.id)}
                                        onCancel={() => {
                                            setEditMode(0)
                                            clearInputs()
                                        }}
                                    />
                                </td>
                            </tr>
                        )
                    )
                }
                {
                    !addMode ? (   // ********* ADD ROW DISABLED ********
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <OptionsAdd
                                    onAdd={() => enableAddMode()}  />
                            </td>
                        </tr>
                    ) : (   // ********* ADD ROW ENABLED ********
                        <tr>
                            <td>
                                <InputName
                                    value={newName}
                                    onChange={setNewName}
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
                                    onAccept={() => saveNewIngredient()}
                                    onCancel={() => {
                                        setAddMode(false)
                                        clearInputs()
                                    }}
                                />
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Ingredients