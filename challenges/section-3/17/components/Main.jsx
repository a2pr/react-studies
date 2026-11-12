import React from "react";

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    let elements = ingredients.map(i => (<li key={i}>{i}</li>))

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients([...ingredients, newIngredient])
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input name="ingredient" aria-label="Add ingredient" type="text" placeholder="e.g tomato"/>
                <button>Add ingredient</button>
            </form>
            <ul>
                {elements}
            </ul>
        </main>
    )
}