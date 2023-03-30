import Vue from "vue";
import Vuex from 'vuex'

import carrinho from "./modules/carrinho";
import parametro from "./modules/parametro";

Vue.use(Vuex)

export default new Vuex.Store({
   modules: { carrinho, parametro }
})