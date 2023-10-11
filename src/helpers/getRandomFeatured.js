import { getPokemon } from "../axios/axios-pokemon";


export const getRandomFeatured = async () => {
    const pokemonIds = [];
    while (pokemonIds.length < 4) {
        const randomId = Math.floor(Math.random() * 1017) + 1;
        if (!pokemonIds.includes(randomId)) {
            pokemonIds.push(randomId);
        }
    }

    const featuredPokemon = await Promise.all(
        pokemonIds.map(async (id) => {
            const pokemon = await getPokemon(id);
            return pokemon;
        })
    );

    return featuredPokemon;
};
