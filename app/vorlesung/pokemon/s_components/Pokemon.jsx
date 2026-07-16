export default async function Pokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const { results: pokemon } = await response.json();

    // Simuliere langsame UI.
    await new Promise((resolve) => {
        setTimeout(resolve, 4000);
    });

    return (
        <div className="flex flex-col items-center justify-center">
            {pokemon?.map((p) => (
                <p key={p.name}>{p.name}</p>
            ))}
        </div>
    );
}
