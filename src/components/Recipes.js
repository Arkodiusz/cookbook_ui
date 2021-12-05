import image from "../assets/default-img.svg";
import {Link} from "react-router-dom";
import {MdAddCircle} from "react-icons/md";
import {PacmanLoader} from "react-spinners"

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

    if (recipes === null) {
        return (
            <div className='loaderContainer'>
                <div className='spinner'>
                    <PacmanLoader size={25}/>
                </div>
                <h3>FETCHING DATA...</h3>
                <h4>please wait while backend is waking up...</h4>
            </div>
        )
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
            <Link to={`/form`}>
                <div className='recipesThumbnailAdd' >
                    <MdAddCircle
                        id='addIcon'
                        size={50}
                    />
                </div>
            </Link>
        </div>
    )
}

export default Recipes
