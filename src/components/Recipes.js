import image from "../assets/default-img.png";
import {Link} from "react-router-dom";

const Recipes = ({recipes}) => {

    function validateImageUrl(imageUrl) {
        if (imageUrl === undefined) {
            return image.toString()
        }
        if (imageUrl === '' || !(imageUrl.includes('http'))) {
            return image.toString()
        }
        return imageUrl
    }

    function preparePortionsValue(value) {
        if (value === 0) {
            return '?'
        }
        if (value>10) {
            return '> 10'
        }
        return value
    }

    return (
        <div className='recipesContainer'>

            {recipes.map((recipe) => (
                <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                    <div className='recipesThumbnail' >
                        <img
                            src={validateImageUrl(recipe.imageUrl)}
                            alt=''
                        />
                        <div className='recipesThumbnailBar'>
                            <h3>{recipe.name}</h3>
                            <div className='recipesThumbnailBarBottom'>
                                <h6>PORTIONS :&nbsp;&nbsp;{preparePortionsValue(recipe.portions)}</h6>
                                <h6>PREP.&nbsp;&nbsp;TIME :&nbsp;&nbsp;{recipe.time === '' ? '?' : recipe.time}</h6>
                            </div>
                        </div>
                        {recipe.isDefault ? (
                            <div id='defaultWatermark' style={{top: -2}}>
                                DEFAULT RECIPE
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </Link>
                )
            )}
        </div>
    )
}

export default Recipes
