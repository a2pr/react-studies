import React from "react";

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    let elements = ingredients.map(i => (<li key={i}>{i}</li>))

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients([...ingredients, newIngredient])
    }

    let hasElements = elements.length > 0

    let ingredientsSection =
        <section>
            <h2>Ingredients on hand:</h2>
            <ul aria-live='polite'>
                {elements}
            </ul>
            <div>
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button>Get a recipe</button>
            </div>
        </section>
    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input name="ingredient" aria-label="Add ingredient" type="text" placeholder="e.g tomato"/>
                <button>Add ingredient</button>
            </form>
            {hasElements ? ingredientsSection : null}
        </main>
    )
}