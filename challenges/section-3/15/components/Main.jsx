import React from "react";

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    let elements = ingredients.map(i => (<li key={i}>{i}</li>))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get('ingredient')
        setIngredients([...ingredients, newIngredient])
        console.log(ingredients)
    }

    return (
        <main>
            <form className="add-ingredient-form" action="" onSubmit={handleSubmit}>
                <input name="ingredient" aria-label="Add ingredient" type="text" placeholder="e.g tomato"/>
                <button>Add ingredient</button>
            </form>
            <ul>
                {elements}
            </ul>
        </main>
    )
}