import React from "react";

export default function Main() {

    const [ingredients, setIngredients] = React.useState([
        'all the main spices', 'pasta', 'ground beef', 'tomato paste'
    ])
    const [recipeShown, setRecipeShown] = React.useState(false)

    let elements = ingredients.map(i => (<li key={i}>{i}</li>))

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients([...ingredients, newIngredient])
    }

    function toggleRecipeShown() {
        setRecipeShown((prev) => !prev)
    }

    let hasElements = elements.length > 0

    let ingredientsSection =
        <section>
            <h2>Ingredients on hand:</h2>
            <ul aria-live='polite'>
                {elements}
            </ul>
            {elements.length > 1 && <div>
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={toggleRecipeShown}>Get a recipe</button>
            </div>}
        </section>
    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input name="ingredient" aria-label="Add ingredient" type="text" placeholder="e.g tomato"/>
                <button>Add ingredient</button>
            </form>
            {hasElements ? ingredientsSection : null}
            {recipeShown && <section>
                <h1>Cheff Claude Recommends </h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam, aut dolorem doloremque
                earum enim, ex fugiat nam nostrum odio possimus sint suscipit ullam? Adipisci aperiam assumenda modi
                porro quasi.
            </section>}
        </main>
    )
}