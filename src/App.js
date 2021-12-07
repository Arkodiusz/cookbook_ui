import Header from "./components/Header";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import Recipes from "./components/Recipes";
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import About from "./components/About";
import Recipe from "./components/recipe/Recipe";
import Form from "./components/Form";

function App() {
    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        const getRecipes = async () => {
            const res = await fetch('https://bcookbook.herokuapp.com/recipes')
            const fetchedRecipes = await res.json()
            console.log('fetched recipes =>', fetchedRecipes)
            setRecipes(fetchedRecipes)
        }
        getRecipes().then()
    }, []);

    const saveNewRecipe = async (recipe, ingredientList) => {
        const recipeResponse = await fetch(`https://bcookbook.herokuapp.com/recipes`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(recipe),
        })
        const recipeData = await recipeResponse.json()
        setRecipes([...recipes, recipeData])
        const recipeId = recipeData.id
        const ingredientsResponse = await fetch(`https://bcookbook.herokuapp.com/recipes/${recipeId}/ingredients/list`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(ingredientList),
        })
        const ingredientsData = await ingredientsResponse.json()
        console.log('saved recipe =>', recipeData)
        console.log('saved ingredients =>', ingredientsData)
    }

    const filterRecipes = async (id) => {
        setRecipes(recipes.filter((recipe) => recipe.id.toString() !== id))
    }

    const replaceRecipe = async (newRecipe) => {
        const index = recipes.indexOf(recipes.find((recipe) => recipe.id === newRecipe.id))
        const newRecipes = recipes
        newRecipes[index] = newRecipe
        setRecipes(newRecipes)
        console.log('recipes updated')
    }

    return (
        <Router hashType='slash'>
            <div className="app">
                <Header />
                <Routes>
                    <Route path='/' element={
                        <Recipes
                            recipes={recipes}
                        />}
                    />
                    <Route path='/recipe/:id' element={
                        <Recipe
                            onDelete={(id) => filterRecipes(id)}
                            onUpdate={(recipe) => replaceRecipe(recipe)}
                        />}
                    />
                    <Route path='/form' element={
                        <Form
                            onSubmit={(recipe, ingredientList) => saveNewRecipe(recipe, ingredientList)}
                        />}
                    />
                    <Route path='/about' element={<About/>}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
