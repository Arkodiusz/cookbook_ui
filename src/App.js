import Header from "./components/Header";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import Recipes from "./components/Recipes";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from "./components/About";
import Recipe from "./components/Recipe";
import Form from "./components/Form";

function App() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const getRecipes = async () => {
            const res = await fetch('https://bcookbook.herokuapp.com/recipes')
            const fetchedRecipes = await res.json()
            console.log('fetched recipes =>', fetchedRecipes)
            setRecipes(fetchedRecipes)
        }
        getRecipes().then()
    }, []);

    const saveNewRecipe = async (recipe) => {
        const res = await fetch(`https://bcookbook.herokuapp.com/recipes`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(recipe),
        })
        console.log('saved recipe=>', recipe)
        const data = await res.json()
        setRecipes([...recipes, data])
    }

    const filterRecipes = async (id) => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id))
    }

    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path='/' element={<Recipes recipes={recipes} />}/>
                    <Route path='/recipe/:id' element={<Recipe onDelete={(id) => filterRecipes(id)}/>}/>
                    <Route path='/form' element={<Form onSubmit={(data) => saveNewRecipe(data)}/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
