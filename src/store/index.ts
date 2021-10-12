import { createClient, SupabaseClient } from "@supabase/supabase-js";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface State {
  supabase: SupabaseClient;
}

export default new Vuex.Store<State>({
  state: {
    supabase: createClient(
      "https://db.rift.mrvillage.dev",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzAzMjQ0MCwiZXhwIjoxOTM4NjA4NDQwfQ.Y77HcMFE1RoMsAcEgNd8iUpOaqkJ3-JBKSoU9U9ZUJ0"
    ),
  },
  getters: {
    supabase: (state: State) => state.supabase,
  },
});
