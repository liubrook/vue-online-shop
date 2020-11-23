import Vue from 'vue';
import Vuex from 'vuex';

import { productGetters, manufacturerGetters } from './getters';
import { productMutations, cartMutations, manufacturerMutations, userMutations } from './mutation';

import { productActions, manufacturerActions } from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    manufacturers: [],
    user: {},
    userPoolId: '5fb76587b699513f3171b0f1'
  },
  mutations: {
    ...productMutations,
    ...cartMutations,
    ...manufacturerMutations,
    ...userMutations
  },
  getters: {
    ...productGetters,
    ...manufacturerGetters
  },
  actions: {
    ...productActions,
    ...manufacturerActions
  }
})
