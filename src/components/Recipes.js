import image from "../assets/default-img.png";
import {Link} from "react-router-dom";

const Recipes = ({recipes}) => {

    return (
        <div className='recipesContainer'>

            {recipes.map((recipe) => (
                <Link to={'/recipes/' + recipe.id} key={recipe.id}>
                    <div className='recipesThumbnail' >
                        <img
                            src={recipe.imageUrl === '' ? image : recipe.imageUrl}
                            alt=''
                        />
                        <div className='recipesThumbnailBar'>
                            <h3>{recipe.name}</h3>
                            <div className='recipesThumbnailBarBottom'>
                                <h6>PORTIONS :&nbsp;&nbsp;{recipe.portions === null ? '?' : recipe.portions}</h6>
                                <h6>PREP.&nbsp;&nbsp;TIME :&nbsp;&nbsp;{recipe.time === null ? '?' : recipe.time}</h6>
                            </div>
                        </div>
                    </div>
                </Link>
                )
            )}
        </div>
    )
}

export default Recipes
