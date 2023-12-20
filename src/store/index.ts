import { createStore } from 'vuex'
import axios from 'axios';

interface Cocktail {
  name: string;
  ingredients: string[];
  // Other properties of the cocktail
}

interface State {
  cocktails: Cocktail[] | {};
}

export default createStore<State>({
  state() {
    return {
      cocktails: {},
    };
  },
  mutations: {
    setCocktails(state, cocktails: Cocktail[]) {
      state.cocktails = cocktails;
    },
  },
  actions: {
    async fetchCocktail({ commit }, code: string) {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`);
        commit('setCocktails', response.data);

      } catch (error) {
        console.error('Failed to fetch cocktail data', error);
      }
    },
  },
  getters: {
    getData: state => state.cocktails,
  },
});