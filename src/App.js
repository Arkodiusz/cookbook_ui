import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState} from "react";
import Recipes from "./components/Recipes";

function App() {
    const [showAddForm, setShowAddForm] = useState(false)
    const [recipes, setRecipes] = useState(
        [
            {
                id: 1,
                name: "ZUREK",
                preparation: "ttttttttttttttttttt",
                imgUrl: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_602,c_fill,g_auto,h_339,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200811115514-01-best-polish-foods.jpg'
            },
            {
                id: 2,
                name: "RECIPE 22",
                preparation: "eeeeeeeeeeeeeee",
                imgUrl: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_650,c_fill,g_auto,h_366,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200811115525-04-best-polish-foods.jpg'
            },
            {
                id: 3,
                name: "RECIPE 3",
                preparation: "mvcmvnvmvm",
                imgUrl: ''
            },
            {
                id: 4,
                name: "RECIPE 4",
                preparation: "dghgfdhghhfdh",
                imgUrl: ''
            },
            {
                id: 5,
                name: "RECIPE 5",
                preparation: "ghdghgdhgdhgfh",
                imgUrl: ''
            }
        ]
    )

    return (
        <div className="app">
            <Header
                onAdd={() => {
                    setShowAddForm(!showAddForm)
                }}
                showAdd={showAddForm}
            />

            <Recipes
                recipes={recipes}
            />

            <Footer />

        </div>
    )
}

export default App;
