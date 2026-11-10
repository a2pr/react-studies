function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get('ingredient')
    console.log(newIngredient)
}

export default function Main() {
    const ingredients = ["Chicken", 'Oregano', 'Tomatoes']
    let elements = ingredients.map(i => (<li key={i}>{i}</li>))
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