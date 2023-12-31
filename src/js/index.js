const listaSelecaoPokemon = document.querySelectorAll(".pokemon");
const pokemonsCard = document.querySelectorAll(".cartao-pokemon");

listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener("click", () => {
        const cartaoPokemonAberto = document.querySelector(".aberto");
        cartaoPokemonAberto.classList.remove("aberto")

        const idPokemonSelecionado = pokemon.attributes.id.value;

        const idDocartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado;
        const cartaoPokemonParaAbrir = document.getElementById(idDocartaoPokemonParaAbrir);
        cartaoPokemonParaAbrir.classList.add("aberto");

        const pokemonAtivoNaListagem = document.querySelector(".ativo");
        pokemonAtivoNaListagem.classList.remove("ativo");

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado);
        pokemonSelecionadoNaListagem.classList.add("ativo");
    });
});