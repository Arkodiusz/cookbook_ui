import image from "../assets/default-img.png";

const Recipes = ({recipes}) => {

    return (
        <ul className='recipesContainer'>

            {recipes.map((recipe) => (
                <li className='recipeThumbnail' key={recipe.id}>
                    <img
                        src={recipe.imgUrl === "" ? image : recipe.imgUrl}
                        alt=''
                    />
                    <div className='recipeThumbnailBar'>
                        <h3>{recipe.name}</h3>
                        <span>{recipe.preparation}</span>
                    </div>
                </li>
                )
            )}

        </ul>
    )
}

export default Recipes
