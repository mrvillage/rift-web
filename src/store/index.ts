import { Guild } from "../types";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface State {
  supabase: SupabaseClient;
  currentGuildID: number | null;
  guilds: Guild[];
}

export default new Vuex.Store({
  state: {
    supabase: createClient(
      "https://db.rift.mrvillage.dev",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzAzMjQ0MCwiZXhwIjoxOTM4NjA4NDQwfQ.Y77HcMFE1RoMsAcEgNd8iUpOaqkJ3-JBKSoU9U9ZUJ0"
    ),
    currentGuildID: null,
    guilds: [
      { id: 1, name: "1" },
      { id: 2, name: "2" },
      { id: 3, name: "3" },
      { id: 4, name: "4" },
      { id: 5, name: "5" },
      { id: 6, name: "6" },
      { id: 7, name: "7" },
      { id: 8, name: "8" },
      { id: 9, name: "9" },
      { id: 10, name: "10" },
      { id: 11, name: "11" },
      { id: 12, name: "12" },
      { id: 13, name: "13" },
      { id: 14, name: "14" },
      { id: 15, name: "15" },
      { id: 16, name: "16" },
    ],
  },
  getters: {
    supabase: (state: State) => state.supabase,
    guilds: (state: State) => state.guilds,
    currentGuild: (state: State) => {
      const val = state.guilds.find(
        (guild) => guild.id === state.currentGuildID
      );
      if (val === undefined) {
        return null;
      } else {
        return val;
      }
    },
  },
  mutations: {
    setCurrentGuildID(state: State, id: number) {
      state.currentGuildID = id;
    },
  },
});
