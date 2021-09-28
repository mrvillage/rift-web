import Vue from "vue";
import Vuex from "vuex";
import { createClient } from "@supabase/supabase-js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
    supabase: createClient(
      "https://clhiogfbhdkwkomjretd.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzAzMjQ0MCwiZXhwIjoxOTM4NjA4NDQwfQ.Y77HcMFE1RoMsAcEgNd8iUpOaqkJ3-JBKSoU9U9ZUJ0"
    ),
    userData: null,
  },
  getters: {
    isSignedIn(state) {
      return !!state.supabase.auth.user();
    },

    isLoading(state) {
      return state.isLoading;
    },

    userData(state) {
      return state.userData;
    },

    supabase(state) {
      return state.supabase;
    },

    avatarURL(state) {
      if (!state.userData) {
        return null;
      }
      const userData = state.userData.user_data;
      if (userData.avatar) {
        if (userData.avatar.startsWith("a_")) {
          return `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.gif?size=256`;
        } else {
          return `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png?size=256`;
        }
      } else {
        return `https://cdn.discordapp.com/embed/avatars/${userData.discriminator %
          5}.png`;
      }
    },
  },
  mutations: {
    setUserData(state: state, data: object) {
      localStorage.setItem("userData", JSON.stringify(data));
      state.userData = data;
    },
  },
  actions: {},
  modules: {},
});
