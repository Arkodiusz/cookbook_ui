import image from '../assets/default-img.png'


const RecipeRow = ({recipe}) => {

    return (
        <ul className='recipeRow'>
            <div className="recipeColumn recipeColumnLeft">
                <h3>{recipe.title}</h3>
                <p>Some text..</p>
            </div>
            <div className="recipeColumn recipeColumnRight">
                <img src={image} alt=''/>
            </div>
        </ul>
    )
}

export default RecipeRow
