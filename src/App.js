import Header from "./components/Header";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import Recipes from "./components/Recipes";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from "./components/About";
import Recipe from "./components/Recipe";

function App() {
    const [showAddForm, setShowAddForm] = useState(false)
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const getRecipes = async () => {
            const recipesFromDb = await fetchRecipes()
            console.log(recipesFromDb)
            setRecipes(recipesFromDb)
        }
        getRecipes().then()
    }, []);

    const fetchRecipes = async () => {
        const res = await fetch('https://bcookbook.herokuapp.com/recipes')
        return res.json()
    }
    

    return (
        <Router>
            <div className="app">
                <Header
                    onAdd={() => {
                        setShowAddForm(!showAddForm)
                    }}
                    showAdd={showAddForm}
                />
                <Routes>
                    <Route path={"/" | "/recipes"} element={<Recipes recipes={recipes}/>}/>
                    <Route path='/recipes/:id' element={<Recipe/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
                <Footer />


            </div>
        </Router>
    )
}

export default App;
