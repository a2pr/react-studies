export default function Main(){
    const ingredients= ["Chicken", 'Oregano', 'Tomatoes']
    let elements = ingredients.map(i=> (<li key={i}>{i}</li>))
    return (
        <main>
            <form className="add-ingredient-form" action="">
                <input aria-label="Add ingredient" type="text" placeholder="e.g tomato"/>
                <button>Add ingredient</button>
            </form>
            <ul>
                {elements}
            </ul>
        </main>
    )
}